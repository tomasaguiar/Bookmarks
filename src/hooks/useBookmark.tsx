import { trpc } from "@/utils/trpc";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { object, string, TypeOf } from "zod";

// interface Bookmark {
//   id: string;
//   url: string;
//   title: string;
//   color: string;
//   createdAt: Date;
//   updatedAt: Date;
//   bookmarkGroupId?: string;
//   userUid: string;
// }

import { createBookmarkSchema } from "@/server/bookmark.schema";

type Bookmark = TypeOf<typeof createBookmarkSchema>;

export const OnCreateBookmark = (bookmark: Bookmark) => {
  const createBookmark = trpc.createBookmark.useMutation();
};
