const getAllIds = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/api/v1/news/ids`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  return await res.json();
};

export default getAllIds;
