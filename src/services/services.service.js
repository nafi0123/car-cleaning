"use server";
export const getSingleService = async (id) => {
  const res = await fetch(
    `https://car-washing-system-cleanify-server.vercel.app/api/v1/services/${id}`,
    // { cache: "no-store" }
    {
      next: {
        revalidate: 60,
      },
    }
  );
  return res.json();
};

export const getAllServices = async (searchParams) => {
  const getParams = new URLSearchParams(searchParams).toString();
  console.log(getParams);

  const res = await fetch(
    `https://car-washing-system-cleanify-server.vercel.app/api/v1/services?${getParams}`,
    {
      cache: "force-cache", // default: no-store
    }
  );
  // await new Promise((resolve) =>
  //   setTimeout(() => {
  //     resolve();
  //   }, 3000)
  // );
  const data = await res.json();
  return data;
};