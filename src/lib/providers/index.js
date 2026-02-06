import BookingsContextProvider from "@/context/booking.context";
import UserContextProvider from "@/context/user.context";
import { SessionProvider } from "next-auth/react";

import React from "react";

const Providers = ({ children }) => {
  return (
    <SessionProvider>
      <UserContextProvider>
        <BookingsContextProvider>{children}</BookingsContextProvider>
      </UserContextProvider>
    </SessionProvider>
  );
};

export default Providers;
