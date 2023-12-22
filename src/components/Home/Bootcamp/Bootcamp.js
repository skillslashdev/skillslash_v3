import React from "react";
import { BsCheck, BsX } from "react-icons/bs";

const Bootcamp = () => {
  return (
    <div className="flex flex-col px-28 py-10">
      <h2 className="text-4xl font-bold">Skillslash Bootcamp</h2>
      <div className="mt-[20px] w-full">
        <table className="table-fixed border-collapse  w-[100%]">
          <colgroup>
            <col style={{ width: "128px" }} />
            <col style={{ width: "90px" }} />
            <col style={{ width: "90px" }} />
            <col style={{ width: "90px" }} />
          </colgroup>
          <thead>
            <tr className="bg-[#f18350] text-white">
              <th className="border-r-[1px] border-[#F18350] py-2"></th>
              <th className="border-r-[1px] border-[#F18350] py-2">
                Skillslash-Hybrid
              </th>
              <th className="border-r-[1px] border-[#F18350] py-2">
                Others-Recorded
              </th>
              <th className="border-r-[1px] border-[#F18350] py-2">
                Others-Live
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-r-[1px] border-[#F18350] p-3 pl-10 pr-2">
                Lesson
              </td>
              <td className="border-r-[1px] border-[#F18350] p-2 text-center">
                Recorded
              </td>
              <td className="border-r-[1px] border-[#F18350] p-2 text-center">
                Recorded
              </td>
              <td className=" p-2 text-center">Live</td>
            </tr>
            <tr className="bg-[#EFEFEF]">
              <td className="border-r-[1px] border-[#F18350] p-2 pl-10">
                In-depth Lesson
              </td>
              <td className="border-r-[1px] border-[#F18350] p-2 text-center">
                <p className="w-full text-center flex justify-center">
                  <BsCheck className="text-4xl text-[#4BAE4F]" />
                </p>
              </td>
              <td className="border-r-[1px] border-[#F18350] p-2">
                <p className="w-full text-center flex justify-center">
                  <BsX className="text-4xl  text-[#f44436]" />
                </p>
              </td>
              <td className="p-2">
                <p className="w-full text-center flex justify-center">
                  <BsCheck className="text-4xl text-[#4BAE4F]" />
                </p>
              </td>
            </tr>
            <tr>
              <td className="border-r-[1px] border-[#F18350] p-2 pl-10">
                Live Doubt Clearing
              </td>
              <td className="border-r-[1px] border-[#F18350] p-2">
                <p className="w-full text-center flex justify-center">
                  <BsCheck className="text-4xl text-[#4BAE4F]" />
                </p>
              </td>
              <td className="border-r-[1px] border-[#F18350] p-2">
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
            <tr className="bg-[#EFEFEF]">
              <td className="border-r-[1px] border-[#F18350] p-2 pl-10">
                Live Projects
              </td>
              <td className="border-r-[1px] border-[#F18350] p-2">
                <p className="w-full text-center flex justify-center">
                  <BsCheck className="text-4xl text-[#4BAE4F]" />
                </p>
              </td>
              <td className="border-r-[1px] border-[#F18350] p-2">
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
            <tr>
              <td className="border-r-[1px] border-[#F18350] p-2 pl-10 pr-5">
                Course Completion Certificate
              </td>
              <td className="border-r-[1px] border-[#F18350] p-2">
                <p className="w-full text-center flex justify-center">
                  <BsCheck className="text-4xl text-[#4BAE4F]" />
                </p>
              </td>
              <td className="border-r-[1px] border-[#F18350] p-2">
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
            <tr className="bg-[#EFEFEF]">
              <td className="border-r-[1px] border-[#F18350] p-2 pl-10">
                Project Experience Certificate
              </td>
              <td className="border-r-[1px] border-[#F18350] p-2">
                <p className="w-full text-center flex justify-center">
                  <BsCheck className="text-4xl text-[#4BAE4F]" />
                </p>
              </td>
              <td className="border-r-[1px] border-[#F18350] p-2">
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
            <tr>
              <td className="border-r-[1px] border-[#F18350] p-2 pl-10">
                Internship Certificate
              </td>
              <td className="border-r-[1px] border-[#F18350] p-2">
                <p className="w-full text-center flex justify-center">
                  <BsCheck className="text-4xl text-[#4BAE4F]" />
                </p>
              </td>
              <td className="border-r-[1px] border-[#F18350] p-2">
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
            <tr className="bg-[#EFEFEF]">
              <td className="border-r-[1px] border-[#F18350] p-2 pl-10">
                Final Year Project Assistance
              </td>
              <td className="border-r-[1px] border-[#F18350] p-2">
                <p className="w-full text-center flex justify-center">
                  <BsCheck className="text-4xl text-[#4BAE4F]" />
                </p>
              </td>
              <td className="border-r-[1px] border-[#F18350] p-2">
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
            <tr>
              <td className="border-r-[1px] border-[#F18350] p-2 pl-10">
                Resume Building Session
              </td>
              <td className="border-r-[1px] border-[#F18350] p-2">
                <p className="w-full text-center flex justify-center">
                  <BsCheck className="text-4xl text-[#4BAE4F]" />
                </p>
              </td>
              <td className="border-r-[1px] border-[#F18350] p-2">
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
            <tr className="bg-[#EFEFEF]">
              <td className="border-r-[1px] border-[#F18350] p-2 pl-10">
                Average Pricing
              </td>
              <td className="border-r-[1px] border-[#F18350] p-2 text-center">
                7,000
              </td>
              <td className="border-r-[1px] border-[#F18350] p-2 text-center">
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
