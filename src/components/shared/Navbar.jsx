"use client";
import Image from "next/image";
import Link from "next/link";
import React, { use } from "react";
import Container from "./Container";
import { UserContext } from "@/context/user.context";

const Navbar = () => {
  const { user } = use(UserContext);
  console.log(user);
  return (
    <div className="bg-purple-500">
      <Container>
        <div className="py-4  text-black font-bold text-5xl flex justify-between items-center">
          <Link href={"/"}>
            <Image
              src="https://car-cleanify.vercel.app/assets/logo-BpOrj-RN.png"
              alt="Logo"
              width={60}
              height={60}
              className="h-[60px] w-[60px]"
            />
          </Link>
          <ul className="font-semibold text-[18px] flex gap-2 items-center">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/reviews">Reviews</Link>
            <Link href="/aboutUs">About Us</Link>
          </ul>

         {user?   <Link href={"/dashboard"}>
            <button>Dashboard</button>
          </Link>:    <Link href={"/login"}>
            <button>Login</button>
          </Link>}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
