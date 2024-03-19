"use client";

import Image from "next/image";
import React, { useState } from "react";
import LeftArrow from "../../../../public/about-us/left-arrow.svg";
import RightArrow from "../../../../public/about-us/right-arrow.svg";

const Testimonial = ({ testimonials }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="max-w-2xl mx-auto relative overflow-hidden">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <div className="bg-transparent text-white p-10 text-center shadow-md rounded-md">
              <p className="text-lg mb-4">{testimonial.quote}</p>
              <p className="font-semibold mb-4">{testimonial.author}</p>
              <p className="font-semibold mb-4 text-yellow">{testimonial.designation}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="text-white absolute top-1/2 left-0 transform -translate-y-1/2"
      >
        <Image src={LeftArrow} width={30} className="" />
      </button>
      <button
        onClick={nextSlide}
        className="text-white absolute top-1/2 right-0 transform -translate-y-1/2"
      >
        <Image src={RightArrow} width={30} />
      </button>
    </div>
  );
};

export default Testimonial;
