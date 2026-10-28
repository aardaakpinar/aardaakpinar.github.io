import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { file, glob } from "astro/loaders";

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
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			/** Path relative to the JSON file, e.g. "../../assets/x.png". */
			logo: image().optional(),
			description: z.string(),
			/** Optional; undated projects are listed first (treated as newest). */
			started: z.coerce.date().optional(),
			source: z.url(),
			website: z.url().optional(),
		}),
});

/** Site identity and SEO defaults. The avatar is imported directly in Hero.astro. */
const site = defineCollection({
	loader: glob({ pattern: "site.json", base: "./src/content" }),
	schema: z.object({
		name: z.string(),
		lang: z.string(),
		description: z.string(),
		email: z.email(),
		favicon: z.string(),
		ogImage: z.string(),
		footer: z.object({
			copyright: z.string(),
			tagline: z.string(),
		}),
	}),
});

/** A two-part heading: `lead` is plain, `accent` is rendered as <em>. */
const heading = z.object({ lead: z.string(), accent: z.string() });

/** Every user-facing string that is not long-form content. */
const copy = defineCollection({
	loader: glob({ pattern: "copy.json", base: "./src/content" }),
	schema: z.object({
		hero: z.object({
			heading,
			intro: z.string(),
			avatarAlt: z.string(),
			navLabel: z.string(),
		}),
		/** Section ids and nav labels for the one-page home. */
		nav: z.object({
			about: z.object({ id: z.string(), label: z.string() }),
			work: z.object({ id: z.string(), label: z.string() }),
			contact: z.object({ id: z.string(), label: z.string() }),
		}),
		about: z.object({
			heading,
			experienceHeading: z.string(),
			educationHeading: z.string(),
			previous: z.string(),
			next: z.string(),
			stackHeading: heading,
			stackLabel: z.string(),
		}),
		projects: z.object({
			heading,
			source: z.string(),
			website: z.string(),
		}),
		contact: z.object({
			heading,
			button: z.string(),
		}),
		blog: z.object({
			title: z.string(),
			heading,
			description: z.string(),
			empty: z.string(),
			filterEmpty: z.string(),
			filterLabel: z.string(),
			allTags: z.string(),
			home: z.string(),
			allPosts: z.string(),
			/** Template with `{n}` replaced by the reading time. */
			minutesRead: z.string(),
			newer: z.string(),
			older: z.string(),
			moreAria: z.string(),
			backToTop: z.string(),
		}),
		notFound: z.object({
			title: z.string(),
			heading,
			button: z.string(),
		}),
	}),
});

/** A dated entry for the Experience and Education carousels. */
const timelineItem = z.object({
	period: z.string(),
	title: z.string(),
	detail: z.string(),
});

const experience = defineCollection({
	loader: file("src/content/experience.json"),
	schema: timelineItem,
});

const education = defineCollection({
	loader: file("src/content/education.json"),
	schema: timelineItem,
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
		href: z.url(),
	}),
});

/** Long-form bio written in Markdown (content/about.md). */
const bio = defineCollection({
	loader: glob({ pattern: "about.md", base: "./src/content" }),
});

export const collections = { blog, projects, experience, education, stack, links, bio, site, copy };
