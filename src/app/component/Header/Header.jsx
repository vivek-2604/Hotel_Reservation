import Image from "next/image";
import React from "react";
import Logo from "../../../../public/home/logo.png";
import Cart from "../../../../public/home/cart.svg";
import Insta from "../../../../public/home/insta.svg";
import FB from "../../../../public/home/fb.svg";
import Twitter from "../../../../public/home/twitter.svg";

const Header = () => {
  return (
    <div className="bg-blue text-white">
      <div className="flex mx-12 md:mx-16 lg:mx-36 py-10 justify-between items-center xl:mx-64">
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
      <div className="hidden md:flex md:mx-16 lg:mx-36 pb-5 xl:mx-64 xl:gap-40 ">
        <div className="w-full xl:w-2/3">
          <ul className="flex justify-between">
            <li>Homes</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservation</li>
            <li>Gallary</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="xl:w-1/3 items-end">
          <ul className="hidden ml-20 justify-between xl:flex">
            <li>
              <Image src={Insta} />
            </li>
            <li>
              <Image src={FB} />
            </li>
            <li>
              <Image src={Twitter} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
