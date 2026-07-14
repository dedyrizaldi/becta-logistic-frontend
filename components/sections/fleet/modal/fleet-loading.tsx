import { Skeleton } from "@/components/ui/skeleton";

export default function FleetLoading() {
  return (
    <div className="space-y-10 p-8 lg:p-10">
      {/* Hero */}
      <Skeleton className="h-[420px] w-full rounded-3xl" />

      {/* Content */}
      <div className="grid gap-10 lg:grid-cols-[420px_1fr]">
        {/* Left */}
        <div className="space-y-5">
          <Skeleton className="h-[320px] rounded-2xl" />

          <div className="grid grid-cols-4 gap-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="h-24 rounded-xl" />
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="space-y-6">
          <Skeleton className="h-10 w-72 rounded-lg" />

          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-11/12" />
          <Skeleton className="h-5 w-10/12" />
          <Skeleton className="h-5 w-9/12" />

          <div className="grid grid-cols-2 gap-4 pt-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <Skeleton key={index} className="h-28 rounded-2xl" />
            ))}
          </div>

          <div className="flex gap-4 pt-6">
            <Skeleton className="h-14 w-52 rounded-xl" />
            <Skeleton className="h-14 w-52 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
