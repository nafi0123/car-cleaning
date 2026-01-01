import BookingsContextProvider from "@/context/booking.context";
import UserContextProvider from "@/context/user.context";
import React from "react";

const Providers = ({ children }) => {
  return (
    <UserContextProvider>
      <BookingsContextProvider>{children}</BookingsContextProvider>
    </UserContextProvider>
  );
};

export default Providers;
