"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { useSearchParams } from "next/navigation";
import clsx from "clsx";

const categories = [
  "tech",
  "politics",
  "health",
  "education",
  "entertainment",
  "business",
  "science",
];

const CategoryButtons = () => {
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get("category");

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {/* All Stories Button */}
      <Link href={`/tampa`}>
        <Button variant={currentCategory === null ? "destructive" : "default"}>
          All Stories
        </Button>
      </Link>

      {categories.map((cat) => {
        const isActive = currentCategory?.toLowerCase() === cat.toLowerCase();
        const displayName =
          cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase();

        return (
          <Link key={cat} href={`/tampa?category=${cat}`}>
            <Button
              variant={isActive ? "destructive" : "default"}
              className={clsx({ " text-white": isActive })}
            >
              {displayName}
            </Button>
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryButtons;
