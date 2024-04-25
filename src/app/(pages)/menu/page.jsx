"use client";

import Image from "next/image";
import Heading from "@/app/component/Heading/Heading";
import Reservation from "@/app/component/ReservationForm";
import MenuImg from "../../../../public/menu/starter.jpeg";
import MenuBg1 from "../../../../public/menu/menu_img_1.svg";
import MenuBg2 from "../../../../public/menu/menu_img_2.svg";
import { useRouter } from "next/navigation";
import { menuData } from "@/lib/menuFile";
import MenuList from "@/app/component/MenuList/MenuList";

const Menu = () => {
  const router = useRouter();

  const handleStarterButton = () => {
    router.push("/menu/starter");
  };

  const handleMainButton = () => {
    router.push("/menu/main-dish");
  };

  const handleDesertButton = () => {
    router.push("/menu/desert");
  };

  return (
    <div>
      <Heading children="Our Menu" />
      <div className="my-10 lg:my-20 flex gap-10 px-12 md:px-16 xl:px-64 lg:px-36">
        <div className="hidden md:block w-2/5">
          <Image src={MenuImg} />
        </div>
        <div className="w-full md:w-3/5">
          <p className="text-2xl font-semibold">Starter</p>
          <div>
            {menuData
              .filter((item) => item.category === "Starter")
              .slice(0, 7)
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
          <button
            className="mt-10 border-2 border-yellow px-3 py-2"
            onClick={handleStarterButton}
          >
            See all dishesh
          </button>
        </div>
      </div>
      <div className="my-10 lg:my-20 h-[250px] overflow-hidden">
        <Image src={MenuBg1} height={1000} />
      </div>
      <div className="my-10 lg:my-20 flex flex-row-reverse gap-10 px-12 md:px-16 xl:px-64 lg:px-36">
        <div className="hidden md:block w-2/5">
          <Image src={MenuImg} />
        </div>
        <div className="w-full md:w-3/5">
          <p className="text-2xl font-semibold">Main Course</p>
          <div>
            {menuData
              .filter((item) => item.category === "Main Course")
              .slice(0, 7)
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
          <button
            className="mt-10 border-2 border-yellow px-3 py-2"
            onClick={handleMainButton}
          >
            See all dishesh
          </button>
        </div>
      </div>
      <div className="my-10 lg:my-20 h-[250px] overflow-hidden">
        <Image src={MenuBg2} height={1000} />
      </div>
      <div className="my-10 lg:my-20 flex gap-10 px-12 md:px-16 xl:px-64 lg:px-36">
        <div className="hidden md:block w-2/5 min-h-[557px]:">
          <Image src={MenuImg} />
        </div>
        <div className="w-full md:w-3/5">
          <p className="text-2xl font-semibold">Desert</p>
          <div>
            {menuData
              .filter((item) => item.category === "Dessert")
              .slice(0, 7)
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
          <button
            className="mt-10 border-2 border-yellow px-3 py-2"
            onClick={handleDesertButton}
          >
            See all dishesh
          </button>
        </div>
      </div>
      <div
        className="w-full h-4/5 py-28 bg-cover bg-center"
        style={{ backgroundImage: "url('/home/Background.svg')" }}
      >
        <Reservation />
      </div>
    </div>
  );
};

export default Menu;
