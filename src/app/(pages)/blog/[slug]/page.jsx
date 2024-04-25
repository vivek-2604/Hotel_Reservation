import Image from "next/image";
import Blog1 from "../../../../../public/blog/Image.svg";
import { getBlog } from "@/lib/data";

const page = async ({ params }) => {
  const blog = await getBlog(params.slug);

  return (
    <div>
      <div className="flex gap-6 items-center justify-center mt-10">
        <p className="font-semibold text-base text-blue border-y-2 border-yellow text-center uppercase">
          {blog.category}
        </p>
        <p className="font-semibold text-base text-blue border-y-2 border-yellow text-center uppercase">
          {blog.releaseDate}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center mx-12 md:mx-16 lg:mx-36 xl:mx-64 my-10">
        <p className="mx-auto text-3xl font-semibold">{blog.title}</p>
        <p className="mx-auto text-base font-normal mt-4">{blog.subTitle}</p>
      </div>
      <div className="mx-12 md:mx-16 lg:mx-36 xl:mx-64 my-10">
        <Image src={Blog1} />
      </div>
      <div className="mx-12 md:mx-16 lg:mx-36 xl:mx-64 my-10">
        <p className="mx-auto text-xl font-semibold">
          {blog.contentTitle}
        </p>
        <p className="leading-7">{blog.content}</p>
      </div>
    </div>
  );
};

export default page;
