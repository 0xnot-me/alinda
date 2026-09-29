import fs from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";

// This checks existing availability only. It does not publish, restore, or list records.
export function requireExistingArchiveRoute(slug: string, allowNotionId = false) {
  const data = JSON.parse(fs.readFileSync(path.join(process.cwd(), "data", "blogs.json"), "utf8")) as {
    posts: { slug: string; isDeleted?: boolean }[];
  };
  const post = data.posts.find(post => post.slug === slug);
  if (post) {
    if (post.isDeleted) notFound();
    return;
  }
  // Preserve the existing root-route Notion-ID fallback; the current blog uses /blogs/{id}.
  if (allowNotionId && /^(?:[a-f0-9]{32}|[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12})$/i.test(slug)) return;
  notFound();
}
