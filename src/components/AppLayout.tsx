import { ReactNode } from "react";
import type { Metadata } from "next";

interface AppLayoutProps {
  children: ReactNode;

  // Page metadata
  metadata: {
    title: string;
    description: string;
  };
}

export const metadata = (props: AppLayoutProps): Metadata => {
  return {
    title: props.metadata.title,
    description: props.metadata.description,
  };
};

export const AppLayout = (props: AppLayoutProps) => {
  return (
    <main className="w-screen h-screen dark:from-darkBackground-topaccent dark:to-darkBackground-bottomaccent bg-gradient-to-b from-lightBackground-topaccent to-lightBackground-bottomaccent">
      <div className="mx-[400px] pt-[150px]">{props.children}</div>
    </main>
  );
};
