"use server";

import { revalidateTag } from "next/cache";

export const createReview = async (data) => {
  const res = await fetch(
    `${process.env.NEXT_AUTH_URL || "http://localhost:3000"}/api/reviews`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    throw new Error("Failed to create review");
  }

  //   revalidatePath("/reviews");
  revalidateTag("reviews");

  return res.json();
};

export const getAllReviews = async (searchParams) => {
  const getParams = new URLSearchParams(searchParams).toString();
  console.log(getParams);

  const res = await fetch(
    `${
      process.env.NEXT_AUTH_URL || "http://localhost:3000"
    }/api/reviews?${getParams}`,
    {
      cache: "force-cache", // default: no-store
      next: {
        tags: ["reviews"],
        revalidate: 60, // ISR = Incremental Static Regeneration
      },
    }
  );

  //   await new Promise((resolve) =>
  //     setTimeout(() => {
  //       resolve();
  //     }, 3000)
  //   );

  const data = await res.json();
  return data;
};