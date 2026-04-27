import path from "path"
import fs from "fs/promises"
import { hash } from "../utils"

type ManifestEntry = { file?: string; css?: string[] }

const renameFile = (
    renamedFiles: Map<string, string>,
    file: string,
    newCss: string,
): void => {
    const newFileName = file.replace(/\.css$/, `-${hash(newCss)}.css`)
    renamedFiles.set(file, newFileName)
}

const applyToManifest = async (
    renamedFiles: Map<string, string>,
    bundleKeys: string[],
    outDir: string,
): Promise<void> => {
    // rename each css file on disk
    for (const [oldFile, newFile] of renamedFiles) {
        const oldPath = path.join(outDir, oldFile)
        const newPath = path.join(outDir, newFile)
        await fs.rename(oldPath, newPath)
    }

    // patch manifest.json on disk to reflect new filenames
    const manifestFile = bundleKeys.find((key) => key.endsWith("manifest.json"))
    if (!manifestFile) return

    const manifestPath = path.join(outDir, manifestFile)

    let manifestContent: string
    try {
        manifestContent = await fs.readFile(manifestPath, "utf8")
    } catch {
        return
    }

    const manifest = JSON.parse(manifestContent) as Record<
        string,
        ManifestEntry
    >

    for (const entry of Object.values(manifest)) {
        // direct css entry (e.g. an scss entrypoint)
        if (entry.file && renamedFiles.has(entry.file)) {
            entry.file = renamedFiles.get(entry.file)!
        }
        // css array on a js chunk that imports css
        if (Array.isArray(entry.css)) {
            entry.css = entry.css.map(
                (cssFile) => renamedFiles.get(cssFile) ?? cssFile,
            )
        }
    }

    await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2), "utf8")
}

export default {
    renameFile,
    applyToManifest,
}
