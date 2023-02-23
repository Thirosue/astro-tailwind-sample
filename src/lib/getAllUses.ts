/**
 * Model Category
 *
 */
export type Category = {
  id: number;
  name: string;
  order: number;
};

/**
 * Model Users
 *
 */
export type Users = {
  id: number;
  categoryId: number;
  title: string;
  description: string;
};

export async function getAllUses(): Promise<
  (Users & {
    category: Category;
  })[]
> {
  const response = await fetch("http://localhost:8080/api/uses", {
    headers: {
      "Content-Type": "application/json",
      "X-User-Id": `${process.env.ACCOUNT_ID}`,
    },
  });
  const data = (await response.json()) as (Users & {
    category: Category;
  })[];
  return data;
}
