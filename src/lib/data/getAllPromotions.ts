/* eslint-disable @typescript-eslint/no-explicit-any */
type TPromo = {
  image: string;
  website: string;
};

const getAllPromotions = async (
  filterKey?: "homePage" | "newsDetails" | "newsDetailsSquare"
): Promise<TPromo[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/api/v1/promotions`,
    {
      cache: "no-store", // optional: to ensure fresh SSR data
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch promotions");
  }

  const data = await res.json();

  // If a specific key is requested, filter it out
  if (filterKey) {
    return data
      .map((item: any) => item[filterKey])
      .filter((item: TPromo | null) => Boolean(item));
  }

  return data;
};

export default getAllPromotions;
