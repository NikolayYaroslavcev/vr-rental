import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "main";
  id?: string;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, as: Tag = "div", id }, ref) => {
    return (
      <Tag
        ref={ref}
        id={id}
        className={cn(
          "w-full mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-0",
          "max-w-[1280px]",
          className
        )}
      >
        {children}
      </Tag>
    );
  }
);

Container.displayName = "Container";
