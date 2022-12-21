import React from "react";

const Plan = () => {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      {/* left side */}
      <div className=" grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          className=" row-span-3 object-cover h-full w-full p-2"
          src="https://images.pexels.com/photos/2880801/pexels-photo-2880801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <img
          className=" row-span-2 object-cover h-full w-full p-2"
          src="https://images.pexels.com/photos/1450359/pexels-photo-1450359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <img
          className=" row-span-2 object-cover h-full w-full p-2"
          src="https://images.pexels.com/photos/3601463/pexels-photo-3601463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <img
          className="row-span-3 object-cover h-full w-full p-2"
          src="https://images.pexels.com/photos/3155639/pexels-photo-3155639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <img
          className=" row-span-2 object-cover h-full w-full p-2"
          src="https://images.pexels.com/photos/6044984/pexels-photo-6044984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
      </div>
      {/* right side */}
      <div className=" flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">Plan Your Next Trip</h3>
        <p className="text-2xl py-6">
        “We’ve seen a notable increase in bookings in the Maldives, and one of the best secluded beach
        </p>
        <p className="pb-6">
        “With international travel still uncertain for Americans, the islands of Hawaii are a perfect setting for a shot of tropical beach,” says Marchant. 
        </p>
        <div>
          <button className="border-black mr-4 hover:shadow-xl transition duration-75">
            Learn More
          </button>
          <button className=" bg-black text-white hover:shadow-xl transition duration-75">Book Your Trip</button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
