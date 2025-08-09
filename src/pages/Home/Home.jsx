import React from "react";
import image from "./../../assets/images/stylish-spectacles-guy-3d-avatar-character-illustrations-png.webp";
import Star from "../../components/Star/Star";
const Home = () => {
  return (
    <>
      <div className="flex flex-col bg-[#1ABC9C] min-h-[70vh] justify-center items-center text-white p-5 gap-2">
        <img src={image} alt="person image" className="w-50" />
        <h1 className="text-center uppercase text-4xl">start Framework</h1>
        <Star bgColor={"white"} color={"white"} />
        <p className="text-center text-xl">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </>
  );
};

export default Home;
