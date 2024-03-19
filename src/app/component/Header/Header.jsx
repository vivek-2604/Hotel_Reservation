import Image from "next/image";
import React from "react";
import Link from "next/link";
import Logo from "../../../../public/home/logo.png";
import Cart from "../../../../public/home/cart.svg";
import Insta from "../../../../public/home/insta.svg";
import FB from "../../../../public/home/fb.svg";
import Twitter from "../../../../public/home/twitter.svg";

const Header = () => {
  return (
    <div className="bg-blue text-white">
      <div className="flex px-12 py-10 border-b-2 justify-between items-center xl:px-64 md:px-16 lg:px-36 md:border-b-0">
        <button className="border h-10 px-2 font-medium hidden lg:block">
          call-1234156
        </button>
        <Image className="text-lg" src={Logo} width={100} height={100} />
        <div className="flex gap-7 items-center">
          <button className="border h-10 px-2 font-medium">
            <Image src={Cart} width={30} height={30} className="p-1" />
          </button>
          <button className="text-blue bg-yellow font-semibold h-10 px-2 hidden md:block">
            Reservation
          </button>
        </div>
      </div>
      <div className="hidden md:flex md:px-16 lg:px-36 py-2.5 xl:px-64 xl:gap-40 border-y-2">
        <div className="w-full xl:w-2/3">
          <ul className="flex justify-between">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/menu">Menu</Link>
            </li>
            <li>
              <Link href="/reservation">Reservation</Link>
            </li>
            <li>
              <Link href="/gallary">Gallary</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="xl:w-1/3 items-end">
          <ul className="hidden ml-20 justify-between xl:flex">
            <li>
              <Link href="/">
                <Image src={Insta} />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Image src={FB} />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Image src={Twitter} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
