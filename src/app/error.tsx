"use client";
import { Button } from "@/components/ui/button";

const Error = ({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-lg w-full text-center p-6  bg-opacity-30 ">
        <h2 className="text-4xl font-bold mb-4">Oops! Something Went Wrong.</h2>
        <p className="text-lg mb-6">
          An unexpected error occurred. We’re working on it!
        </p>
        <Button onClick={() => reset()}>Try Again</Button>
      </div>
    </div>
  );
};

export default Error;
