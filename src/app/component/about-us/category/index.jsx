import Image from 'next/image';
import Product from "../../../../../public/about-us/product.svg";
import SkilledChef from "../../../../../public/about-us/skillChef.svg";
import Drink from "../../../../../public/about-us/drink.svg";
import Vegan from "../../../../../public/about-us/vegan.svg";

const Category = () => {
  return (
    <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-20 px-12 gap-6 w-full bg-cover bg-center xl:px-64 md:px-16 lg:px-36 "
          style={{ backgroundImage: "url('/about-us/Background.svg')" }}
        >
          <div className="grid-cols-1 items-center text-white px-4 justify-center text-center">
            <Image src={Product} className="mx-auto" />
            <p className="mt-2 text-lg font-medium">Fresh Product</p>
            <p className="mt-2">
              Professional consider everyone probls small niche friendly.
            </p>
            <p className="text-yellow mt-2">See more</p>
          </div>
          <div className="grid-cols-1 items-center text-white px-4 justify-center text-center">
            <Image src={SkilledChef} className="mx-auto" />
            <p className="mt-2 text-lg font-medium">Skilled Chefs</p>
            <p className="mt-2">
              Professional consider everyone probls small niche friendly.
            </p>
            <p className="text-yellow mt-2">See more</p>
          </div>
          <div className="grid-cols-1 items-center text-white px-4 justify-center text-center">
            <Image src={Drink} className="mx-auto" />
            <p className="mt-2 text-lg font-medium">Drinks & Juices</p>
            <p className="mt-2">
              Professional consider everyone probls small niche friendly.
            </p>
            <p className="text-yellow mt-2">See more</p>
          </div>
          <div className="grid-cols-1 items-center text-white px-4 justify-center text-center">
            <Image src={Vegan} className="mx-auto" />
            <p className="mt-2 text-lg font-medium">Vegan Cuisine</p>
            <p className="mt-2">
              Professional consider everyone probls small niche friendly.
            </p>
            <p className="text-yellow mt-2">See more</p>
          </div>
        </div>
  )
}

export default Category