import Image from "next/image";

const Category = () => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-20 px-12 gap-6 w-full bg-cover bg-center xl:px-64 md:px-16 lg:px-36 "
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/cloudofvivek/image/upload/v1715191835/about%20us/Background_z2yfdp.svg')",
      }}
    >
      <div className="grid-cols-1 items-center text-white px-4 justify-center text-center">
        <Image
          src="https://res.cloudinary.com/cloudofvivek/image/upload/v1715191900/about%20us/product_n7khlf.svg"
          width={80}
          height={100}
          className="mx-auto"
        />
        <p className="mt-2 text-lg font-medium">Fresh Product</p>
        <p className="mt-2">
          Professional consider everyone probls small niche friendly.
        </p>
        <p className="text-yellow mt-2">See more</p>
      </div>
      <div className="grid-cols-1 items-center text-white px-4 justify-center text-center">
        <Image
          src="https://res.cloudinary.com/cloudofvivek/image/upload/v1715191903/about%20us/skillChef_wo7zzm.svg"
          width={80}
          height={100}
          className="mx-auto"
        />
        <p className="mt-2 text-lg font-medium">Skilled Chefs</p>
        <p className="mt-2">
          Professional consider everyone probls small niche friendly.
        </p>
        <p className="text-yellow mt-2">See more</p>
      </div>
      <div className="grid-cols-1 items-center text-white px-4 justify-center text-center">
        <Image
          src="https://res.cloudinary.com/cloudofvivek/image/upload/v1715191826/about%20us/drink_paazfq.svg"
          width={80}
          height={100}
          className="mx-auto"
        />
        <p className="mt-2 text-lg font-medium">Drinks & Juices</p>
        <p className="mt-2">
          Professional consider everyone probls small niche friendly.
        </p>
        <p className="text-yellow mt-2">See more</p>
      </div>
      <div className="grid-cols-1 items-center text-white px-4 justify-center text-center">
        <Image
          src="https://res.cloudinary.com/cloudofvivek/image/upload/v1715191903/about%20us/vegan_aosnun.svg"
          width={80}
          height={100}
          className="mx-auto"
        />
        <p className="mt-2 text-lg font-medium">Vegan Cuisine</p>
        <p className="mt-2">
          Professional consider everyone probls small niche friendly.
        </p>
        <p className="text-yellow mt-2">See more</p>
      </div>
    </div>
  );
};

export default Category;
