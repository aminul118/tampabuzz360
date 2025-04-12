"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import Container from "../ui/Container";
import CategoryWiseTampa from "./CategoryWiseTampa";

type TCategories = {
  categories: string[];
  selectedCategory: string;
};

const Categories = ({ categories, selectedCategory }: TCategories) => {
  const router = useRouter();

  const handleCategory = (category: string) => {
    router.push(`?category=${category}`);
  };

  return (
    <Container>
      <div className="space-x-2 w-full flex justify-center mb-4">
        <Button onClick={() => handleCategory("")}>All Tampa</Button>
        {categories.map((category, i) => (
          <Button key={i} onClick={() => handleCategory(category)}>
            {category}
          </Button>
        ))}
      </div>

      <CategoryWiseTampa category={selectedCategory} />
    </Container>
  );
};

export default Categories;
