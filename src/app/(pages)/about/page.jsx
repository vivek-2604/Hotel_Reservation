import Image from "next/image";
import Category from "@/app/component/about-us/category";
import Chef from "@/app/component/about-us/Chef Data";
import Gallary from "@/app/component/about-us/Gallary";
import Reservation from "@/app/component/ReservationForm";
import Banner from "../../../../public/about-us/banner_img.svg";
import Name from "../../../../public/about-us/name_sign.svg";
import Testimonial from "@/app/component/Testimonial";

const About = () => {
  const testimonials = [
    {
      quote:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews Iterative approaches to corporate strategy foster collaborative thinking  further overall value proposition organicallfriendly",
      author: "Author 1",
      designation: "designer"
    },
    {
      quote:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews Iterative approaches to corporate strategy foster collaborative thinking  further overall value proposition organicallfriendly",
      author: "Author 2",
      designation: "designer"
    },
    {
      quote:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews Iterative approaches to corporate strategy foster collaborative thinking  further overall value proposition organicallfriendly",
      author: "Author 3",
      designation: "designer"
    },
  ];

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
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content gfshere making
            look like readable English. Many desktop publishing packages.
          </p>
          <Image src={Name} className="mt-4" />
          <button className="border-2 border-yellow px-8 py-2 mt-4">
            See More
          </button>
        </div>
        <div className="hidden lg:block">
          <Image className="" src={Banner} />
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
        style={{ backgroundImage: "url('/home/Background.svg')" }}
      >
        <Reservation />
      </div>
    </>
  );
};

export default About;
