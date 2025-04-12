const getNewsById = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/api/v1/news/${id}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch news");
  }

  return await res.json();
};

export default getNewsById;
