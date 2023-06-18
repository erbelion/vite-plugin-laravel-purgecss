var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);
var import_purgecss = require("purgecss");

// src/getTemplatePath.ts
var templates = {
  blade: "resources/views/**/*.blade.php",
  svelte: "resources/{js,views}/**/*.svelte",
  vue: "resources/{js,views}/**/*.vue",
  react: "resources/{js,views}/**/*.{tsx,ts,jsx,js,html}",
  angular: "resources/{js,views}/**/*.html"
};
var getTemplatePath_default = (template) => {
  if (!(template in templates))
    throw new Error(`Template ${template} is not supported`);
  return templates[template];
};

// src/index.ts
var isOutputAsset = (bundle) => bundle.type === "asset";
var src_default = (options) => {
  return {
    name: "vite-plugin-laravel-purgecss",
    enforce: "post",
    async generateBundle(_options, bundle) {
      var _a, _b;
      const cssFiles = Object.keys(bundle).filter(
        (key) => key.endsWith(".css")
      );
      if (!cssFiles)
        return;
      let paths = [];
      (_a = options == null ? void 0 : options.paths) == null ? void 0 : _a.forEach((path) => paths.push(path));
      (_b = options == null ? void 0 : options.templates) == null ? void 0 : _b.forEach(
        (template) => paths.push(getTemplatePath_default(template))
      );
      for (const file of cssFiles) {
        if (!isOutputAsset(bundle[file]))
          continue;
        const purged = await new import_purgecss.PurgeCSS().purge({
          content: paths,
          css: [{ raw: bundle[file]["source"] }],
          safelist: (options == null ? void 0 : options.safelist) || [],
          extractors: (options == null ? void 0 : options.extractors) || []
        });
        bundle[file]["source"] = purged[0].css;
      }
    }
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
