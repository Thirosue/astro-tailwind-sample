export type Account = {
  id: number;
  name: string;
  title: string;
  description: string;
};

export async function getAcount(): Promise<Account> {
  const response = await fetch("http://localhost:8080/api/get/account", {
    headers: {
      "Content-Type": "application/json",
      "X-User-Id": `${process.env.ACCOUNT_ID}`,
    },
  });
  const data = (await response.json()) as Account;
  return data;
}
