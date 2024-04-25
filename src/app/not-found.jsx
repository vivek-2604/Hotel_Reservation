"use client";

import React from "react";
import Image from "next/image";
import Page404 from "../../public/404/404.svg";
import { useRouter } from "next/navigation";

const notFound = () => {
    const router = useRouter();

  const getHome = () => {
    router.push("/");
  };

  return (
    <div className="mx-12 md:mx-16 lg:mx-36 xl:mx-64 my-20">
      <div className="flex w-4/5 justify-center items-center pl-28">
        <Image src={Page404} />
      </div>
      <div className="flex flex-col gap-5 justify-center items-center mt-10">
        <h1 className="text-4xl font-extrabold">Whoops, Nothing delicious to find here!</h1>
        <p className="font-medium text-lg">The page you are looking for doesn't exist or has been moved.</p>
        <button className="px-3 py-2 bg-yellow border" onClick={getHome}>Back to Home</button>
      </div>
    </div>
  );
};

export default notFound;
