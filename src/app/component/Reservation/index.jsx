"use client";

import React, { useState } from "react";

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    person: "",
    timing: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log(formData);
  };

  return (
    <>
      <div className="bg-blue opacity-95 py-36 px-28 lg:w-1/2 lg:mx-auto">
        <div className="flex flex-col justify-center items-center gap-5">
          <p className="border-y-2 border-yellow w-24 text-white text-sm font-semibold uppercase">
            Reservation
          </p>
          <p className="text-white text-xl font-normal">Book Your Table Now</p>
        </div>
        <div>
          <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-4 mt-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full md:w-1/2 lg:w-full xl:w-1/2 px-2 py-1 placeholder:text-white bg-transparent border-2 border-white text-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full md:w-1/2 lg:w-full xl:w-1/2 px-2 py-1 placeholder:text-white bg-transparent border-2 border-white text-white"
            />
          </div>
          <div className="flex flex-col xl:flex-row gap-4 mt-6">
            <div className="flex flex-col sm:flex-row gap-4 w-full xl:w-2/3">
              <input
                type="text"
                placeholder="Person"
                className="sm:w-1/2 px-2 py-1 placeholder:text-white bg-transparent border-2 border-white text-white"
              />
              <input
                type="time"
                placeholder="Time"
                className="sm:w-1/2 px-2 py-1 placeholder:text-white bg-transparent border-2 border-white text-white"
              />
            </div>
            <div className="md:w-full xl:w-1/3">
            <input
              type="date"
              placeholder="Date"
              className="w-full px-2 py-1 placeholder:text-white bg-transparent border-2 border-white text-white"
            />
            </div>
          </div>
          <div className="mt-6 text-center">
            <button className="bg-white tetx-blue px-3 py-1 rounded-sm w-full md:w-1/4">
              Book Table
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservation;
