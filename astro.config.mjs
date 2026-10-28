import { defineConfig } from "astro/config";

// `site` is the single source of truth for the canonical origin (see layouts/BaseLayout.astro).
export default defineConfig({
	site: "https://aardaakpinar.github.io",
	output: "static",
});
