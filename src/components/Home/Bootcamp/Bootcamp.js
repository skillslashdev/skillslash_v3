import React from "react";
import { BsCheck, BsX } from "react-icons/bs";

const Bootcamp = () => {
  return (
    <div className="flex flex-col px-28 py-10 bg-[#F6F6F6]">
      <h2 className="text-4xl font-bold">Skillslash Bootcamp</h2>
      <div
        className="mt-[20px] w-full"
        style={{
          boxShadow:
            "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
        }}
      >
        <table className="table-fixed border-collapse  w-[100%]">
          <colgroup>
            <col style={{ width: "128px" }} />
            <col style={{ width: "90px" }} />
            <col style={{ width: "90px" }} />
            <col style={{ width: "90px" }} />
          </colgroup>
          <thead className="border-[#c5c5c5] border-b-[1px]">
            <tr className=" text-[#f18350] border-[#c5c5c5] border-1">
              <th className="border-r-[1px] border-[#F18350] py-2 text-left pl-10">
                Features
              </th>
              <th className="border-r-[1px] border-[#F18350] py-2 border-t-[8px]">
                Skillslash-Hybrid
              </th>
              <th className="border-r-[1px] border-[#8b8b8b] py-2">
                Others-Recorded
              </th>
              <th className="border-r-[1px] py-2">Others-Live</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-[#c5c5c5] border-b-[1px]">
              <td className="border-r-[1px] border-[#F18350] p-3 pl-10 pr-2">
                Lesson
              </td>
              <td className="border-r-[1px] border-[#F18350] p-2 text-center">
                Recorded
              </td>
              <td className="border-r-[1px] border-[#8b8b8b] p-2 text-center">
                Recorded
              </td>
              <td className=" p-2 text-center">Live</td>
            </tr>
            <tr className="border-[#c5c5c5] border-b-[1px]">
              <td className="border-r-[1px] border-[#F18350] p-2 pl-10">
                In-depth Lesson
              </td>
              <td className="border-r-[1px] border-[#F18350] p-2 text-center">
                <p className="w-full text-center flex justify-center">
                  <BsCheck className="text-4xl text-[#4BAE4F]" />
                </p>
              </td>
              <td className="border-r-[1px] border-[#8b8b8b] p-2">
                <p className="w-full text-center flex justify-center">
                  <BsX className="text-4xl  text-[#f44436]" />
                </p>
              </td>
              <td className="p-2 ">
                <p className="w-full text-center flex justify-center">
                  <BsCheck className="text-4xl text-[#4BAE4F]" />
                </p>
              </td>
            </tr>
            <tr className="border-[#c5c5c5] border-b-[1px]">
              <td className="border-r-[1px] border-[#F18350] p-2 pl-10">
                Live Doubt Clearing
              </td>
              <td className="border-r-[1px] border-[#F18350] p-2">
                <p className="w-full text-center flex justify-center">
                  <BsCheck className="text-4xl text-[#4BAE4F]" />
                </p>
              </td>
              <td className="border-r-[1px] border-[#8b8b8b] p-2">
                <p className="w-full text-center flex justify-center">
                  <BsX className="text-4xl  text-[#f44436]" />
                </p>
              </td>
              <td className=" p-2">
                <p className="w-full text-center flex justify-center">
                  <BsCheck className="text-4xl text-[#4BAE4F]" />
                </p>
              </td>
            </tr>
            <tr className="border-[#c5c5c5] border-b-[1px]">
              <td className="border-r-[1px] border-[#F18350] p-2 pl-10">
                Live Projects
              </td>
              <td className="border-r-[1px] border-[#F18350] p-2">
                <p className="w-full text-center flex justify-center">
                  <BsCheck className="text-4xl text-[#4BAE4F]" />
                </p>
              </td>
              <td className="border-r-[1px] border-[#8b8b8b] p-2">
                <p className="w-full text-center flex justify-center">
                  <BsX className="text-4xl  text-[#f44436]" />
                </p>
              </td>
              <td className=" p-2">
                <p className="w-full text-center flex justify-center">
                  <BsCheck className="text-4xl text-[#4BAE4F]" />
                </p>
              </td>
            </tr>
            <tr className="border-[#c5c5c5] border-b-[1px]">
              <td className="border-r-[1px] border-[#F18350] p-2 pl-10 pr-5">
                Course Completion Certificate
              </td>
              <td className="border-r-[1px] border-[#F18350] p-2">
                <p className="w-full text-center flex justify-center">
                  <BsCheck className="text-4xl text-[#4BAE4F]" />
                </p>
              </td>
              <td className="border-r-[1px] border-[#8b8b8b] p-2">
                <p className="w-full text-center flex justify-center">
                  <BsCheck className="text-4xl text-[#4BAE4F]" />
                </p>
              </td>
              <td className=" p-2">
                <p className="w-full text-center flex justify-center">
                  <BsCheck className="text-4xl text-[#4BAE4F]" />
                </p>
              </td>
            </tr>
            <tr className="border-[#c5c5c5] border-b-[1px]">
              <td className="border-r-[1px] border-[#F18350] p-2 pl-10">
                Project Experience Certificate
              </td>
              <td className="border-r-[1px] border-[#F18350] p-2">
                <p className="w-full text-center flex justify-center">
                  <BsCheck className="text-4xl text-[#4BAE4F]" />
                </p>
              </td>
              <td className="border-r-[1px] border-[#8b8b8b] p-2">
                <p className="w-full text-center flex justify-center">
                  <BsX className="text-4xl  text-[#f44436]" />
                </p>
              </td>
              <td className=" p-2">
                <p className="w-full text-center flex justify-center">
                  <BsX className="text-4xl  text-[#f44436]" />
                </p>
              </td>
            </tr>
            <tr className="border-[#c5c5c5] border-b-[1px]">
              <td className="border-r-[1px] border-[#F18350] p-2 pl-10">
                Internship Certificate
              </td>
              <td className="border-r-[1px] border-[#F18350] p-2">
                <p className="w-full text-center flex justify-center">
                  <BsCheck className="text-4xl text-[#4BAE4F]" />
                </p>
              </td>
              <td className="border-r-[1px] border-[#8b8b8b] p-2">
                <p className="w-full text-center flex justify-center">
                  <BsX className="text-4xl  text-[#f44436]" />
                </p>
              </td>
              <td className=" p-2">
                <p className="w-full text-center flex justify-center">
                  <BsX className="text-4xl  text-[#f44436]" />
                </p>
              </td>
            </tr>
            <tr className="border-[#c5c5c5] border-b-[1px]">
              <td className="border-r-[1px] border-[#F18350] p-2 pl-10">
                Final Year Project Assistance
              </td>
              <td className="border-r-[1px] border-[#F18350] p-2">
                <p className="w-full text-center flex justify-center">
                  <BsCheck className="text-4xl text-[#4BAE4F]" />
                </p>
              </td>
              <td className="border-r-[1px] border-[#8b8b8b] p-2">
                <p className="w-full text-center flex justify-center">
                  <BsX className="text-4xl  text-[#f44436]" />
                </p>
              </td>
              <td className=" p-2">
                <p className="w-full text-center flex justify-center">
                  <BsX className="text-4xl  text-[#f44436]" />
                </p>
              </td>
            </tr>
            <tr className="border-[#c5c5c5] border-b-[1px]">
              <td className="border-r-[1px] border-[#F18350] p-2 pl-10">
                Resume Building Session
              </td>
              <td className="border-r-[1px] border-[#F18350] p-2">
                <p className="w-full text-center flex justify-center">
                  <BsCheck className="text-4xl text-[#4BAE4F]" />
                </p>
              </td>
              <td className="border-r-[1px] border-[#8b8b8b] p-2">
                <p className="w-full text-center flex justify-center">
                  <BsX className="text-4xl  text-[#f44436]" />
                </p>
              </td>
              <td className=" p-2">
                <p className="w-full text-center flex justify-center">
                  <BsCheck className="text-4xl text-[#4BAE4F]" />
                </p>
              </td>
            </tr>
            <tr className="border-[#c5c5c5] border-b-[1px]">
              <td className="border-r-[1px] border-[#F18350] p-2 pl-10">
                Average Pricing
              </td>
              <td className="border-r-[1px] border-[#F18350] p-2 text-center">
                7,000
              </td>
              <td className="border-r-[1px] border-[#8b8b8b] p-2 text-center">
                6,500
              </td>
              <td className=" p-2 text-center">80,000</td>
            </tr>
            {/* ... (repeat the structure for other rows) */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bootcamp;
