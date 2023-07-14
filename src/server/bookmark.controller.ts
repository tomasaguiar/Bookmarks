import { TRPCError } from "@trpc/server";
import { Prisma, PrismaClient } from "@prisma/client";
import {
  CreateBookmark,
  FilterQueryInput,
  ParamsInput,
  UpdateBookmark,
} from "./bookmark.schema";

const prisma = new PrismaClient();

export const createBookmark = async ({ input }: { input: CreateBookmark }) => {
  try {
    const bookmark = await prisma.bookmark.create({
      data: {
        url: input.url,
        title: input.title,
        color: input.color,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        bookmarkGroupId: input.bookmarkGroupId,
        userUid: input.userUid,
      },
    });

    return {
      status: "success",
      data: {
        bookmark,
      },
    };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        throw new TRPCError({
          code: "CONFLICT",
          message: "Bookmark with that title already exists",
        });
      }
    }
    throw error;
  }
};

export const updateBookmark = async ({
  paramsInput,
  input,
}: {
  paramsInput: ParamsInput;
  input: UpdateBookmark["body"];
}) => {
  try {
    const updateBookmark = await prisma.bookmark.update({
      where: { id: paramsInput.id },
      data: {
        url: input.url,
        title: input.title,
        color: input.color,
        updatedAt: input.updatedAt ? new Date() : "",
        bookmarkGroupId: input.bookmarkGroupId,
        userUid: input.userUid,
      },
    });

    return {
      status: "success",
      note: updateBookmark,
    };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        throw new TRPCError({
          code: "CONFLICT",
          message: "Bookmark with that title already exists",
        });
      }
    }
    throw error;
  }
};

export const findBookmark = async ({
  paramsInput,
}: {
  paramsInput: ParamsInput;
}) => {
  try {
    const note = await prisma.bookmark.findFirst({
      where: { id: paramsInput.id },
    });

    if (!note) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Bookmark with that ID not found",
      });
    }

    return {
      status: "success",
      note,
    };
  } catch (error) {
    throw error;
  }
};

export const findAllBookmarks = async ({
  filterQuery,
}: {
  filterQuery: FilterQueryInput;
}) => {
  try {
    const page = filterQuery.page || 1;
    const limit = filterQuery.limit || 10;
    const skip = (page - 1) * limit;

    const bookmarks = await prisma.bookmark.findMany({ skip, take: limit });

    return {
      status: "success",
      results: bookmarks.length,
      bookmarks,
    };
  } catch (error) {
    throw error;
  }
};

export const deleteBookmark = async ({
  paramsInput,
}: {
  paramsInput: ParamsInput;
}) => {
  try {
    await prisma.bookmark.delete({ where: { id: paramsInput.id } });

    return {
      status: "success",
    };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Bookmark with that ID not found",
        });
      }
    }
    throw error;
  }
};
