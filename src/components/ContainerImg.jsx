import React, { useState } from "react";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { HiOutlineMinusSm } from "react-icons/hi";

const ImageSliderApp = () => {
  const slider = [
    {
      url: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Lobster",
    },
    {
      url: "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Sushi",
    },
    {
      url: "https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Pasta",
    },
    {
      url: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Salomn",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const ifFirstSlide = currentIndex === 0;
    const newIndex = ifFirstSlide ? slider.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slider.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className=" max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
      <div
        className=" w-full h-full rounded-lg bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${slider[currentIndex].url})` }}
      ></div>
      {/* Left Arrow */}
      <div className=" absolute top-[50%] -translate-x-0 traslete-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 cursor-pointer">
        <HiArrowNarrowLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className=" absolute top-[50%] -translate-x-0 traslete-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 cursor-pointer">
        <HiArrowNarrowRight onClick={nextSlide} size={30} />
      </div>
      <div className=" flex  top-4 justify-center py-2">
        {slider.map((slide, slideindex) => (
          <div className=" text-2xl cursor-pointer" key={slideindex} onClick={() => goToSlide(slideindex)}>
            <HiOutlineMinusSm />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSliderApp;
