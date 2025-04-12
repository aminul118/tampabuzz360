/* eslint-disable @typescript-eslint/no-explicit-any */
import getAllNews from "@/lib/data/getAllNews";

type TCategory = {
  category: string;
};

const CategoryWiseTampa = async ({ category }: TCategory) => {
  const data = await getAllNews({ category });

  return (
    <div>
      {data.map((newsItem: any, i: number) => (
        <div key={i}>{newsItem.title}</div>
      ))}
    </div>
  );
};

export default CategoryWiseTampa;
