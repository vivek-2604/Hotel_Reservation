import Image from "next/image";
import Heading from "@/app/component/Heading/Heading";
import Reservation from "@/app/component/Reservation";
import Drink from "../../../../public/home/drink.svg";
import MenuImg from "../../../../public/menu/menu.svg";
import MenuBg1 from "../../../../public/menu/menu_img_1.svg";
import MenuBg2 from "../../../../public/menu/menu_img_2.svg";

const Menu = () => {
  return (
    <div>
      <Heading children="Our Menu" />
      <div className="my-10 lg:my-20 flex gap-6 px-12 md:px-16 xl:px-64 lg:px-36">
        <div className="hidden md:block w-2/5">
          <Image src={MenuImg} />
        </div>
        <div className="w-full md:w-3/5">
          <p className="text-2xl font-semibold">Starter</p>
          <div>
            <div className="flex gap-5 mt-5">
              <Image src={Drink} width={40} height={5} />
              <div className="flex justify-between w-full">
                <div>
                  <p className="text-lg font-semibold">
                    Raw Scallops from Erquy
                  </p>
                  <p className="text-base font-medium">
                    Candied Jerusalem artichokes truffle
                  </p>
                </div>
                <p className="text-lg font-semibold">$40</p>
              </div>
            </div>
            <div className="flex gap-5 mt-5">
              <Image src={Drink} width={40} height={5} />
              <div className="flex justify-between w-full">
                <div>
                  <p className="text-lg font-semibold">
                    Raw Scallops from Erquy
                  </p>
                  <p className="text-base font-medium">
                    Candied Jerusalem artichokes truffle
                  </p>
                </div>
                <p className="text-lg font-semibold">$40</p>
              </div>
            </div>
            <div className="flex gap-5 mt-5">
              <Image src={Drink} width={40} height={5} />
              <div className="flex justify-between w-full">
                <div>
                  <p className="text-lg font-semibold">
                    Raw Scallops from Erquy
                  </p>
                  <p className="text-base font-medium">
                    Candied Jerusalem artichokes truffle
                  </p>
                </div>
                <p className="text-lg font-semibold">$40</p>
              </div>
            </div>
            <div className="flex gap-5 mt-5">
              <Image src={Drink} width={40} height={5} />
              <div className="flex justify-between w-full">
                <div>
                  <p className="text-lg font-semibold">
                    Raw Scallops from Erquy
                  </p>
                  <p className="text-base font-medium">
                    Candied Jerusalem artichokes truffle
                  </p>
                </div>
                <p className="text-lg font-semibold">$40</p>
              </div>
            </div>
          </div>
          <button className="mt-10 border-2 border-yellow px-3 py-2">
            See all dishesh
          </button>
        </div>
      </div>
      <div className="my-10 lg:my-20 h-[250px] overflow-hidden">
      <Image src={MenuBg1} height={1000}/>
      </div>
      <div className="my-10 lg:my-20 flex flex-row-reverse gap-6 px-12 md:px-16 xl:px-64 lg:px-36">
        <div className="hidden md:block w-2/5">
          <Image src={MenuImg} />
        </div>
        <div className="w-full md:w-3/5">
        <p className="text-2xl font-semibold">Main Dish</p>
          <div>
            <div className="flex gap-5 mt-5">
              <Image src={Drink} width={40} height={5} />
              <div className="flex justify-between w-full">
                <div>
                  <p className="text-lg font-semibold">
                    Raw Scallops from Erquy
                  </p>
                  <p className="text-base font-medium">
                    Candied Jerusalem artichokes truffle
                  </p>
                </div>
                <p className="text-lg font-semibold">$40</p>
              </div>
            </div>
            <div className="flex gap-5 mt-5">
              <Image src={Drink} width={40} height={5} />
              <div className="flex justify-between w-full">
                <div>
                  <p className="text-lg font-semibold">
                    Raw Scallops from Erquy
                  </p>
                  <p className="text-base font-medium">
                    Candied Jerusalem artichokes truffle
                  </p>
                </div>
                <p className="text-lg font-semibold">$40</p>
              </div>
            </div>
            <div className="flex gap-5 mt-5">
              <Image src={Drink} width={40} height={5} />
              <div className="flex justify-between w-full">
                <div>
                  <p className="text-lg font-semibold">
                    Raw Scallops from Erquy
                  </p>
                  <p className="text-base font-medium">
                    Candied Jerusalem artichokes truffle
                  </p>
                </div>
                <p className="text-lg font-semibold">$40</p>
              </div>
            </div>
            <div className="flex gap-5 mt-5">
              <Image src={Drink} width={40} height={5} />
              <div className="flex justify-between w-full">
                <div>
                  <p className="text-lg font-semibold">
                    Raw Scallops from Erquy
                  </p>
                  <p className="text-base font-medium">
                    Candied Jerusalem artichokes truffle
                  </p>
                </div>
                <p className="text-lg font-semibold">$40</p>
              </div>
            </div>
          </div>
          <button className="mt-10 border-2 border-yellow px-3 py-2">
            See all dishesh
          </button>
        </div>
      </div>
      <div className="my-10 lg:my-20 h-[250px] overflow-hidden">
      <Image src={MenuBg2} height={1000}/>
      </div>
      <div className="my-10 lg:my-20 flex gap-6 px-12 md:px-16 xl:px-64 lg:px-36">
        <div className="hidden md:block w-2/5">
          <Image src={MenuImg} />
        </div>
        <div className="w-full md:w-3/5">
        <p className="text-2xl font-semibold">Desert</p>
          <div>
            <div className="flex gap-5 mt-5">
              <Image src={Drink} width={40} height={5} />
              <div className="flex justify-between w-full">
                <div>
                  <p className="text-lg font-semibold">
                    Raw Scallops from Erquy
                  </p>
                  <p className="text-base font-medium">
                    Candied Jerusalem artichokes truffle
                  </p>
                </div>
                <p className="text-lg font-semibold">$40</p>
              </div>
            </div>
            <div className="flex gap-5 mt-5">
              <Image src={Drink} width={40} height={5} />
              <div className="flex justify-between w-full">
                <div>
                  <p className="text-lg font-semibold">
                    Raw Scallops from Erquy
                  </p>
                  <p className="text-base font-medium">
                    Candied Jerusalem artichokes truffle
                  </p>
                </div>
                <p className="text-lg font-semibold">$40</p>
              </div>
            </div>
            <div className="flex gap-5 mt-5">
              <Image src={Drink} width={40} height={5} />
              <div className="flex justify-between w-full">
                <div>
                  <p className="text-lg font-semibold">
                    Raw Scallops from Erquy
                  </p>
                  <p className="text-base font-medium">
                    Candied Jerusalem artichokes truffle
                  </p>
                </div>
                <p className="text-lg font-semibold">$40</p>
              </div>
            </div>
            <div className="flex gap-5 mt-5">
              <Image src={Drink} width={40} height={5} />
              <div className="flex justify-between w-full">
                <div>
                  <p className="text-lg font-semibold">
                    Raw Scallops from Erquy
                  </p>
                  <p className="text-base font-medium">
                    Candied Jerusalem artichokes truffle
                  </p>
                </div>
                <p className="text-lg font-semibold">$40</p>
              </div>
            </div>
          </div>
          <button className="mt-10 border-2 border-yellow px-3 py-2">
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
