import Container from "@/components/ui/Container";
import { Skeleton } from "@/components/ui/skeleton";


const NewsDetailsLoading = () => {
  return (
    <Container>
      {/* Heading */}
      <div className="space-y-2 mb-4">
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-32 bg-red-400/50" />
      </div>

      {/* Main layout grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* Left Content */}
        <div className="col-span-8 space-y-10">
          {[1, 2].map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="w-full h-64 rounded-lg" />
              <Skeleton className="h-6 w-2/3" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          ))}
        </div>

        {/* Right Sidebar Placeholder */}
        <div className="col-span-4 space-y-4">
          <Skeleton className="h-6 w-1/2" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </div>
    </Container>
  );
};

export default NewsDetailsLoading;
