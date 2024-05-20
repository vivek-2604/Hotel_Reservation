import Heading from "@/app/component/Heading/Heading";
import Image from "next/image";
import React from "react";

const ContactUsPage = () => {
  return (
    <div>
      <Heading children="Contact Us " />
      <div className="mt-10 px-12 md:px-16 xl:px-64 lg:px-36">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="bg-[#FFF5F5] w-full md:w-1/2 p-10">
            <p className="text-xl font-bold">Contact Information</p>
            <p className="text-base font-normal mt-5">
              Connect with Nirvana Nest today to elevate your dining experience.
              Our attentive staff are ready to assist with reservations, special
              requests, and any inquiries, ensuring your visit exceeds
              expectations.
            </p>
            <div className="flex flex-col gap-2.5 mt-10">
              <div className="flex gap-5">
                <Image
                  src="https://res.cloudinary.com/cloudofvivek/image/upload/v1716224944/contact/Location_xzqgbj.svg"
                  alt="location logo"
                  width={20}
                  height={20}
                  className="flex bg-blue w-8 h-8 p-1 justify-center text-center rounded-full"
                />
                <p className="text-base text-blue">
                  Riverside, 25, Ahmedabad, Gujarat
                </p>
              </div>
              <div className="flex gap-5">
                <Image
                  src="https://res.cloudinary.com/cloudofvivek/image/upload/v1716224944/contact/Vector_oww9y1.svg"
                  alt="location logo"
                  width={15}
                  height={15}
                  className="flex bg-blue w-8 h-8 p-1 justify-center text-center rounded-full"
                />
                <p className="text-base text-blue">info@nirvananest.com</p>
              </div>
              <div className="flex gap-5">
                <Image
                  src="https://res.cloudinary.com/cloudofvivek/image/upload/v1716224944/contact/Call_ureasn.svg"
                  alt="location logo"
                  width={20}
                  height={20}
                  className="flex bg-blue w-8 h-8 p-1 justify-center text-center rounded-full"
                />
                <p className="text-base text-blue">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex gap-10 mt-10">
              <Image
                src="https://res.cloudinary.com/cloudofvivek/image/upload/v1715194929/home/Insta_ua2iol.svg"
                alt="logo"
                width={20}
                height={20}
                className="flex bg-blue w-8 h-8 p-1 justify-center text-center rounded-full"
              />
              <Image
                src="https://res.cloudinary.com/cloudofvivek/image/upload/v1715194925/home/fb_e2cxh3.svg"
                alt="logo"
                width={20}
                height={20}
                className="flex bg-blue w-8 h-8 p-1 justify-center text-center rounded-full"
              />
              <Image
                src="https://res.cloudinary.com/cloudofvivek/image/upload/v1715194968/home/twitter_aq1km5.svg"
                alt="logo"
                width={20}
                height={20}
                className="flex bg-blue w-8 h-8 p-1 justify-center text-center rounded-full"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex flex-col gap-5">
              <p className="text-xl font-semibold">Have A Quation ?</p>
              <div className="flex gap-5">
                <input
                  className="w-full border-metal_grey border-2 px-2 py-1"
                  placeholder="Name"
                />
                <input
                  className="w-full border-2 border-metal_grey px-2 py-1"
                  placeholder="Email"
                />
              </div>
              <div className="flex gap-5">
                <input
                  className="w-full border-2 border-metal_grey px-2 py-1"
                  placeholder="Subject"
                />
                <input
                  className="w-full border-2 border-metal_grey px-2 py-1"
                  placeholder="Phone"
                />
              </div>
              <textarea
                className="w-full border-2 border-metal_grey px-2 py-1 max-h-32 min-h-28"
                placeholder="Message"
              />
              <button className="border-yellow border-2 px-2 py-2 w-1/4">
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="my-28">
          <div>
            <p className="text-3xl font-bold text-center mt-5">
              Come And Visit Our Branches
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 my-20">
            <div className="flex w-full border-2">
              <div className="w-full md:w-3/5 p-3">
                <p className="text-xl font-semibold">Ahmedabad - Gujarat</p>
                <p className="text-base font-normal mt-5">
                  Riverside, 25, Ahmedabad, Gujarat
                </p>
                <p className="flex gap-3 mt-5">
                  <Image
                    src="https://res.cloudinary.com/cloudofvivek/image/upload/v1716229007/contact/Vector_2_fvzhmg.svg"
                    alt="email"
                    width={20}
                    height={20}
                  />
                  info@nirvananest.com
                </p>
                <p className="flex gap-3 mt-3">
                  <Image
                    src="https://res.cloudinary.com/cloudofvivek/image/upload/v1716229007/contact/Vector_1_gzbqeb.svg"
                    alt="email"
                    width={20}
                    height={20}
                  />
                  +91 98765 43211
                </p>
              </div>
              <Image
                src="https://res.cloudinary.com/cloudofvivek/image/upload/v1716227422/contact/Photo_kslhtb.svg"
                width={100}
                height={100}
                alt="image"
                className="hidden md:block w-2/5"
              />
            </div>
            <div className="flex w-full border-2">
              <div className="w-full md:w-3/5 p-3">
                <p className="text-lg font-semibold">Rajkot -Gujarat</p>
                <p className="text-base font-normal mt-5">
                  Atal Sarovar, New 150 ft Ring Road, Rajkot, Gujarat
                </p>
                <p className="flex gap-3 mt-5">
                  <Image
                    src="https://res.cloudinary.com/cloudofvivek/image/upload/v1716229007/contact/Vector_2_fvzhmg.svg"
                    alt="email"
                    width={20}
                    height={20}
                  />
                  info@nirvananest.com
                </p>
                <p className="flex gap-3 mt-3">
                  <Image
                    src="https://res.cloudinary.com/cloudofvivek/image/upload/v1716229007/contact/Vector_1_gzbqeb.svg"
                    alt="email"
                    width={20}
                    height={20}
                  />
                  +91 98765 43210
                </p>
              </div>
              <Image
                src="https://res.cloudinary.com/cloudofvivek/image/upload/v1716227422/contact/Photo_kslhtb.svg"
                width={100}
                height={100}
                alt="image"
                className="hidden md:block w-2/5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
