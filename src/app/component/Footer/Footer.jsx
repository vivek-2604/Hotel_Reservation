import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-blue">
        <div className="mx-12 pt-10 pb-5 border-t-2 md:mx-16 lg:mx-36 xl:mx-64">
          <div className="flex flex-col gap-14 sm:gap-0 sm:flex-row my-10">
            <div className="flex w-full sm:w-1/2 justify-center px-8">
              <Image
                src="https://res.cloudinary.com/cloudofvivek/image/upload/v1715793463/home/nirvana_final_logo_zrsvqn.svg"
                width={100}
                height={100}
              />
            </div>
            <div className="flex flex-col w-2/3 mx-auto xl:w-full border-white sm:border-l sm:border-r px-8">
              <div className="text-center text-white text-xl font-semibold border-b pb-2">
                CONTACT
              </div>
              <div className="mt-6 text-white text-center">
                Rajknda, bfducsss, asbdW,SANDcn
              </div>
            </div>
            <div className="flex flex-col w-2/3 mx-auto xl:w-full px-8">
              <div className="border-b text-center text-white text-xl font-semibold pb-2">
                WORKING HOURS
              </div>
              <div className="mt-6 text-white text-center">
                <p>
                  <span className="text-yellow">All Days: </span>9:00A.M. -
                  11:00P.M.
                </p>
                <p>
                  <span className="text-yellow">Kitchen Close: </span>10:00P.M.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col w-full sm:w-1/2 md:w-2/3 mx-auto xl:w-full">
            <div className="border-t border-b border-white text-center text-white">
              LINKS
            </div>
            <div className="flex gap-8 justify-between mt-6">
              <Image
                src="https://res.cloudinary.com/cloudofvivek/image/upload/v1715194929/home/Insta_ua2iol.svg"
                width={30}
                height={100}
              />
              <Image
                src="https://res.cloudinary.com/cloudofvivek/image/upload/v1715194925/home/fb_e2cxh3.svg"
                width={30}
                height={100}
              />
              <Image
                src="https://res.cloudinary.com/cloudofvivek/image/upload/v1715194968/home/twitter_aq1km5.svg"
                width={30}
                height={100}
              />
            </div>
          </div>
          <div className="flex flex-col w-full sm:w-1/2 md:w-2/3 mx-auto xl:w-full">
            <div className="border-t border-b border-white text-center text-white">
              CONTACT
            </div>
            <div className="mt-6 text-white text-center tracking-wide">
              Kalavad Rd, Jala Ram Nagar, Rajkot, Gujarat 360001, India
            </div>
          </div> */}
        </div>
        <div className="flex items-center justify-center mt-10 pt-8 border-t-2 border-midnight_grey">
          <p className="text-yellow hidden sm:block">
            Copyrights - Univers Restaurant | Designed By Vivek Mashru
          </p>
          <p className="block sm:hidden text-yellow">
            Copyrights - Univers Restaurant
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
