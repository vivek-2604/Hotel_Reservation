import { menuData } from "@/data/menuFile";
import Image from "next/image";
import React from "react";

export const RelatedDish = ({ selectedData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 mt-12 gap-5">
      {menuData
        .filter((item) => {
          return (
            item.category === selectedData.category &&
            item.slug !== selectedData.slug
          );
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
                <p className="text-sm font-medium mt-4">{item.description}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};
