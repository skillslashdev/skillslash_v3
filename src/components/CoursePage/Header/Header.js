import React from "react";
import Image from "next/image";
import { AiOutlineDownload } from "react-icons/ai";
import { FaStar } from "react-icons/fa";

const Header = ({ desc, deskTopPara, spanTitleText, title }) => {
  return (
    <div className="bg-[#F8F6FF] px-28 pt-28 pb-10 grid grid-cols-[55%,44%] gap-4 relative">
      <div className="flex flex-col gap-4 ">
        <div className="flex flex-col gap-2">
          <p className="bg-[#f18350] w-max px-4 py-1 rounded text-white font-bold">
            {deskTopPara}
          </p>
          <p className="font-medium">{spanTitleText}</p>
        </div>
        <h1 className="text-4xl font-bold">{title}</h1>

        <p className="flex gap-2">
          Powered by
          <Image
            src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/microsoft-icon-logo-black.png"
            height={20}
            width={110}
            priority
            alt="Microsoft-certification"
          />
        </p>

        <p>{desc}</p>
        <h3 className="text-2xl font-bold text-[#f18350]">
          4 Million+ learners
        </h3>
        <div>
          <button onClick={() => popupShow(true, false)} className="px-5 py-2">
            <AiOutlineDownload />
            Program Handbook
          </button>
        </div>
      </div>
      <div></div>
      <div
        className="flex flex-col gap-3 rounded px-8 py-8 absolute bg-white right-28 top-28"
        style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        }}
      >
        <h3 className="tex-lg font-semibold flex flex-col">
          Professional Certificate - 10 Courses series
          <span className="text-[#646464] mb-4 font-normal">
            Earn career credential that demonstrate your experience
          </span>
        </h3>

        <hr className="w-full text-[#646464]" />
        <div className="text-lg flex items-center gap-1 font-mediums">
          4.6 <FaStar className="text-[#0056d2]" />{" "}
          <span className="text-[#646464] text-sm">(67,368 reviews)</span>
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-semibold"> Beginner Level</span>
          <p className="text-[#646464]">No previous experience necessary</p>
        </div>
        <h4 className="text-2xl font-semibold">5 months at 10 hours a week</h4>
        <div className="flex flex-col">
          <span className="text-lg font-semibold"> Flexible Schedule</span>
          <p className="text-[#646464]">Learn at your own peace</p>
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-semibold"> Earn Degree Credit</span>
          <p className="text-[#646464]">Learn More</p>
        </div>
        <hr className="w-full text-[#646464]" />
        <span className="text-[#0056d2] mt-2 font-medium">
          View all courses
        </span>
      </div>
      <div className="absolute bottom-[-50px] left-28 flex gap-3 ">
        <span className="border-[#f18350] text-[#f18350] border-2 px-5 py-1 w-max rounded">
          Features
        </span>
        <span className="border-[#646464] border-[1px] px-5 py-1 w-max rounded">
          Modules
        </span>
        <span className="border-[#646464] border-[1px] px-5 py-1 w-max rounded">
          Project
        </span>
        <span className="border-[#646464] border-[1px] px-5 py-1 w-max rounded">
          Certification
        </span>
        <span className="border-[#646464] border-[1px] px-5 py-1 w-max rounded">
          Tool
        </span>
        <span className="border-[#646464] border-[1px] px-5 py-1 w-max rounded">
          Faq
        </span>
      </div>
    </div>
  );
};

export default Header;
