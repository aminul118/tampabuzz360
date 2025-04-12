/* eslint-disable @typescript-eslint/no-explicit-any */
import CategoryButtons from "@/components/TampaToday/CategoryButton";
import NoNewsFound from "@/components/TampaToday/NoNewsFound";
import { PaginationComponent } from "@/components/TampaToday/Pagination";
import { Card, CardContent } from "@/components/ui/card";
import Container from "@/components/ui/Container";
import getAllNews from "@/lib/data/getAllNews";
import Image from "next/image";
import Link from "next/link";

interface TampaPageProps {
  searchParams: {
    category?: string;
    page?: string;
  };
}

const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(date);
};

const TampaPage = async ({ searchParams }: TampaPageProps) => {
  const category = searchParams.category || "";
  const page = parseInt(searchParams.page || "1", 10);
  const limit = 16;

  const { data: news, meta } = await getAllNews({ category, page, limit });

  return (
    <Container className="flex flex-col">
      <CategoryButtons />

      {news.length === 0 ? (
        <NoNewsFound category={category} />
      ) : (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {news.map((singleNews: any) => {
              const { _id, mainHeading, contents, updatedAt } = singleNews;
              const imageUrl = contents?.[0]?.image || "/default-image.jpg";
              const formatted = formatDate(updatedAt);

              return (
                <Link href={`/tampa/${_id}`} key={_id}>
                  <Card className="w-full max-w-md overflow-hidden">
                    <div className="relative w-full h-40">
                      <Image
                        src={imageUrl}
                        alt={mainHeading}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent>
                      <h2 className="text-lg font-bold">{mainHeading}</h2>
                      <p className="text-xs text-red-500 font-semibold">
                        {formatted}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          {meta.totalPages > 1 && (
            <div className="mt-8 flex justify-center">
              <PaginationComponent
                currentPage={meta.page}
                totalPages={meta.totalPages}
              />
            </div>
          )}
        </>
      )}
    </Container>
  );
};

export default TampaPage;
