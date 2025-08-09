import React, { useState } from "react";
import Star from "../../components/Star/Star";
import { FaPlus } from "react-icons/fa";
const Portoflio = () => {
  const [openImage, setopenImage] = useState(false);
  const [showImage, setshowImage] = useState(null);
  const images = Object.values(
    import.meta.glob("../../assets/images/portimages/*.jpg", {
      as: "url",
      eager: true,
    })
  );
  const imagesId = images.map((img) => {
    return { id: crypto.randomUUID, src: img };
  });
  return (
    <>
      <div className="flex py-5 gap-5 flex-col justify-center items-center">
        <h1 className={`uppercase text-4xl `}>portfolio component</h1>
        <Star bgColor={"[#2C3E50]"} color={"[#2C3E50]"} />
        <div >
        <div className="grid grid-cols-3 gap-4 justify-center max-w-5xl">
  {imagesId.map((item) => (
    <div key={item.id} className="col-span-1 gy-2">
      <div
        className="relative group cursor-pointer"
        onClick={() => {
          setopenImage(true);
          setshowImage(item.src);
        }}
      >
        <img src={item.src} className="w-full" alt="" />
        <div
          className="absolute inset-0 hidden group-hover:flex group-hover:bg-[#2C3E50] opacity-60 justify-center items-center text-white text-2xl"
        >
          <FaPlus />
        </div>
      </div>
    </div>
  ))}
</div>

        </div>
      </div>
      {openImage && (
        <div
          className={`flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 z-50 bg-[#2C3E50]`}
          onClick={() => {
            setopenImage(false);
          }}
        >
          <img
            src={showImage}
            alt=""
            className={`w-[500px]`}
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
        </div>
      )}
    </>
  );
};

export default Portoflio;
