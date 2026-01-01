"use client";
import ServiceCard from "@/app/(withCommonLayout)/services/_component/ServiceCard";
import { BookingContext } from "@/context/booking.context";
import React, { use } from "react";

const MyBookings = () => {
  const { bookings, addBooking, removeBooking } = use(BookingContext);
  console.log(bookings);

  return (
    <div>
      {bookings?.length == 0 ? (
        <h2 className="font-bold text-6xl text-purple-500">No bookings</h2>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {bookings?.map((service) => {
            return <ServiceCard service={service} key={service?._id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
