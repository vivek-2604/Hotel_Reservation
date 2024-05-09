import Image from "next/image";
import Img1 from "../../../../../public/about-us/img_1.svg";
import Img2 from "../../../../../public/about-us/img_2.svg";
import Img3 from "../../../../../public/about-us/img_3.svg";
import Img4 from "../../../../../public/about-us/img_4.svg";
import Img5 from "../../../../../public/about-us/img_5.svg";

const Gallary = () => {
  return (
    <div className="flex gap-1 md:gap-2 lg:gap-4">
      <div className="flex flex-col gap-1 md:gap-2 lg:gap-4">
        <Image src={Img1} />
        <Image src={Img2} />
      </div>
      <div className="overflow-hidden">
        <Image src={Img3} className="scale-110" />
      </div>
      <div className="flex flex-col gap-1 md:gap-2 lg:gap-4">
        <Image src={Img4} />
        <Image src={Img5} />
      </div>
    </div>
  );
};

export default Gallary;
