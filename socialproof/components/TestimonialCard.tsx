import Image from 'next/image'
import React from 'react'

interface TesimonialProps {
  customerName: string,
  testimonialText: string,
  imageURL: string,
}

export const TestimonialCard = ({ customerName, testimonialText, imageURL }: TesimonialProps) => {
  return (
    <div className={`group w-3/4 md:w-[420px]  md:h-[240px] flex flex-col items-start md:space-x-4 bg-gradient-to-r from-[#975297] to-[#502050] mt-4 md:even:mt-16 md:last:mt-32 px-6 py-6 rounded-2xl cursor-pointer hover:shadow-md hover:bg-gradient-to-r hover:from-[#ce74ff] hover:to-[#743c8a] transition duration-1000 ease-in-out `}>
      <div className="flex space-x-5 pb-4  md:space-x-6 md:px-4 ">
        <div className="w-[50px] h-[50px] rounded-full ring-1 ring-fuchsia-400 group-hover:ring-fuchsia-100">

          <Image
            src={imageURL}
            objectFit="contain"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>

        <div className=" flex flex-col items-start justify-start">
          <h2 className="text-md md:text-2xl font-bold text-fuchsia-100 group-hover:text-fuchsia-100 ">{customerName}</h2>
          <p className="text-md md:text-md font-semibold text-fuchsia-400 ml-1 group-hover:text-fuchsia-50">Verified Buyer</p>
        </div>

      </div>

      <div className="text-md md:text-lg text-fuchsia-200 font-500 py-2">
        {testimonialText}
      </div>
    </div>
  )
}
