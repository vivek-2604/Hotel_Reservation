"use client";

import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().required().email(),
  person: Yup.number().min(2).max(10).required(),
  time: Yup.string()
    .matches(
      /^(1[2-9]|2[0-3]):[0-5][0-9]$/,
      "Please enter a valid time between 12:00 and 23:00 in the format HH:mm"
    )
    .required("Time is required"),
  date: Yup.date()
    .min(new Date(), "Date must be today or later")
    .max(
      new Date(new Date().getTime() + 14 * 24 * 60 * 60 * 1000),
      "Date must be within the next two weeks"
    )
    .test("is-not-weekend", "Date cannot be a weekend", function (value) {
      const day = value.getDay(); // 0 is Sunday, 6 is Saturday
      return day !== 0 && day !== 6;
    })
    .required("Date is required"),
});

const Reservation = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [person, setPerson] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      person: "",
      time: "",
      date: "",
    },

    validationSchema: schema,

    // Handle form submission
    onSubmit: async ({ name, email, person, time, date }) => {
      console.log(name, email, person, time, date);
      setName("");
      setEmail("");
      setPerson("");
      setTime("");
      setDate("");
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div>
      <div className="bg-blue opacity-95 py-36 px-28 lg:w-1/2 lg:mx-auto">
        <div className="flex flex-col justify-center items-center gap-5">
          <p className="border-y-2 border-yellow w-24 text-white text-sm font-semibold uppercase">
            Reservation
          </p>
          <p className="text-white text-xl font-normal">Book Your Table Now</p>
        </div>
        <div>
          <form onSubmit={handleSubmit} method="POST">
            <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-4 mt-6">
              <div className="flex flex-col w-full">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    handleChange(e);
                  }}
                  placeholder="Name"
                  autoComplete="off"
                  className="w-full px-2 py-1 placeholder:text-white bg-transparent border-2 border-white text-white"
                />
                {errors.name && touched.name && (
                  <span className="text-error_red">{errors.name}</span>
                )}
              </div>
              <div className="flex flex-col w-full">
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    handleChange(e);
                  }}
                  placeholder="Email"
                  autoComplete="off"
                  className="w-full px-2 py-1 placeholder:text-white bg-transparent border-2 border-white text-white"
                />
                {errors.email && touched.email && (
                  <span className="text-error_red">{errors.email}</span>
                )}
              </div>
            </div>
            <div className="flex flex-col xl:flex-row gap-4 mt-6">
              <div className="flex flex-col sm:flex-row gap-4 w-full xl:w-2/3">
                <div className="flex flex-col w-full sm:w-1/2">
                  <input
                    type="text"
                    id="person"
                    name="person"
                    value={person}
                    onChange={(e) => {
                      setPerson(e.target.value);
                      handleChange(e);
                    }}
                    placeholder="Person"
                    autoComplete="off"
                    className="
                    px-2 py-1 placeholder:text-white bg-transparent border-2 border-white text-white"
                  />
                  {errors.person && touched.person && (
                    <span className="text-error_red">{errors.person}</span>
                  )}
                </div>

                <div className="flex flex-col w-full sm:w-1/2">
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={time}
                    onChange={(e) => {
                      setTime(e.target.value);
                      handleChange(e);
                    }}
                    placeholder="Time"
                    autoComplete="off"
                    className="px-2 py-1 placeholder:text-white bg-transparent border-2 border-white text-white"
                  />
                  {errors.time && touched.time && (
                    <span className="text-error_red">{errors.time}</span>
                  )}
                </div>
              </div>
              <div className="md:w-full xl:w-1/3">
                <div className="flex flex-col w-full">
                  <input
                    type="date"
                    id="date"
                    name="date"
                    placeholder="Date"
                    value={date}
                    onChange={(e) => {
                      setDate(e.target.value);
                      handleChange(e);
                    }}
                    autoComplete="off"
                    className="px-2 py-1 placeholder:text-white bg-transparent border-2 border-white text-white"
                  />
                  {errors.date && touched.date && (
                    <span className="text-error_red">{errors.date}</span>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <button
                type="submit"
                className="bg-white tetx-blue px-3 py-1 rounded-sm w-full md:w-1/4"
              >
                Book Table
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
