import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen  object-cover"
        src="https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
      <div className="absolute top-0 h-full w-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100] m-auto absolute p-4">
          <p>All Inclusive</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">Private Beaches & Getaways</h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
          The siren call of a private beach has always been all but irresistible, but this year it’s stronger than ever. While it’s still too soon to jet off to paradise right away, many travelers are already 
          </p>
          <button className=" bg-white text-black"> Reserve Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
