import Link from "next/link";
import { getBlogs } from "@/lib/data";
import Reservation from "@/app/component/ReservationForm";
import Image from "next/image";
import Heading from "@/app/component/Heading/Heading";

const Blog = async () => {
  const blog = await getBlogs();

  return (
    <div>
      <Heading children="Blog" />
      <div className="">
        <div className="mx-12 md:mx-16 lg:mx-36 xl:mx-64 my-10">
          <div className="flex flex-col items-center gap-4">
            <p className="border-y-2 border-yellow text-sm font-semibold w-10">
              BLOG
            </p>
            <p className="text-center font-bold text-xl text-blue">
              Be First Who Read News
            </p>
            <p className="text-center font-normal text-base lg:px-56">
              Discover the culinary journey behind our Chef's Specials and
              cooking tips from our expert chefs in our blog section. From
              travel adventures to foodie guides, explore diverse articles that
              ignite wanderlust and tantalize taste buds.
            </p>
          </div>
          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {blog.map((item, index) => {
                return (
                  <Link href={`/blog/${item.slug}`}>
                    <div className="w-full border">
                      <Image
                        src="https://res.cloudinary.com/cloudofvivek/image/upload/v1715194603/blog/blog1_s6gjnm.svg"
                        width={100}
                        height={100}
                        className="w-full"
                      />
                      <div className="mt-4 py-6 px-4">
                        <div className="flex flex-col sm:flex-row gap-6 items-center">
                          <p className="font-semibold text-base text-blue border-y-2 border-yellow text-center uppercase">
                            {item.category}
                          </p>
                          <p className="font-semibold text-base text-blue border-y-2 border-yellow text-center uppercase">
                            {item.releaseDate}
                          </p>
                        </div>
                        <p className="mt-4 font-semibold text-xl line-clamp-2">
                          {item.title}
                        </p>
                        <p className="mt-4 font-medium text-base line-clamp-3">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          {/*<div className="text-center">
            <button className="px-10 py-2 mt-10 text-lg text-yellow border-2 border-yellow">
              Next
            </button>
          </div>*/}
        </div>
      </div>
      <div
        className="w-full h-4/5 py-28 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/cloudofvivek/image/upload/v1715194947/home/Background_kp97eh.svg')",
        }}
      >
        <Reservation />
      </div>
    </div>
  );
};

export default Blog;
