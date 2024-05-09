import { getSingleMenu } from "@/lib/menuFile";
import Image from "next/image";
import React from "react";
import Tab from "@/app/component/Tabs/Tab";
import Review from "@/app/component/Review/Review";
import { Reviews } from "@/lib/reviews";

const Description = () => (
  <div className="flex flex-col gap-5">
    <h1 className="text-2xl font-semibold ">Description</h1>
    <p className="font-normal text-base ">
      Progressively maintain extensive infomediaries via extensible niches.
      Dramatically disseminate standardized metrics resource leveling processes.
      Objectively pursue diverse catalysts for change for interoperable
      meta-services.Proactively fabricate one-to-one materials effective
      e-business. Completely synergize scalable e-commerce rather than high
      standards in e-services. Assertively iterate resource maximizing products
      leading-edge intellectual capitaligh standards in e-services.
    </p>
  </div>
);

const page = async ({ params }) => {
  const menu = await getSingleMenu(params.slug);

  const tabs = [
    { label: "Description", content: <Description /> },
    { label: "Review", content: <Review review={Reviews} /> },
  ];

  return (
    <div className="flex flex-col justify-center items-center mx-12 md:mx-16 lg:mx-36 xl:mx-64 my-10">
      <div className="flex flex-col md:flex-row gap-10 my-10">
        <div className="w-full md:w-2/5">
          <Image
            src="https://res.cloudinary.com/cloudofvivek/image/upload/v1715190602/menu/single_menu.jpg"
            width={300}
            height={100}
            className="w-full"
          />
        </div>
        <div className="w-full md:w-3/5 space-y-8">
          <div className="flex flex-col justify-start gap-5">
            <p className="text-xl font-bold">{menu.name}</p>
            <p className="text-lg font-semibold">$ {menu.price}</p>
          </div>
          <div className="space-y-5">
            <p className="text-base font-medium">{menu.description}</p>
            <div className="flex gap-2">
              <input
                type="number"
                className="border-2 border-yellow w-1/5 p-2"
                defaultValue="1"
                min="1"
                max="10"
                step="1"
              />
              <button className="px-6 py-2 border-2 border-yellow">
                Add to Cart
              </button>
            </div>
          </div>
          <div>
            <p className="text-yellow text-base font-medium">
              Calories: <span className="text-blue">{menu.calories}</span>
            </p>
            <p className="text-yellow text-base font-medium">
              Category: <span className="text-blue">{menu.category}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full my-10">
        <Tab tabs={tabs} />
      </div>
      <div>3</div>
    </div>
  );
};

export default page;
