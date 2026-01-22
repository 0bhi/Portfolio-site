import { Skeleton } from "@/components/ui/skeleton";

export default function SkillsSkeleton() {
  return (
    <div className="space-y-8">
      <div className="overflow-hidden relative">
        <div className="flex gap-8 w-max">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Skeleton key={i} className="h-12 w-32 flex-shrink-0" />
          ))}
        </div>
      </div>
      <div className="overflow-hidden relative">
        <div className="flex gap-8 w-max">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Skeleton key={i} className="h-12 w-32 flex-shrink-0" />
          ))}
        </div>
      </div>
    </div>
  );
}

