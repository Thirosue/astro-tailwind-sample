import { getCollection } from "astro:content";
interface Article {
  author: string;
  date: string;
  title: string;
  description: string;
  slug: string;
}

export async function getAllArticles(): Promise<Article[]> {
  const articles = await getCollection("article");
  return articles
    .map((data) => ({ ...data.data, slug: data.slug }))
    .sort(
      (a, z) =>
        new Date(z.date).getMilliseconds() - new Date(a.date).getMilliseconds()
    );
}
