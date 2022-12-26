import React from "react";
import Image from "next/image";
const Catagory = () => {
  return (
    <div className="ml-8 mr-8 md:ml:60 xl:ml-8   ">
      <h1 className=" text-xl font-semibold text-black">Electronics</h1>
      <Image
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
        height="250"
        width="300"
        className="w-auto aspect-auto "
        alt="img"
      />
      <h4 className="text-black">See More</h4>
    </div>
  );
};

export default Catagory;
