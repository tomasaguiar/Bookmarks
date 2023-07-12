"use client";
import { LightningA } from "@phosphor-icons/react";

interface QuickAddProps {
  title: string;
}

export const QuickAdd = (props: QuickAddProps) => {
  return (
    <button className="w-[35px] h-[35px] flex items-center justify-center bg-[#1C1C1C] border-[1px] border-[#3C3C3C] rounded-lg">
      <LightningA className="w-5 h-5 text-white" />
    </button>
  );
};
