import Image from "next/image";

const Chef = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
      <div className="text-center">
        <Image
          src="https://res.cloudinary.com/cloudofvivek/image/upload/v1715191824/about%20us/chef1_ke1xxb.svg"
          width={1000}
          height={100}
          className="mx-auto"
        />
        <p className="text-lg font-medium">Arvoko</p>
        <p className="text-lg font-medium">Master Chef</p>
      </div>
      <div className="text-center">
        <Image
          src="https://res.cloudinary.com/cloudofvivek/image/upload/v1715191828/about%20us/chef2_vkbkeb.svg"
          width={1000}
          height={100}
          className="mx-auto"
        />
        <p className="text-lg font-medium">Evan mattew</p>
        <p className="text-lg font-medium">Master Chef</p>
      </div>
      <div className="text-center">
        <Image
          src="https://res.cloudinary.com/cloudofvivek/image/upload/v1715191827/about%20us/chef3_bka4fp.svg"
          width={1000}
          height={100}
          className="mx-auto"
        />
        <p className="text-lg font-medium">Diane Clarkson</p>
        <p className="text-lg font-medium">Master Chef</p>
      </div>
      <div className="text-center">
        <Image
          src="https://res.cloudinary.com/cloudofvivek/image/upload/v1715191902/about%20us/chef4_ihgdk3.svg"
          width={1000}
          height={100}
          className="mx-auto"
        />
        <p className="text-lg font-medium">Dan rafalin</p>
        <p className="text-lg font-medium">Assistant Chef</p>
      </div>
    </div>
  );
};

export default Chef;
