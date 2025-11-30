"use client";
import { cn } from "../../lib/utils";

export const PlusCard = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "relative w-64 h-96 rounded-2xl overflow-hidden flex items-center justify-center bg-black",
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,150,0.3)_1px,transparent_1px)] [background-size:4px_4px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black" />
      <div className="relative z-10 text-white text-6xl font-bold">+</div>
    </div>
  );
};
