"use client";
import Image from "next/image";
import "./globals.css";
import Story from "../../public/home/story.svg";
import Menu from "../../public/home/menu.svg";
import Drink from "../../public/home/drink.svg";
import Testimonial from "../../public/home/testimonial.png";
import OfferPrice1 from "../../public/home/offer_price_1.svg";
import OfferPrice2 from "../../public/home/offer_price_2.svg";
import Burger from "../../public/home/offer_1.svg";
import Menu1 from "../../public/home/menu1.svg";
import Menu2 from "../../public/home/menu2.svg";
import Menu3 from "../../public/home/menu3.svg";
import Menu4 from "../../public/home/menu4.svg";
import Icon1 from "../../public/home/icon1.png";
import Icon2 from "../../public/home/icon2.png";
import Icon3 from "../../public/home/icon3.png";
import Blog1 from "../../public/home/blog1.svg";
import Blog2 from "../../public/home/Blog2.svg";
import HomeImg from "../../public/home/banner.svg";
import Reservation from "./component/ReservationForm";
import { useRouter } from "next/navigation";
import { blogs } from "@/lib/data";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  const getMenu = () => {
    router.push("/menu");
  };

  return (
    <div>
      <div className="flex gap-6 px-12 text-white bg-blue md:px-16 lg:px-36 xl:px-64">
        <div className="flex flex-col gap-6 py-20 w-full xl:w-1/2 pr-16 text-wrap">
          <p className="text-3xl sm:text-5xl font-semibold">
            Welcome to Restauranatate
          </p>
          <p className="text-lg font-normal">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy .
          </p>
          <button
            className="w-full sm:w-1/3 border-2 border-yellow p-2"
            onClick={getMenu}
          >
            View Menu
          </button>
        </div>
        <div className="hidden before:rounded-t-full before:overflow-hidden before:w-[110%] before:absolute relative before:-top-[5%] before:-left-[5%] before:h-[96.5%] -mb-16 z-0 xl:block top-20">
          <Image
            alt=""
            className="rounded-t-full overflow-hidden z-10 relative"
            src={HomeImg}
          />
        </div>
      </div>

      <div className="mx-12 md:mx-16 lg:mx-36 xl:mx-64 mt-28">
        {/* locate */}
        <div className="grid grid-cols-1 text-center sm:grid-cols-2 xl:grid-cols-3">
          <div className="py-2 gap-4">
            <div>
              <p className="text-lg font-semibold">Locate Us</p>
              <p className="text-sm font-medium">
                Riverside, 25, Ahmedabad, Gujarat
              </p>
            </div>
          </div>
          <div className="py-2 gap-4">
            <div>
              <p className="text-lg font-semibold">Open Hours</p>
              <p className="text-sm font-medium">
                Mon - Sun: 9:00A.M. - 11:00 P.M.
              </p>
            </div>
          </div>
          <div className="py-2 gap-4">
            <div>
              <p className="text-lg font-semibold">Reservation</p>
              <p className="text-sm font-medium">
                reservationatunivers@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row my-14">
          <div className="xl:block w-full xl:w-1/3 xl:border-r-2 border-metal_grey xl:pr-20">
            <Image
              alt=""
              className="xl:h-60 w-full xl:w-80"
              src={Story}
              width={100}
              height={100}
            />
          </div>
          <div className="xl:w-2/3 xl:pl-20 mt-6 xl:mt-0">
            <div>
              <div>
                <p className="font-bold text-xl">The Story</p>
                <p className="font-normal text-base mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Venenatis lectus magna fringilla urna. Gravida quis blandit
                  turpis cursus in hac.
                </p>
              </div>
              <div className="flex gap-9 mt-4">
                <div>
                  <p className="font-bold text-xl">1996</p>
                  <p className="font-normal text-base mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt
                  </p>
                </div>
                <div>
                  <p className="font-bold text-xl">2021</p>
                  <p className="font-normal text-base mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-12 md:mx-16 lg:mx-36 xl:mx-64">
        <div className="border-y-2 border-yellow w-14 text-center">MENU</div>
        <div className="flex flex-col gap-10 md:gap-20 md:flex-row">
          <div className="mt-2 md:w-1/3">
            <p className="font-bold text-xl">Try Our Special Offers</p>
            <p className="text-base font-normal">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Venenatis lectus
            </p>
            <Image
              alt=""
              src={Menu}
              width={300}
              height={500}
              className="mt-9 hidden md:block"
            />
            <button
              className="border-2 border-yellow text-yellow text-sm py-2 px-5 mt-9"
              onClick={getMenu}
            >
              See all dishes
            </button>
          </div>
          <div className="md:mt-2 md:w-2/3">
            <p className="font-bold text-xl">Starter</p>
            <div className="mt-2">
              <div className="flex gap-5 mt-5">
                <Image alt="" src={Drink} width={50} height={5} />
                <div className="flex justify-between w-full">
                  <div>
                    <p className="text-lg font-semibold">
                      Raw Scallops from Erquy
                    </p>
                    <p className="text-base font-medium">
                      Candied Jerusalem artichokes truffle
                    </p>
                  </div>
                  <p className="text-lg font-semibold">$40</p>
                </div>
              </div>
              <div className="flex gap-5 mt-5">
                <Image alt="" src={Drink} width={50} height={5} />
                <div className="flex justify-between w-full">
                  <div>
                    <p className="text-lg font-semibold">
                      Raw Scallops from Erquy
                    </p>
                    <p className="text-base font-medium">
                      Candied Jerusalem artichokes truffle
                    </p>
                  </div>
                  <p className="text-lg font-semibold">$40</p>
                </div>
              </div>
              <div className="flex gap-5 mt-5">
                <Image alt="" src={Drink} width={50} height={5} />
                <div className="flex justify-between w-full">
                  <div>
                    <p className="text-lg font-semibold">
                      Raw Scallops from Erquy
                    </p>
                    <p className="text-base font-medium">
                      Candied Jerusalem artichokes truffle
                    </p>
                  </div>
                  <p className="text-lg font-semibold">$40</p>
                </div>
              </div>
              <div className="flex gap-5 mt-5">
                <Image alt="" src={Drink} width={50} height={5} />
                <div className="flex justify-between w-full">
                  <div>
                    <p className="text-lg font-semibold">
                      Raw Scallops from Erquy
                    </p>
                    <p className="text-base font-medium">
                      Candied Jerusalem artichokes truffle
                    </p>
                  </div>
                  <p className="text-lg font-semibold">$40</p>
                </div>
              </div>
            </div>
            <p className="font-bold text-xl mt-10">Main Dish</p>
            <div className="mt-2">
              <div className="flex gap-5 mt-5">
                <Image alt="" src={Drink} width={50} height={5} />
                <div className="flex justify-between w-full">
                  <div>
                    <p className="text-lg font-semibold">
                      Raw Scallops from Erquy
                    </p>
                    <p className="text-base font-medium">
                      Candied Jerusalem artichokes truffle
                    </p>
                  </div>
                  <p className="text-lg font-semibold">$40</p>
                </div>
              </div>
              <div className="flex gap-5 mt-5">
                <Image alt="" src={Drink} width={50} height={5} />
                <div className="flex justify-between w-full">
                  <div>
                    <p className="text-lg font-semibold">
                      Raw Scallops from Erquy
                    </p>
                    <p className="text-base font-medium">
                      Candied Jerusalem artichokes truffle
                    </p>
                  </div>
                  <p className="text-lg font-semibold">$40</p>
                </div>
              </div>
              <div className="flex gap-5 mt-5">
                <Image alt="" src={Drink} width={50} height={5} />
                <div className="flex justify-between w-full">
                  <div>
                    <p className="text-lg font-semibold">
                      Raw Scallops from Erquy
                    </p>
                    <p className="text-base font-medium">
                      Candied Jerusalem artichokes truffle
                    </p>
                  </div>
                  <p className="text-lg font-semibold">$40</p>
                </div>
              </div>
              <div className="flex gap-5 mt-5">
                <Image alt="" src={Drink} width={50} height={5} />
                <div className="flex justify-between w-full">
                  <div>
                    <p className="text-lg font-semibold">
                      Raw Scallops from Erquy
                    </p>
                    <p className="text-base font-medium">
                      Candied Jerusalem artichokes truffle
                    </p>
                  </div>
                  <p className="text-lg font-semibold">$40</p>
                </div>
              </div>
            </div>
            <p className="font-bold text-xl mt-10">Desert</p>
            <div className="mt-2">
              <div className="flex gap-5 mt-5">
                <Image alt="" src={Drink} width={50} height={5} />
                <div className="flex justify-between w-full">
                  <div>
                    <p className="text-lg font-semibold">
                      Raw Scallops from Erquy
                    </p>
                    <p className="text-base font-medium">
                      Candied Jerusalem artichokes truffle
                    </p>
                  </div>
                  <p className="text-lg font-semibold">$40</p>
                </div>
              </div>
              <div className="flex gap-5 mt-5">
                <Image alt="" src={Drink} width={50} height={5} />
                <div className="flex justify-between w-full">
                  <div>
                    <p className="text-lg font-semibold">
                      Raw Scallops from Erquy
                    </p>
                    <p className="text-base font-medium">
                      Candied Jerusalem artichokes truffle
                    </p>
                  </div>
                  <p className="text-lg font-semibold">$40</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 bg-blue">
        <div className="py-24 mx-12 md:mx-16 lg:mx-36 xl:mx-64">
          <div className="border-y-2 border-yellow text-white w-28 text-center">
            TESTIMONIAL
          </div>
          <div className="text-white mt-4">
            <p className="font-bold text-xl">What our clients say</p>
            <p className="font-normal text-base mt-2">
              What our clients say What our clients say What our clients say
            </p>
          </div>
        </div>
        <div>
          <Image
            alt=""
            src={Testimonial}
            height={100}
            className="w-full h-[450px]"
          />
        </div>
      </div>

      <div className="my-32 mx-12 md:mx-16 lg:mx-36 xl:mx-64">
        <div>
          <div className="flex flex-col items-center gap-4">
            <p className="border-y-2 border-yellow text-sm font-semibold">
              OFFER
            </p>
            <p className="text-center font-bold text-xl text-blue">
              Our Special Offer Dishes
            </p>
            <p className="text-center font-normal text-base xl:px-56">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt,Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt
            </p>
          </div>
          <div className="flex flex-col xl:flex-row xl:justify-between gap-5 mt-10">
            <div
              className="flex border-2 border-yellow bg-cover bg-center p-4 xl:w-1/2"
              style={{ backgroundImage: "url('/home/offer_bg-1.svg')" }}
            >
              <div className="pl-4 w-1/2 pt-4">
                <Image alt="" src={OfferPrice1} width={100} height={100} />
                <p className="border-y-2 border-blue text-sm font-normal text-blue w-32 mt-4">
                  50% OFFER GOING
                </p>
                <p className="text-lg font-semibold mt-2 text-blue">
                  Veg Burger
                </p>
                <p className="text-base font-normal mt-2 text-blue">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
              <div className="mt-14">
                <Image
                  alt=""
                  className="w-64"
                  src={Burger}
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div
              className="flex border-2 border-yellow p-4 bg-cover bg-center xl:w-1/2"
              style={{ backgroundImage: "url('/home/offer_bg-2.svg')" }}
            >
              <div className="pl-4 w-1/2 pt-4">
                <Image alt="" src={OfferPrice2} width={100} height={100} />
                <p className="border-y-2 border-blue text-sm font-normal text-blue w-32 mt-4">
                  50% OFFER GOING
                </p>
                <p className="text-lg font-semibold mt-2 text-blue">
                  Veg Pizza
                </p>
                <p className="text-base font-normal mt-2 text-blue">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <div className="flex flex-col items-center gap-4">
            <p className="border-y-2 border-yellow text-sm font-semibold w-11 text-center">
              MENU
            </p>
            <p className="text-center font-bold text-xl text-blue">
              Popular Dishes
            </p>
            <p className="text-center font-normal text-base lg:px-56">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt,Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-12 gap-5">
            <div>
              <div>
                <Image alt="" src={Menu1} className="w-full" />
              </div>
              <div>
                <div className="text-lg font-bold flex justify-between">
                  <p>Biriyani</p>
                  <span>$15</span>
                </div>
                <p className="text-sm font-medium mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
            </div>
            <div>
              <div>
                <Image alt="" src={Menu2} className="w-full" />
              </div>
              <div>
                <div className="text-lg font-bold flex justify-between">
                  <p>HotDog</p>
                  <span>$15</span>
                </div>
                <p className="text-sm font-medium mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
            </div>
            <div>
              <div>
                <Image alt="" src={Menu3} className="w-full" />
              </div>
              <div>
                <div className="text-lg font-bold flex justify-between">
                  <p>Mocktail</p>
                  <span>$15</span>
                </div>
                <p className="text-sm font-medium mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
            </div>
            <div>
              <div>
                <Image alt="" src={Menu4} className="w-full" />
              </div>
              <div>
                <div className="text-lg font-bold flex justify-between">
                  <p>Burger</p>
                  <span>$15</span>
                </div>
                <p className="text-sm font-medium mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <button
              className="border-yellow border-2 px-4 py-2"
              onClick={getMenu}
            >
              See all dishes
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div className="flex flex-col px-12 py-44 bg-blue gap-14 lg:gap-10 lg:flex-row md:px-16 lg:px-36 xl:px-64 ">
          <div className="lg:w-1/3">
            <p className="border-y-2 border-yellow w-36 text-yellow text-xl font-semibold">
              What We offer
            </p>
            <p className="text-white text-xl font-medium mt-2">
              Our Great Services
            </p>
            <p className="mt-2 text-base text-white font-normal">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt,Lorem ipsum dolor sit amet
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 xl:w-2/3">
            <div className="flex flex-col items-center justify-center border-8 border-metal_grey gap-4 w-full h-40">
              <Image
                alt=""
                src={Icon1}
                className="w-7 h-7"
                width={30}
                height={30}
              />
              <p className="text-white text-sm font-normal px-6">Opened 24/7</p>
            </div>
            <div className="flex flex-col items-center justify-center border-8 border-metal_grey gap-4 w-full h-40">
              <Image
                alt=""
                src={Icon2}
                className="w-7 h-7"
                width={30}
                height={30}
              />
              <p className="text-white text-sm font-normal px-6">
                Special Menu
              </p>
            </div>
            <div className="flex flex-col items-center justify-center border-8 border-metal_grey gap-4 w-full h-40">
              <Image
                alt=""
                src={Icon3}
                className="w-7 h-7"
                width={30}
                height={30}
              />
              <p className="text-white text-sm font-normal px-6">
                Home Delivery
              </p>
            </div>
          </div>
        </div>
        <div className="mx-12 md:mx-16 lg:mx-36 xl:mx-64 my-32">
          <div className="flex flex-col items-center gap-4">
            <p className="border-y-2 border-yellow text-sm font-semibold w-10">
              BLOG
            </p>
            <p className="text-center font-bold text-xl text-blue">
              Be First Who Read News
            </p>
            <p className="text-center font-normal text-base lg:px-56">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt,Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-10 mt-12">
            {blogs.slice(0, 2).map((item, index) => {
              return (
                <Link href={`/blog/${item.slug}`}>
                  <div key={index} className="w-full border">
                    <Image
                      alt=""
                      src={Blog1}
                      width={100}
                      height={100}
                      className="w-full"
                    />
                    <div className="mt-4 py-6 px-4">
                      <div className="flex flex-col sm:flex-row gap-6 items-center">
                        <p className="font-semibold text-base text-blue border-y-2 border-yellow text-center uppercase">
                          {item.category}
                        </p>
                        <p className="font-semibold text-base text-blue border-y-2 border-yellow text-center uppercase">
                          {item.releaseDate}
                        </p>
                      </div>
                      <p className="mt-4 font-semibold text-xl line-clamp-2">
                        {item.title}
                      </p>
                      <p className="mt-4 font-medium text-base line-clamp-3">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div
        className="w-full h-4/5 py-28 bg-cover bg-center"
        style={{ backgroundImage: "url('/home/Background.svg')" }}
      >
        <Reservation />
      </div>
    </div>
  );
}
