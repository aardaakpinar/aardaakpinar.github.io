import { getCollection, getEntry } from "astro:content";

/** Projects, newest first. Undated projects are treated as newest. */
export async function getProjects() {
	const entries = await getCollection("projects");
	return entries.map((entry) => entry.data).sort((a, b) => (b.started?.valueOf() ?? Infinity) - (a.started?.valueOf() ?? Infinity));
}

/** Items of the file-based list collections, in file order. */
export async function getExperience() {
	return (await getCollection("experience")).map((entry) => entry.data);
}

export async function getEducation() {
	return (await getCollection("education")).map((entry) => entry.data);
}

export async function getStack() {
	return (await getCollection("stack")).map((entry) => entry.data);
}

export async function getLinks() {
	return (await getCollection("links")).map((entry) => entry.data);
}

/** Site identity and SEO defaults (content/site.json). */
export async function getSite() {
	const entry = await getEntry("site", "site");
	if (!entry) throw new Error('Missing content entry: site "site" (src/content/site.json)');
	return entry.data;
}

/** Every user-facing UI string (content/copy.json). */
export async function getCopy() {
	const entry = await getEntry("copy", "copy");
	if (!entry) throw new Error('Missing content entry: copy "copy" (src/content/copy.json)');
	return entry.data;
}

/** The Markdown bio (content/about.md). */
export async function getBio() {
	const entry = await getEntry("bio", "about");
	if (!entry) throw new Error('Missing content entry: bio "about" (src/content/about.md)');
	return entry;
}
