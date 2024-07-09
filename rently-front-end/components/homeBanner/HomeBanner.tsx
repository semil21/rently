import React from "react";
import carImage from "@/images/homeCar.png";
import Image from "next/image";

const HomeBanner = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row mt-3 lg:px-36 justify-center items-center mt-5">
        <div className="w-full  md:w-[50%] lg:mx-0 mx-4 md:mx-8 sm:mx-10  h-full ">
          <p className="text-green-500 lg:text-[30px] text-[18px] md:text-[20px] sm:text-[10px] font-bold mx-1 my-3">
            Plan your trip now
          </p>
          <p className="text-[36px] xl:text-[40px]  lg:text-[30px] md:text-[25px] font-bold leading-tight ">
            Explore the World with comfortable car
          </p>
          <p className="text-[15px] xl:text-[18px] lg:text-[15px] md:text-[15px] mt-3 md:mt-5 font-normal   ">
            Embark on unforgettable adventures and discover the world in
            unparalleled comfort and style with our fleet of exceptionally
            comfortable cars.
          </p>
        </div>
        <div className="w-full md:w-[55%] flex justify-center items-center mt-5 md:mt-0  ">
          <Image
            src={carImage}
            alt="car Image"
            className="
              w-[0x] h-[0px]   // Default size for very small screens
              sm:w-[180px] sm:h-[150px] // Size for small screens (425px to 768px)
              tablet:w-[300px] tablet:h-[200px] // Size for tablets (768px to 1023px)
              md:w-[328px] md:h-[180px] // Size for medium screens
              lg:w-[357px] lg:h-[200px] // Size for large screens
              xl:w-[500px] xl:h-[271px] // Size for extra-large screens
              2xl:w-[581px] 2xl:h-[310px] // Size for 2xl screens
              "
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
