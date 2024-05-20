"use client";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { blogs } from "@/lib/data";
import { menuData } from "@/lib/menuFile";
import MenuList from "./component/MenuList/MenuList";
import Reservation from "./component/ReservationForm";
import Testimonial from "./component/Testimonial";

const testimonials = [
  {
    comment:
      "An unforgettable dining experience! Every dish was a masterpiece, and the ambiance was perfect. Highly recommend Nirvana Nest for anyone seeking a culinary delight.",
    author: "Priya S.",
    post: "Food Blogger",
  },
  {
    comment:
      "The vegan options are simply divine! It's rare to find such creativity and flavor in vegan cuisine. Nirvana Nest has truly set a new standard.",
    author: "Arjun M.",
    post: "Health Enthusiast",
  },
  {
    comment:
      "Exceptional service and exquisite flavors. The chef’s specials were out of this world. I can't wait to come back!",
    author: "Rita K.",
    post: "Frequent Diner",
  },
];

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
            Ipsum has been the industry's standard dummy.
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
            src="https://res.cloudinary.com/cloudofvivek/image/upload/v1715194951/home/banner_ebmvoe.svg"
            width={1000}
            height={100}
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
                nirvananest.restaurant@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row my-14">
          <div className="xl:block w-full xl:w-1/3 xl:border-r-2 border-metal_grey xl:pr-20">
            <Image
              alt=""
              className="xl:h-60 w-full xl:w-80"
              src="https://res.cloudinary.com/cloudofvivek/image/upload/v1715194981/home/story_nebqv9.svg"
              width={100}
              height={100}
            />
          </div>
          <div className="xl:w-2/3 xl:pl-20 mt-6 xl:mt-0">
            <div>
              <div>
                <p className="font-bold text-xl">The Story</p>
                <p className="font-normal text-base mt-2">
                  "Nirvana Nest": Where serenity meets flavor, offering a
                  culinary escape in the heart of the city. Indulge in blissful
                  dining experiences, where every bite takes you closer to
                  gastronomic nirvana.
                </p>
              </div>
              <div className="flex gap-9 mt-4">
                <div>
                  <p className="font-bold text-xl">2020</p>
                  <p className="font-normal text-base mt-2">
                    Navigating uncertainties, together we thrive, forging
                    resilience in every stride.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-xl">2023</p>
                  <p className="font-normal text-base mt-2">
                    Embracing growth, we soar beyond skies, crafting dreams into
                    realities with each sunrise.
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
            <p className="text-base font-normal mt-3">
              Indulge in our Chef's Special: succulent grilled lobster with
              lemon butter sauce, paired perfectly with saffron risotto. Don't
              miss our weekday lunch deal: three courses for the price of two, a
              culinary experience that exceeds expectations.
            </p>
            <Image
              alt=""
              src="https://res.cloudinary.com/cloudofvivek/image/upload/v1715195596/home/pexels-valeriya-842571_kg5bec.jpg"
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
              {menuData
                .filter((item) => {
                  return item.category === "Starter";
                })
                .slice(0, 5)
                .map((item, index) => {
                  return (
                    <MenuList
                      key={index}
                      slug={item.slug}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                    />
                  );
                })}
            </div>
            <p className="font-bold text-xl mt-10">Main Dish</p>
            <div className="mt-2">
              {menuData
                .filter((item) => {
                  return item.category === "Main Course";
                })
                .slice(0, 5)
                .map((item, index) => {
                  return (
                    <MenuList
                      key={index}
                      slug={item.slug}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                    />
                  );
                })}
            </div>
            <p className="font-bold text-xl mt-10">Desert</p>
            <div className="mt-2">
              {menuData
                .filter((item) => {
                  return item.category === "Dessert";
                })
                .slice(0, 5)
                .map((item, index) => {
                  return (
                    <MenuList
                      key={index}
                      slug={item.slug}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                    />
                  );
                })}
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
              Guests Speak, Experience Delights: A Taste of Nirvana Nest
            </p>
          </div>
          <div className="mt-10">
            <Testimonial testimonials={testimonials} />
          </div>
        </div>
        <div>
          <Image
            alt=""
            src="https://res.cloudinary.com/cloudofvivek/image/upload/v1715194964/home/testimonial_qpjs3u.png"
            width={10000}
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
              Savor more, pay less: Dive into our chef's specials with exclusive
              discounts. Your taste of luxury awaits at Nirvana Nest.
            </p>
          </div>
          <div className="flex flex-col xl:flex-row xl:justify-between gap-5 mt-10">
            <div
              className="flex border-2 border-yellow bg-cover bg-center p-4 xl:w-1/2"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/cloudofvivek/image/upload/v1715194953/home/offer_bg-1_gtsw5x.svg')",
              }}
            >
              <div className="pl-4 w-1/2 pt-4">
                <Image
                  alt=""
                  src="https://res.cloudinary.com/cloudofvivek/image/upload/v1715194956/home/offer_price_1_r3ycaw.svg"
                  width={100}
                  height={100}
                />
                <p className="border-y-2 border-blue text-sm font-normal text-blue w-32 mt-4">
                  50% OFFER GOING
                </p>
                <p className="text-lg font-semibold mt-2 text-blue">
                  Veg Burger
                </p>
                <p className="text-base font-normal mt-2 text-blue">
                  Sink your teeth into our Veg Burger Extravaganza: a symphony
                  of fresh veggies and savory sauces, guaranteed to satisfy
                  cravings.
                </p>
              </div>
              <div className="mt-14">
                <Image
                  alt=""
                  className="w-64"
                  src="https://res.cloudinary.com/cloudofvivek/image/upload/v1715194973/home/offer_1_wgrskl.svg"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div
              className="flex border-2 border-yellow p-4 bg-cover bg-center xl:w-1/2"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/cloudofvivek/image/upload/v1715194978/home/offer_bg-2_hnbkv2.svg')",
              }}
            >
              <div className="pl-4 w-1/2 pt-4">
                <Image
                  alt=""
                  src="https://res.cloudinary.com/cloudofvivek/image/upload/v1715194958/home/offer_price_2_ot3wnh.svg"
                  width={100}
                  height={100}
                />
                <p className="border-y-2 border-blue text-sm font-normal text-blue w-32 mt-4">
                  50% OFFER GOING
                </p>
                <p className="text-lg font-semibold mt-2 text-blue">
                  Veg Pizza
                </p>
                <p className="text-base font-normal mt-2 text-blue">
                  Delight in every slice with our Veg Pizza Paradise: a medley
                  of garden-fresh toppings and gooey cheese, crafted to
                  perfection.
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
            <p className="text-center font-normal text-base xl:px-56">
              Discover culinary nirvana with our popular dishes, where every
              bite is a journey to delight. From our aromatic Butter Chicken to
              our mouthwatering Paneer Tikka, experience the essence of Indian
              cuisine at its finest
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 mt-12 gap-5">
            {menuData
              .filter((item) => {
                return item.popular === true;
              })
              .slice(0, 3)
              .map((item, index) => {
                return (
                  <div key={index}>
                    <div>
                      <Image
                        alt=""
                        src="https://res.cloudinary.com/cloudofvivek/image/upload/v1715194938/home/menu1_sfhecf.svg"
                        className="w-full"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div>
                      <div className="text-lg font-bold flex justify-between">
                        <p>{item.name}</p>
                        <span>${item.price}</span>
                      </div>
                      <p className="text-sm font-medium mt-4">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
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
              Experience unparalleled hospitality at Nirvana Nest, where every
              guest is treated like royalty. From attentive staff to
              personalized attention.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 xl:w-2/3">
            <div className="flex flex-col items-center justify-center border-8 border-metal_grey gap-4 w-full h-40">
              <Image
                alt=""
                src="https://res.cloudinary.com/cloudofvivek/image/upload/v1715194927/home/Icon1_krfeo4.png"
                className="w-7 h-7"
                width={30}
                height={30}
              />
              <p className="text-white text-sm font-normal px-6">Opened 24/7</p>
            </div>
            <div className="flex flex-col items-center justify-center border-8 border-metal_grey gap-4 w-full h-40">
              <Image
                alt=""
                src="https://res.cloudinary.com/cloudofvivek/image/upload/v1715194927/home/Icon2_pvt7ck.png"
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
                src="https://res.cloudinary.com/cloudofvivek/image/upload/v1715194927/home/Icon2_pvt7ck.png"
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
             p
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-10 mt-12">
            {blogs.slice(0, 2).map((item, index) => {
              return (
                <Link href={`/blog/${item.slug}`} className="w-full">
                  <div key={index} className="w-full border">
                    <Image
                      alt=""
                      src="https://res.cloudinary.com/cloudofvivek/image/upload/v1715194603/blog/blog1_s6gjnm.svg"
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
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/cloudofvivek/image/upload/v1715194947/home/Background_kp97eh.svg')",
        }}
      >
        <Reservation />
      </div>
    </div>
  );
}
