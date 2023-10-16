"use client";
import { LightningA } from "@phosphor-icons/react";
import { useState } from "react";
import { OnCreateBookmark } from "@/hooks/useBookmark";

import { trpc } from "@/utils/trpc";

interface QuickAddProps {
  title: string;
}

export const QuickAdd = (props: QuickAddProps) => {
  // const copyFromClipboard = () => {
  //   navigator.clipboard.readText().then((text) => {
  //     console.log(text);
  //   });
  // };

  const [showInput, setShowInput] = useState<boolean>(false);
  const [storeValue, setStoreValue] = useState<Website>({
    title: "",
    url: "",
  });

  interface Website {
    title: string;
    url: string;
  }

  return (
    <>
      {/* <button
        onClick={() => (showInput ? setShowInput(false) : setShowInput(true))}
        className="w-[35px] h-[35px] flex items-center justify-center bg-[#1C1C1C] border-[1px] border-[#3C3C3C] rounded-lg"
      >
        <LightningA className="w-5 h-5 text-white" />
      </button>
      {showInput && (
        <>
          <input
            placeholder="Insert the website url"
            onChange={(e) =>
              setStoreValue({ ...storeValue, url: e.target.value })
            }
            className="w-full h-[35px] bg-[#1C1C1C] rounded-md text-white border-[#3C3C3C] px-3 text-sm"
          ></input>
          <button
            className="w-[35px] h-[35px] flex items-center justify-center bg-[#1C1C1C] border-[1px] border-[#3C3C3C] rounded-lg"
            onClick={() => {
              OnCreateBookmark({
                url: storeValue.url,
                title: storeValue.title,
                color: "",
                createdAt: new Date(),
                updatedAt: new Date(),
                bookmarkGroupId: "",
                userUid: "",
              });
            }}
          ></button>
        </>
      )} */}
    </>
  );
};
