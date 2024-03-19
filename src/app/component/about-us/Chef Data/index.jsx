import Image from 'next/image'
import Chef_2 from "../../../../../public/about-us/chef2.svg";
import Chef_3 from "../../../../../public/about-us/chef3.svg";
import Chef_1 from "../../../../../public/about-us/chef1.svg";
import Chef_4 from "../../../../../public/about-us/chef4.svg";

const Chef = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
        <div className="text-center">
            <Image src={Chef_1} className='mx-auto'/>
            <p className='text-lg font-medium'>Arvoko</p>
            <p className='text-lg font-medium'>Master Chef</p>
        </div>
        <div className="text-center">
            <Image src={Chef_2} className='mx-auto'/>
            <p className='text-lg font-medium'>Evan mattew</p>
            <p className='text-lg font-medium'>Master Chef</p>
        </div>
        <div className="text-center">
            <Image src={Chef_3} className='mx-auto'/>
            <p className='text-lg font-medium'>Diane Clarkson</p>
            <p className='text-lg font-medium'>Master Chef</p>
        </div>
        <div className="text-center">
            <Image src={Chef_4} className='mx-auto'/>
            <p className='text-lg font-medium'>Dan rafalin</p>
            <p className='text-lg font-medium'>Assistant Chef</p>
        </div>
    </div>
  )
}

export default Chef