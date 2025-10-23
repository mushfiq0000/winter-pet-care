import React from "react";

const Skeleton = () => {
  return (
    <div>
      <div className="flex justify-center py-10 ">
        <div className="relative w-11/12 md:w-2/3 h-150 overflow-hidden rounded-2xl"></div>
      </div>
      <div className="py-12 px-6 flex justify-center ">
        <div className="py-3  mb-8 skeleton h-5 w-1/2 "></div>
      </div>
    </div>
  );
};

export default Skeleton;
