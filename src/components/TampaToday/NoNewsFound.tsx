import { Newspaper } from "lucide-react";

const NoNewsFound = ({ category }: { category: string }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-284px)] gap-6 text-center">
      <Newspaper className="text-red-500" size={70} />

      <p className="text-2xl lg:text-3xl text-red-500 font-semibold">
        No News Found in {category} category
      </p>
    </div>
  );
};

export default NoNewsFound;
