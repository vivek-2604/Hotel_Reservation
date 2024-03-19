"use client";

import Image from "next/image";
import Blog1 from "../../../../../public/blog/Image.svg";

const page = () => {
  return (
    <div>
      <div className="flex gap-6 items-center justify-center mt-10">
        <p className="font-semibold text-base text-blue border-y-2 border-yellow text-center uppercase">
          Restaurants
        </p>
        <p className="font-semibold text-base text-blue border-y-2 border-yellow text-center uppercase">
          Feb 22, 2023
        </p>
      </div>
      <div className="flex flex-col justify-center items-center mx-12 md:mx-16 lg:mx-36 xl:mx-64 my-10">
        <p className="mx-auto text-3xl font-semibold">
          Elegant Dessert: 10 Tips How to Make It at Home
        </p>
        <p className="mx-auto text-base font-normal mt-4">
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content making.
        </p>
      </div>
      <div className="mx-12 md:mx-16 lg:mx-36 xl:mx-64 my-10"><Image src={Blog1}/></div>
      <div className="mx-12 md:mx-16 lg:mx-36 xl:mx-64 my-10">
        <p className="mx-auto text-xl font-semibold">
          Elegant Dessert: 10 Tips How to Make It at Home
        </p>
        <p className="leading-7">
        Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements. Collaboratively expedite quality manufactured products via client-focused results quickly communicate enabled technology and turnkey leadership skills. Uniquely enable accurate supply chains rather than friction technology<br/>
        Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements. Collaboratively expedite quality manufactured products via client-focused results quickly communicate enabled technology and turnkey leadership skills. Uniquely enable accurate supply chains rather than friction technology<br/>
        Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements. Collaboratively expedite quality manufactured products via client-focused results quickly communicate enabled technology and turnkey leadership skills. Uniquely enable accurate supply chains rather than friction technology<br/>
        Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements. Collaboratively expedite quality manufactured products via client-focused results quickly communicate enabled technology and turnkey leadership skills. Uniquely enable accurate supply chains rather than friction technology<br/>
        Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements. Collaboratively expedite quality manufactured products via client-focused results quickly communicate enabled technology and turnkey leadership skills. Uniquely enable accurate supply chains rather than friction technology<br/>
        Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements. Collaboratively expedite quality manufactured products via client-focused results quickly communicate enabled technology and turnkey leadership skills. Uniquely enable accurate supply chains rather than friction technology<br/>

        </p>
      </div>
    </div>
  );
};

export default page;
