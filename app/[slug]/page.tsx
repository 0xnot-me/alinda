import ArticleClient from "./ArticleClient";
import { requireExistingArchiveRoute } from "@/lib/archive-route";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  requireExistingArchiveRoute("" + slug, true);
  return <ArticleClient />;
}
