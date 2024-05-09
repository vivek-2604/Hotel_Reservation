import React from "react";
import Link from "next/link";
import Image from "next/image";

const MenuList = ({ slug, name, description, price }) => {
  return (
    <Link href={`/menu/${slug}`}>
      <div className="flex gap-5 mt-5">
        <Image
          alt=""
          src="https://res.cloudinary.com/cloudofvivek/image/upload/v1715194930/home/drink_bvnjlb.svg"
          width={50}
          height={5}
        />
        <div className="flex justify-between w-full">
          <div>
            <p className="text-lg font-semibold">{name}</p>
            <p className="text-base font-medium line-clamp-1">{description}</p>
          </div>
          <p className="text-lg font-semibold">${price}</p>
        </div>
      </div>
    </Link>
  );
};

export default MenuList;
