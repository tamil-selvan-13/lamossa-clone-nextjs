import { cn } from "@/lib/utils";

interface OpenForWorkBadgeProps {
  className?: string;
}

export function OpenForWorkBadge({ className }: OpenForWorkBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface/50 backdrop-blur-sm text-sm font-medium text-white shadow-sm",
        className
      )}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
      </span>
      Available for work
    </div>
  );
}
