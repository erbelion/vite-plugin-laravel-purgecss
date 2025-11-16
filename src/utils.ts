import crypto from "crypto"
import type { OutputBundle, OutputAsset } from "rollup"

export const isOutputAsset = (
    bundle: OutputBundle[keyof OutputBundle]
): bundle is OutputAsset => bundle.type === "asset"

export const hash = (content: string, length = 8) =>
    crypto.createHash("sha256").update(content).digest("hex").slice(0, length)
