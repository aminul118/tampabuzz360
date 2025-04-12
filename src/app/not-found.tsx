"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <div className="rounded-lg p-8 max-w-sm w-full">
        {/* Next.js 15 Image Fix */}
        <Image
          src="./not-found.svg"
          alt="Page not found image of Tampabuzz360"
          width={0}
          height={0}
          sizes="100vw"
          className="w-64 h-64 mx-auto"
        />

        <h1 className="text-4xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          Sorry, we couldn’t find the page you’re looking for.
        </p>

        {/* Next.js 15 - Link wrapping Button works fine */}
        <Link href="/">
          <Button>Return to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
