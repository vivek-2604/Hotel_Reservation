import Image from "next/image";
import Category from "@/app/component/about-us/category";
import Chef from "@/app/component/about-us/Chef Data";
import Gallary from "@/app/component/about-us/Gallary";
import Reservation from "@/app/component/ReservationForm";
import Testimonial from "@/app/component/Testimonial";

const About = () => {
  const testimonials = [
    {
      "comment": "An unforgettable dining experience! Every dish was a masterpiece, and the ambiance was perfect. Highly recommend Nirvana Nest for anyone seeking a culinary delight.",
      "author": "Priya S.",
      "post": "Food Blogger"
    },
    {
      "comment": "The vegan options are simply divine! It's rare to find such creativity and flavor in vegan cuisine. Nirvana Nest has truly set a new standard.",
      "author": "Arjun M.",
      "post": "Health Enthusiast"
    },
    {
      "comment": "Exceptional service and exquisite flavors. The chef’s specials were out of this world. I can't wait to come back!",
      "author": "Rita K.",
      "post": "Frequent Diner"
    }
  ]

  return (
    <>
      <div className="bg-blue w-full py-10">
        <div className="text-center mx-auto">
          <p className="text-white font-bold text-2xl">About Us</p>
        </div>
      </div>
      <div className="flex mt-10 px-12 md:px-16 xl:px-64 lg:px-36">
        <div className="mx-auto text-blue px-6">
          <p className="font-semibold text-xl">ABOUT US</p>
          <p className="font-normal text-4xl mt-4">Quality and Tradition</p>
          <p className="font-normal text-base mt-4">
            Welcome to Nirvana Nest, where every meal is a journey to culinary
            nirvana. Nestled in the heart of the city, our restaurant blends a
            serene ambiance with exquisite cuisine, creating an unparalleled
            dining experience. Our passionate chefs craft each dish with the
            finest ingredients, infusing traditional flavors with innovative
            twists.
          </p>
          <Image
            src="https://res.cloudinary.com/cloudofvivek/image/upload/v1715191891/about%20us/name_sign_ah0x37.svg"
            width={200}
            height={100}
            className="mt-4"
          />
        </div>
        <div className="hidden lg:block">
          <Image
            className=""
            src="https://res.cloudinary.com/cloudofvivek/image/upload/v1715191822/about%20us/banner_img_whnmp1.svg"
            width={700}
            height={100}
          />
        </div>
      </div>
      <div className="my-10 lg:my-20">
        <Category />
      </div>
      <div className="my-10 lg:my-20">
        <div className="text-center mx-auto text-blue">
          <p className="font-semibold text-xl">Team</p>
          <p className="font-normal text-4xl mt-4">
            Meet Our Professional Chefs
          </p>
        </div>
        <div className="mt-4 px-12 md:px-16 xl:px-64 lg:px-36">
          <Chef />
        </div>
      </div>
      <div className="my-10 bg-blue py-20 px-12 md:px-16 xl:px-64 lg:px-36 lg:my-20 ">
        <div className="text-center mx-auto text-white ">
          <p className="font-semibold text-xl">Testimonial</p>
          <p className="font-normal text-4xl mt-4">What Our Clients Say</p>
        </div>
        <div className="mt-4">
          <Testimonial testimonials={testimonials} />
        </div>
      </div>
      <div className="my-10 lg:my-20">
        <div className="text-center mx-auto text-blue ">
          <p className="font-semibold text-xl">Gallary</p>
          <p className="font-normal text-4xl mt-4">What we Provide</p>
        </div>
        <div className="mt-4 px-12 md:px-16 xl:px-64 lg:px-36">
          <Gallary />
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
    </>
  );
};

export default About;
