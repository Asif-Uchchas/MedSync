"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/src/components/ui/button";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./sidebar";

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-gray-900 text-white shadow-lg ${
        isSticky ? "fixed top-0 left-0 w-full z-10" : ""
      }`}
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <Link href="/">
              <div className="flex items-center text-white text-2xl font-bold md:text-3xl hover:text-gray-300">
                <div className="w-10 h-10 mr-2">
                  <Image
                    src="/MedSyncLogo.svg"
                    alt="logo"
                    width={50}
                    height={50}
                  />
                </div>
                MedSync
              </div>
            </Link>
            <Sheet>
              <SheetTrigger>
                {/* <Menu className=' text-white'/> */}

                <button className="md:hidden">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
              </SheetTrigger>
              <SheetContent className="p-0 z-[100]" side={"left"}>
                <Sidebar className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#A6D71C] to-[#2E6A47]"/>
              </SheetContent>
            </Sheet>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link href="/">
              <div className="nav-link text-white hover:text-gray-300 cursor-pointer">
                Home
              </div>
            </Link>
            <Link href="/about">
              <div className="nav-link text-white hover:text-gray-300 cursor-pointer">
                About
              </div>
            </Link>
            <Link href="/services">
              <div className="nav-link text-white hover:text-gray-300 cursor-pointer">
                Services
              </div>
            </Link>
            <Link href="/contact">
              <div className="nav-link text-white hover:text-gray-300 cursor-pointer">
                Contact
              </div>
            </Link>
            <Link href="/auth/login">
              <Button variant="secondary">
                <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login / Sign up
              </Button>
            </Link>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
