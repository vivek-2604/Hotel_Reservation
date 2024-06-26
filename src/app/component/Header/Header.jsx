"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { NavRoutes } from "../nav-route";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const getReservation = () => {
    router.push("/reservation");
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-blue text-white">
      <div className="flex px-12 py-5 border-b-2 justify-between items-center md:py-10 xl:px-64 md:px-16 lg:px-36 md:border-b-0">
        <button className="border h-10 px-2 font-medium hidden lg:block">
          call- +91 1234156
        </button>
        <Image
          alt="logo"
          className="text-lg scale-150"
          src="https://res.cloudinary.com/cloudofvivek/image/upload/v1715793463/home/nirvana_final_logo_zrsvqn.svg"
          width={100}
          height={100}
        />
        <div className="flex gap-7 items-center">
          <button className="border h-10 px-2 font-medium">
            <Image
              alt=""
              src="https://res.cloudinary.com/cloudofvivek/image/upload/v1715194924/home/cart_zi38gj.svg"
              width={30}
              height={30}
              className="p-1"
            />
          </button>
          <button
            className="text-blue bg-yellow font-semibold h-10 px-2 hidden md:block"
            onClick={getReservation}
          >
            Reservation
          </button>
          <button className="block md:hidden" onClick={toggleMenu}>
            <Image
              alt=""
              src="https://res.cloudinary.com/cloudofvivek/image/upload/v1715194950/home/menuIcon_co0ajb.svg"
              width={50}
              height={100}
            />
          </button>
        </div>
      </div>
      <div className="hidden md:flex md:px-16 lg:px-36 md:py-2.5 xl:px-64 xl:gap-40 md:border-y-2">
        <div className="w-full xl:w-2/3">
          <ul className="hidden md:flex flex-row justify-between">
            {NavRoutes.map((route, i) => {
              const { title, href } = route;
              return (
                <li key={i}>
                  <Link href={href}>{title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="xl:w-1/3 items-end">
          <ul className="hidden ml-20 justify-between xl:flex">
            <li>
              <Link href="/">
                <Image
                  alt=""
                  src="https://res.cloudinary.com/cloudofvivek/image/upload/v1715194929/home/Insta_ua2iol.svg"
                  width={30}
                  height={100}
                />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Image
                  alt=""
                  src="https://res.cloudinary.com/cloudofvivek/image/upload/v1715194925/home/fb_e2cxh3.svg"
                  width={30}
                  height={100}
                />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Image
                  alt=""
                  src="https://res.cloudinary.com/cloudofvivek/image/upload/v1715194968/home/twitter_aq1km5.svg"
                  width={30}
                  height={100}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {menuOpen && (
        <div className="flex bg-white text-blue px-10">
          <div className="w-full">
            <ul className="flex flex-col justify-between text-lg font-medium gap-1">
              {NavRoutes.map((route, i) => {
                const { title, href } = route;
                return (
                  <Link href={href}>
                    <div
                      onClick={() => {
                        setMenuOpen(false);
                      }}
                      className="hover:bg-metal_grey hover:bg-opacity-20 rounded-md"
                    >
                      <li key={i} className="boreder-b-2 border-yellow">
                        {title}
                      </li>
                    </div>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
