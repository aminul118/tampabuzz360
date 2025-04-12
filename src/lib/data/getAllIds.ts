const getAllIds = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/api/v1/news/ids`
  );
  return await res.json();
};

export default getAllIds;
