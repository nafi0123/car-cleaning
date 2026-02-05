import React from "react";
import ServiceCard from "./_component/ServiceCard";
import Container from "@/components/shared/Container";
import ServicesSearching from "./_component/ServicesSearching";
import { getAllServices } from "@/services/services.service";

// const getAllServices = async (searchParams) => {
//   const getParams = new URLSearchParams(searchParams).toString();
//   console.log(getParams);

//   const res = await fetch(
//     `https://car-washing-system-cleanify-server.vercel.app/api/v1/services?${getParams}`
//   );
//   // await new Promise((resolve) =>
//   //   setTimeout(() => {
//   //     resolve();
//   //   }, 3000)
//   // );
//   const data = await res.json();
//   return data;
// };

export const metadata = {
  title: "Services",
  description: "Car washing system",
};

const servicesPage = async ({ searchParams }) => {
  const getParams = await searchParams;
  const services = await getAllServices({ ...getParams });

  return (
    <div className="my-4">
      <Container>
        <h2 className="font-bold text-3xl text-purple-500 mb-4">
          Services Page
        </h2>

        {/* Searching */}
        <ServicesSearching />

        {services?.meta?.total === 0 ? (
          <div className="font-bold text-4xl text-purple-500 text-center my-4">
            No data found
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {services?.data?.map((service) => {
              return <ServiceCard service={service} key={service?._id} />;
            })}
          </div>
        )}
      </Container>
    </div>
  );
};

export default servicesPage;
