import { defineCollection, z } from "astro:content";
import { file, glob } from "astro/loaders";

/** A two-part heading: `lead` is plain, `accent` is rendered as <em>. */
const heading = z.object({ lead: z.string(), accent: z.string() });

const blog = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
	schema: z.object({
		title: z.string(),
		slug: z.string().optional(),
		publishedAt: z.coerce.date(),
		description: z.string(),
		tags: z.array(z.string()).default([]),
	}),
});

const projects = defineCollection({
	loader: glob({ pattern: "**/*.json", base: "./src/content/projects" }),
	schema: z.object({
		title: z.string(),
		logo: z.string().optional(),
		description: z.string(),
		/** Optional; undated projects are listed first (treated as newest). */
		started: z.coerce.date().optional(),
		source: z.string().url(),
		website: z.string().url().optional(),
	}),
});

const experience = defineCollection({
	loader: file("src/content/experience.json"),
	schema: z.object({
		period: z.string(),
		title: z.string(),
		detail: z.string(),
	}),
});

const stack = defineCollection({
	loader: file("src/content/stack.json"),
	schema: z.object({
		name: z.string(),
		/** Icon id from https://skillicons.dev */
		icon: z.string(),
	}),
});

const links = defineCollection({
	loader: file("src/content/links.json"),
	schema: z.object({
		label: z.string(),
		handle: z.string(),
		/** Boxicons brand icon class */
		icon: z.string(),
		href: z.string().url(),
	}),
});

/** Long-form page copy written in Markdown (e.g. pages/about.md). */
const pages = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
});

/** Single-entry collection ("main") holding site-wide metadata and UI copy. */
const site = defineCollection({
	loader: file("src/content/site.json"),
	schema: z.object({
		name: z.string(),
		url: z.string().url(),
		description: z.string(),
		image: z.string(),
		footer: z.object({ copyright: z.string(), tagline: z.string() }),
		hero: z.object({
			heading,
			intro: z.string(),
			image: z.object({ src: z.string(), alt: z.string() }),
			nav: z.array(z.object({ label: z.string(), href: z.string() })),
		}),
		about: z.object({ heading, experienceTitle: z.string(), stackHeading: heading }),
		blog: z.object({
			heading,
			title: z.string(),
			description: z.string(),
			allPostsLabel: z.string(),
			emptyText: z.string(),
			filterEmptyText: z.string(),
		}),
		projects: z.object({ heading }),
		contact: z.object({ heading, email: z.string().email(), buttonLabel: z.string() }),
		notFound: z.object({ title: z.string(), heading, buttonLabel: z.string() }),
	}),
});

export const collections = { blog, projects, experience, stack, links, pages, site };
