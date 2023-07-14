import { z } from "zod";

export const createBookmarkSchema = z.object({
  url: z.string({
    required_error: "URL is required.",
  }),
  title: z.string({
    required_error: "Title is required.",
  }),
  color: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  bookmarkGroupId: z.string().optional(),
  userUid: z.string(),
});

// const params is createBookmarkSchema id
export const params = z.object({
  id: z.string().nonempty({
    message: "ID is required.",
  }),
});

export const updateBookmarkSchema = z.object({
  params,
  body: z
    .object({
      url: z.string(),
      title: z.string(),
      color: z.string(),
      updatedAt: z.boolean(),
      bookmarkGroupId: z.string().optional(),
      userUid: z.string(),
    })
    .partial(),
});

export const filterQuery = z.object({
  limit: z.number().default(1),
  page: z.number().default(10),
});

export type ParamsInput = z.TypeOf<typeof params>;
export type FilterQueryInput = z.TypeOf<typeof filterQuery>;
export type CreateBookmark = z.TypeOf<typeof createBookmarkSchema>;
export type UpdateBookmark = z.TypeOf<typeof updateBookmarkSchema>;
