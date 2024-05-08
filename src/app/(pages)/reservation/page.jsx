import Image from "next/image";
import Heading from "@/app/component/Heading/Heading";

const Reservation = () => {
  return (
    <div>
      <Heading children="Booking Page" />
      <div className="mx-12 md:mx-16 lg:mx-36 xl:mx-64 my-10">
        <div className="flex gap-10">
          <div className="py-10 lg:w-1/2">
            <div className="flex flex-col gap-4">
              <p className="font-semibold text-base text-blue text-left uppercase">
                Reservation
              </p>
              <p className="text-blue text-2xl font-bold">
                Book Your Table Now
              </p>
              <p className="text-blue text-base font-medium">
                The people, food and the prime locations make Rodich the perfect
                place good friends & family to come together and have great
                time.
              </p>
            </div>
            <div className="flex flex-col gap-6 mt-10">
              <div className="flex gap-4 flex-col sm:flex-row">
                <input
                  type="text"
                  placeholder="Name"
                  className="border p-2 sm:w-1/2"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border py-2 px-3 sm:w-1/2"
                />
              </div>
              <div className="flex gap-4 flex-col sm:flex-row">
                <input
                  type="text"
                  placeholder="Number"
                  className="border p-2 sm:w-1/2"
                />
                <input
                  type="date"
                  placeholder="Date"
                  className="border py-2 px-3 sm:w-1/2"
                />
              </div>
              <div className="flex gap-4 flex-col sm:flex-row">
                <input
                  type="time"
                  placeholder="Time"
                  className="border p-2 sm:w-1/2"
                />
                <input
                  type="text"
                  placeholder="Person"
                  className="border py-2 px-3 sm:w-1/2"
                />
              </div>
              <button className="px-4 py-2 border-2 border-yellow w-full md:w-1/4 lg:w-full 2xl:w-1/2">
                Book a Table
              </button>
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/2">
            <Image
              src="https://res.cloudinary.com/cloudofvivek/image/upload/v1715191221/reservation/reservation_xctgkn.svg"
              width={1000}
              height={100}
              className="min-h-[570px]"
            />
          </div>
        </div>
      </div>
      <div className="mx-12 md:mx-16 lg:mx-36 xl:mx-64 my-10 md:my-20">
        <div className="flex gap-10">
          <div className="hidden lg:w-1/2 lg:block">
            <Image
              src="https://res.cloudinary.com/cloudofvivek/image/upload/v1715191228/reservation/whyus_r95bcp.svg"
              width={1000}
              height={100}
              className="min-h-[470px]"
            />
          </div>
          <div className="py-10 lg:w-1/2">
            <div className="flex flex-col gap-4">
              <p className="font-semibold text-base text-blue text-left uppercase">
                why choose us
              </p>
              <p className="text-blue text-2xl font-bold">
                Why We Are The Best?
              </p>
              <p className="text-blue text-base font-medium">
                Bring the table winwin survival strateges ensure proactive the
                domination the end of the day going forward new normal that has
                evolved froms generation on the runway heading towards
                streamlined cloud solution generated content in real times will
                have multiple touchpoints.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-2 gap-6 mt-10">
              <p className="col-span-1 sm:col-span-2 lg:col-span-1 border-2 border-yellow px-4 py-2">
                Fresh Food
              </p>
              <p className="col-span-1 sm:col-span-2 lg:col-span-1 border-2 border-yellow px-4 py-2">
                Fast Delivery
              </p>
              <p className="col-span-1 sm:col-span-2 lg:col-span-1 border-2 border-yellow px-4 py-2">
                Quality Maintain
              </p>
              <p className="col-span-1 sm:col-span-2 lg:col-span-1 border-2 border-yellow px-4 py-2">
                24/7 Seervice
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
