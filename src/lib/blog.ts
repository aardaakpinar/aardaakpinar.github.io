import { getCollection, type CollectionEntry } from "astro:content";

export type BlogEntry = CollectionEntry<"blog">;

export interface Post {
	slug: string;
	title: string;
	description: string;
	publishedAt: Date;
	tags: string[];
	minutes: number;
	entry: BlogEntry;
}

const WORDS_PER_MINUTE = 200;

export const readingMinutes = (body = "") => Math.max(1, Math.ceil(body.split(/\s+/).filter(Boolean).length / WORDS_PER_MINUTE));

export const postSlug = (entry: BlogEntry) => entry.data.slug ?? entry.id;

export const postHref = (slug: string) => `/blog/${slug}/`;

export const tagHref = (tag: string) => `/blog/?tag=${encodeURIComponent(tag.toLowerCase())}`;

const toPost = (entry: BlogEntry): Post => ({
	slug: postSlug(entry),
	title: entry.data.title,
	description: entry.data.description,
	publishedAt: entry.data.publishedAt,
	tags: entry.data.tags,
	minutes: readingMinutes(entry.body),
	entry,
});

/** All posts, newest first. */
export async function getPosts(): Promise<Post[]> {
	const entries = await getCollection("blog");
	return entries.map(toPost).sort((a, b) => b.publishedAt.valueOf() - a.publishedAt.valueOf());
}

/** Tags with post counts, most used first (case-insensitive). */
export function countTags(posts: Post[]): [string, number][] {
	const counts = new Map<string, number>();
	for (const post of posts) {
		for (const tag of post.tags) {
			const key = tag.toLowerCase();
			counts.set(key, (counts.get(key) ?? 0) + 1);
		}
	}
	return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}
