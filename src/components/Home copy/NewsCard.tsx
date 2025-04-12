import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

type NewsCardType = {
  src: string;
  alt: string;
};

const NewsCard = ({ src, alt }: NewsCardType) => {
  return (
    <Card className="w-full max-w-md  overflow-hidden">
      <div className="relative w-full h-64">
        <Image src={src} alt={alt} layout="fill" objectFit="cover" />
      </div>
      <CardContent>
        <h2 className="text-lg font-bold">
          Raymond James Stadium will turn into a golf course this March
        </h2>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
