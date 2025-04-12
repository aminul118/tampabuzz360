/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "../ui/Container";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import Title from "../ui/Title";
import { Button } from "../ui/button";
import getAllNews from "@/lib/data/getAllNews";

const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC", // ensures consistent server & client output
  }).format(date);
};

const LatestStories = async () => {
  const news = await getAllNews({ limit: "10" });

  return (
    <Container>
      <Title title="Latest Stories" />

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
        {news?.data?.map((singleNews: any) => {
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

      <div className="flex justify-center mt-6">
        <Link href="/tampa">
          <Button>Browse all stories</Button>
        </Link>
      </div>
    </Container>
  );
};

export default LatestStories;
