import crypto from "crypto"

type OutputChunkLike = { type: "chunk" }
type OutputAssetLike = { type: "asset"; source: string | Uint8Array }

export const isOutputAsset = (
    bundle: OutputChunkLike | OutputAssetLike,
): bundle is OutputAssetLike => bundle.type === "asset"

export const hash = (content: string, length = 8) =>
    crypto.createHash("sha256").update(content).digest("hex").slice(0, length)
