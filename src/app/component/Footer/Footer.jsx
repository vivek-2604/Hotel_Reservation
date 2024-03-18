import Image from "next/image";
import React from "react";
import Logo from "../../../../public/home/logo.png";
import Insta from "../../../../public/home/insta.svg";
import FB from "../../../../public/home/fb.svg";
import Twitter from "../../../../public/home/twitter.svg";

const Footer = () => {
  return (
    <>
      <div className="bg-blue">
        <div className="mx-12 pt-10 pb-5 border-t-2 md:mx-16 lg:mx-36 xl:mx-64">
          <div className="flex justify-center">
            <Image src={Logo} width={100} height={100} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-36 mt-10">
            <div className="flex flex-col w-2/3 mx-auto xl:w-full">
              <div className="border-t border-b border-white text-center text-white">
                CONTACT
              </div>
              <div className="mt-6 text-white text-center">
                Rajknda, bfducsss, asbdW,SANDcn
              </div>
            </div>
            {/* <div className="hidden flex-col items-center xl:flex">
              <p className="text-white text-center">
                Join our mailing list for updates,
                <br />
                Get news & offers events.
              </p>
              <div className="flex mt-6">
                <input
                  className="h-10 border border-white bg-blue p-2"
                  placeholder="Email"
                />
                <button className="h-10 bg-white text-blue px-3">
                  Subscribe
                </button>
              </div>
            </div> */}
            <div className="flex flex-col w-2/3 mx-auto xl:w-full">
              <div className="border-t border-b border-white text-center text-white">
                WORKING HOURS
              </div>
              <div className="mt-6 text-white text-center">
                <p>
                  <span className="text-yellow">All Days: </span>9:00A.M. -
                  11:00P.M.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 pt-8 md:flex-row md:justify-between">
            <div className="flex gap-8">
              <Image src={Insta} />
              <Image src={FB} />
              <Image src={Twitter} />
            </div>
            <p className="text-yellow hidden sm:block">
              Copyrights - Univers Restaurant | Designed By Vivek Mashru
            </p>
            <p className="block sm:hidden text-yellow">
              Copyrights - Univers Restaurant
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
