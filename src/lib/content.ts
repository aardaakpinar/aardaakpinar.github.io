import { getCollection, getEntry } from "astro:content";

/** Site-wide metadata and UI copy (content/site.json). */
export async function getSite() {
	const entry = await getEntry("site", "main");
	if (!entry) throw new Error('Missing content entry: site "main" (src/content/site.json)');
	return entry.data;
}

/** Projects, newest first. */
export async function getProjects() {
	const entries = await getCollection("projects");
	return entries.map((entry) => entry.data).sort((a, b) => (b.started?.valueOf() ?? Infinity) - (a.started?.valueOf() ?? Infinity));
}

/** Items of a file-based list collection, in file order. */
export async function getExperience() {
	return (await getCollection("experience")).map((entry) => entry.data);
}

export async function getStack() {
	return (await getCollection("stack")).map((entry) => entry.data);
}

export async function getLinks() {
	return (await getCollection("links")).map((entry) => entry.data);
}

export async function getPage(id: string) {
	const entry = await getEntry("pages", id);
	if (!entry) throw new Error(`Missing content entry: pages "${id}"`);
	return entry;
}
