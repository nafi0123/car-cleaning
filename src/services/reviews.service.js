"use server";



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



  return res.json();
};

export const getAllReviews = async (searchParams) => {
  const getParams = new URLSearchParams(searchParams).toString();
  console.log(getParams);

  const res = await fetch(
    `${
      process.env.NEXT_AUTH_URL || "http://localhost:3000"
    }/api/reviews?${getParams}`,

  );



  const data = await res.json();
  return data;
};