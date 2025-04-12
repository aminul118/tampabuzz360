export interface INews {
  search?: string;
  category?: string;
  page?: string | number;
  limit?: string | number;
}

const getAllNews = async ({
  search,
  category,
  page = "1",
  limit = "10",
}: INews) => {
  const queryParams = new URLSearchParams();

  if (search) queryParams.append("search", search);
  if (category) queryParams.append("category", category);
  queryParams.append("page", page.toString());
  queryParams.append("limit", limit.toString());

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/api/v1/news?${queryParams.toString()}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  return await res.json();
};

export default getAllNews;
