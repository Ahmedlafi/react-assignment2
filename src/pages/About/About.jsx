import React from "react";
import Star from "../../components/Star/Star";

const About = () => {
  return (
    <div className="flex flex-col items-center gap-4 justify-center min-h-[70vh] bg-[#1ABC9C] text-white">
      <h1 className="uppercase text-4xl">about component</h1>
      <Star bgColor={"white"} color={"white"} />

      <div className="grid grid-cols-2 gap-4 max-w-6xl">
        <div className="col-span-1">
          <p className="text-lg">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
        <div className="col-span-1">
          <p className="text-lg">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
