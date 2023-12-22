import React, { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import TabData from "./TabData";
import styles from "./Tabs.module.css";

import { MdOutlineLocalFireDepartment, MdDataSaverOff } from "react-icons/md";
import { BsLaptop } from "react-icons/bs";

import { BsCheck } from "react-icons/bs";
const Tabs = () => {
  const [viewAll, setViewAll] = useState(true);
  const [oneYear, setOneYear] = useState(false);
  const [nonTech, setNonTech] = useState(false);
  const [manager, setManager] = useState(false);
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;

    if (width < 801) {
      setMobile(true);
    }
    if (width > 801) {
      setMobile(false);
    }
  });

  return (
    <div className={styles.wrapper}>
      <h2 className="text-4xl font-medium">Explore Our Courses</h2>
      <div className={styles.MenuTabs}>
        <div className={styles.leftPanel}>
          <>
            {mobile ? (
              <span
                key={TabData[0].id}
                id="0"
                onClick={() => {
                  setViewAll(true);
                  setOneYear(false);
                  setManager(false);
                  setNonTech(false);
                }}
                className={viewAll ? styles.spanActive : styles.span}
              >
                <span>
                  <MdOutlineLocalFireDepartment
                    className={
                      viewAll ? styles.ActiveSpanIcon : styles.spanIcon
                    }
                  />
                  {TabData[0].title}
                </span>

                <IoIosArrowDown />
              </span>
            ) : (
              <span
                key={TabData[0].id}
                id="0"
                onClick={() => {
                  setViewAll(true);
                  setOneYear(false);
                  setManager(false);
                  setNonTech(false);
                }}
                className={viewAll ? styles.spanActive : styles.span}
              >
                <span>All</span>
              </span>
            )}

            {viewAll ? (
              <div className={styles.gridWrap}>
                <div className={styles.gridBox}>
                  <div className={styles.gridImg}>
                    <Image
                      src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/advance-data-science-ai-tab-header.webp"
                      alt="data science course"
                      width={406}
                      height={253}
                      className={styles.gridBanner}
                      loading="lazy"
                    />
                  </div>

                  <div className={styles.gridInnerBox}>
                    <h4>Advanced Data Science and AI Course</h4>
                    <div className={styles.lines}></div>
                    <span>
                      <BsCheck className={styles.gridIcon} />9 Months
                    </span>
                    <span>
                      <BsCheck className={styles.gridIcon} />
                      15+ Industry Projects
                    </span>
                    <span>
                      <BsCheck className={styles.gridIcon} />
                      EMI @INR 5801/month
                    </span>
                    <div className={styles.line}></div>
                    <Link href="/advanced-data-science-and-ai-course-with-real-work-experience">
                      <button className={styles.gridBtn}>View Program</button>
                    </Link>
                  </div>
                </div>

                <div className={styles.gridBox}>
                  <div className={styles.gridImg}>
                    <Image
                      src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/Business-analytics-course-tab-header.webp"
                      alt="business analytics course"
                      width={406}
                      height={199}
                      className={styles.gridBanner}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.gridInnerBox}>
                    <h4>Business Analytics Program For Professionals</h4>
                    <div className={styles.lines}></div>
                    <span>
                      <BsCheck className={styles.gridIcon} />8 Months
                    </span>
                    <span>
                      <BsCheck className={styles.gridIcon} />
                      10+ Industry Projects
                    </span>
                    <span>
                      <BsCheck className={styles.gridIcon} />
                      EMI @INR 5408/month
                    </span>
                    <div className={styles.line}></div>
                    <Link href="/business-analytics-course">
                      <button className={styles.gridBtn}>View Program</button>
                    </Link>
                  </div>
                </div>

                <div className={styles.gridBox}>
                  <div className={styles.gridImg}>
                    <Image
                      src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/fCourse.webp"
                      alt="full stack course"
                      width={406}
                      height={253}
                      className={styles.gridBanner}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.gridInnerBox}>
                    <h4>Full Stack Developer Course With Certification</h4>
                    <div className={styles.lines}></div>
                    <span>
                      <BsCheck className={styles.gridIcon} />
                      10 Months
                    </span>
                    <span>
                      <BsCheck className={styles.gridIcon} />
                      5+ Industry Projects
                    </span>
                    <span>
                      <BsCheck className={styles.gridIcon} />
                      EMI @INR 7916/month
                    </span>
                    <div className={styles.line}></div>
                    <Link href="/full-stack-developer-course">
                      <button className={styles.gridBtn}>View Program</button>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            {mobile ? (
              <span
                key={TabData[1].id}
                id="1"
                onClick={() => {
                  setOneYear(true);
                  setViewAll(false);
                  setManager(false);
                  setNonTech(false);
                }}
                className={oneYear ? styles.spanActive : styles.span}
              >
                <span>
                  <MdOutlineLocalFireDepartment
                    className={
                      oneYear ? styles.ActiveSpanIcon : styles.spanIcon
                    }
                  />
                  {TabData[1].title}
                </span>
                <IoIosArrowDown />
              </span>
            ) : (
              <span
                key={TabData[1].id}
                id="1"
                onClick={() => {
                  setOneYear(true);
                  setViewAll(false);
                  setManager(false);
                  setNonTech(false);
                }}
                className={oneYear ? styles.spanActive : styles.span}
              >
                <span>Data Science and AI</span>
              </span>
            )}
            {oneYear ? (
              <div className={styles.gridWrap}>
                <div className={styles.gridBox}>
                  <div className={styles.gridImg}>
                    <Image
                      src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/advance-data-science-ai-tab-header.webp"
                      alt="data science course"
                      width={406}
                      height={253}
                      className={styles.gridBanner}
                      loading="lazy"
                    />
                  </div>

                  <div className={styles.gridInnerBox}>
                    <h4>Advanced Data Science and AI Course</h4>
                    <div className={styles.lines}></div>
                    <span>
                      <BsCheck className={styles.gridIcon} />9 Months
                    </span>
                    <span>
                      <BsCheck className={styles.gridIcon} />
                      15+ Industry Projects
                    </span>
                    <span>
                      <BsCheck className={styles.gridIcon} />
                      EMI @INR 5801/month
                    </span>
                    <div className={styles.line}></div>
                    <Link href="/advanced-data-science-and-ai-course-with-real-work-experience">
                      <button className={styles.gridBtn}>View Program</button>
                    </Link>
                  </div>
                </div>

                <div className={styles.gridBox}>
                  <div className={styles.gridImg}>
                    <Image
                      src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/Business-analytics-course-tab-header.webp"
                      alt="business analytics course"
                      width={406}
                      height={199}
                      className={styles.gridBanner}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.gridInnerBox}>
                    <h4>Business Analytics Program For Professionals</h4>
                    <div className={styles.lines}></div>
                    <span>
                      <BsCheck className={styles.gridIcon} />8 Months
                    </span>
                    <span>
                      <BsCheck className={styles.gridIcon} />
                      10+ Industry Projects
                    </span>
                    <span>
                      <BsCheck className={styles.gridIcon} />
                      EMI @INR 5408/month
                    </span>
                    <div className={styles.line}></div>
                    <Link href="/business-analytics-course">
                      <button className={styles.gridBtn}>View Program</button>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            {mobile ? (
              <span
                key={TabData[2].id}
                id="2"
                onClick={() => {
                  setOneYear(false);
                  setViewAll(false);
                  setManager(false);
                  setNonTech(true);
                }}
                className={nonTech ? styles.spanActive : styles.span}
              >
                <span>
                  <BsLaptop
                    className={
                      nonTech ? styles.ActiveSpanIcon : styles.spanIcon
                    }
                  />
                  {TabData[2].title}
                </span>
                <IoIosArrowDown />
              </span>
            ) : (
              <span
                key={TabData[2].id}
                id="2"
                onClick={() => {
                  setOneYear(false);
                  setViewAll(false);
                  setManager(false);
                  setNonTech(true);
                }}
                className={nonTech ? styles.spanActive : styles.span}
              >
                <span>Software Development</span>
              </span>
            )}

            {nonTech ? (
              <div className={styles.gridWrap}>
                <div className={styles.gridBox}>
                  <div className={styles.gridImg}>
                    <Image
                      src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/fCourse.webp"
                      alt="full stack course"
                      width={406}
                      height={253}
                      className={styles.gridBanner}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.gridInnerBox}>
                    <h4>Full Stack Developer Course With Certification</h4>
                    <div className={styles.lines}></div>
                    <span>
                      <BsCheck className={styles.gridIcon} />
                      10 Months
                    </span>
                    <span>
                      <BsCheck className={styles.gridIcon} />
                      5+ Industry Projects
                    </span>
                    <span>
                      <BsCheck className={styles.gridIcon} />
                      EMI @INR 7916/month
                    </span>
                    <div className={styles.line}></div>
                    <Link href="/full-stack-developer-course">
                      <button className={styles.gridBtn}>View Program</button>
                    </Link>
                  </div>
                </div>

                <div className={styles.gridBox}>
                  <div className={styles.gridImg}>
                    <Image
                      src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/fsCourse.webp"
                      alt="web development course"
                      width={406}
                      height={199}
                      className={styles.gridBanner}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.gridInnerBox}>
                    <h4>Web Development Course With Certification</h4>
                    <div className={styles.lines}></div>
                    <span>
                      <BsCheck className={styles.gridIcon} />7 Months
                    </span>
                    <span>
                      <BsCheck className={styles.gridIcon} />
                      15+ Industry Projects
                    </span>
                    <span>
                      <BsCheck className={styles.gridIcon} />
                      EMI @INR 3,500/month
                    </span>
                    <div className={styles.line}></div>
                    <Link href="/web-development-course">
                      <button className={styles.gridBtn}>View Program</button>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </>
        </div>
        {mobile ? (
          ""
        ) : (
          <div className={styles.middlePanel}>
            {viewAll ? (
              <div className={styles.gridWrap}>
                <div className={styles.gridBox}>
                  <div className={styles.gridImg}>
                    <Image
                      src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/Homepage/Advance-data-course.png"
                      alt="data science course"
                      width={232}
                      height={250}
                      className={styles.gridBanner}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.gridInnerBox}>
                    <h4 className="mb-1">
                      Advanced Data Science and AI Course
                    </h4>
                    <div>
                      <span>
                        <BsCheck className={styles.gridIcon} /> 350+ hrs
                        self-paced videos
                      </span>
                      <span>
                        <BsCheck className={styles.gridIcon} />
                        Quizzes and assignments
                      </span>
                      <span>
                        <BsCheck className={styles.gridIcon} />
                        1:1 Doubt clearing session
                      </span>
                      <span>
                        <BsCheck className={styles.gridIcon} />2 Live
                        instructor-led projects
                      </span>
                      <span>
                        <BsCheck className={styles.gridIcon} />2 Live Triple
                        Certification
                      </span>
                    </div>
                    <div className="flex gap-3 mt-2">
                      <button className="border-[1px] border-[#646464] border-solid bg-transparent px-[9px] py-1 text-[#646464] font-normal text-xs">
                        View Details
                      </button>
                      <Link href="/advanced-data-science-and-ai-course-with-real-work-experience">
                        <button className={styles.gridBtn}>
                          Start Learning
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className={styles.gridBox}>
                  <div className={styles.gridImg}>
                    <Image
                      src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/Homepage/Advance-data-course.png"
                      alt="business analytics course"
                      width={406}
                      height={199}
                      className={styles.gridBanner}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.gridInnerBox}>
                    <h4>Business Analytics Program For Professionals</h4>
                    <div>
                      <span>
                        <BsCheck className={styles.gridIcon} /> 350+ hrs
                        self-paced videos
                      </span>
                      <span>
                        <BsCheck className={styles.gridIcon} />
                        Quizzes and assignments
                      </span>
                      <span>
                        <BsCheck className={styles.gridIcon} />
                        1:1 Doubt clearing session
                      </span>
                      <span>
                        <BsCheck className={styles.gridIcon} />2 Live
                        instructor-led projects
                      </span>
                      <span>
                        <BsCheck className={styles.gridIcon} />2 Live Triple
                        Certification
                      </span>
                    </div>

                    <div className="flex gap-3">
                      <button className="border-2 border-[#f18350] border-solid bg-transparent px-1 py-1 text-[#f18350] font-normal text-sm">
                        View Details
                      </button>
                      <Link href="/business-analytics-course">
                        <button className={styles.gridBtn}>
                          Start Learning
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className={styles.gridBox}>
                  <div className={styles.gridImg}>
                    <Image
                      src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/fCourse.webp"
                      alt="full stack course"
                      width={406}
                      height={253}
                      className={styles.gridBanner}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.gridInnerBox}>
                    <h4>Full Stack Developer Course With Certification</h4>
                    <div className={styles.lines}></div>
                    <span>
                      <BsCheck className={styles.gridIcon} />
                      10 Months
                    </span>
                    <span>
                      <BsCheck className={styles.gridIcon} />
                      5+ Industry Projects
                    </span>
                    <span>
                      <BsCheck className={styles.gridIcon} />
                      EMI @INR 7916/month
                    </span>
                    <div className={styles.line}></div>
                    <Link href="/full-stack-developer-course">
                      <button className={styles.gridBtn}>View Program</button>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            {oneYear ? (
              <div className={styles.gridWrap}>
                <div className={styles.gridBox}>
                  <div className={styles.gridImg}>
                    <Image
                      src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/advance-data-science-ai-tab-header.webp"
                      alt="data science course"
                      width={406}
                      height={253}
                      className={styles.gridBanner}
                      loading="lazy"
                    />
                  </div>

                  <div className={styles.gridInnerBox}>
                    <h4>Advanced Data Science and AI Course</h4>
                    <div className={styles.lines}></div>
                    <span>
                      <BsCheck className={styles.gridIcon} /> 350+ hrs
                      self-paced videos
                    </span>
                    <span>
                      <BsCheck className={styles.gridIcon} />
                      Quizzes and assignments
                    </span>
                    <span>
                      <BsCheck className={styles.gridIcon} />
                      1:1 Doubt clearing session
                    </span>
                    <span>
                      <BsCheck className={styles.gridIcon} />2 Live
                      instructor-led projects
                    </span>
                    <span>
                      <BsCheck className={styles.gridIcon} />2 Live Triple
                      Certification
                    </span>
                    <div className={styles.line}></div>
                    <button className={styles.gridBtn}>View Details</button>
                    <Link href="/advanced-data-science-and-ai-course-with-real-work-experience">
                      <button className={styles.gridBtn}>Start Learning</button>
                    </Link>
                  </div>
                </div>

                <div className={styles.gridBox}>
                  <div className={styles.gridImg}>
                    <Image
                      src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/Business-analytics-course-tab-header.webp"
                      alt="business analytics course"
                      width={406}
                      height={199}
                      className={styles.gridBanner}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.gridInnerBox}>
                    <h4>Business Analytics Program For Professionals</h4>
                    <div className={styles.lines}></div>
                    <span>
                      <BsCheck className={styles.gridIcon} />8 Months
                    </span>
                    <span>
                      <BsCheck className={styles.gridIcon} />
                      10+ Industry Projects
                    </span>
                    <span>
                      <BsCheck className={styles.gridIcon} />
                      EMI @INR 5408/month
                    </span>
                    <div className={styles.line}></div>
                    <Link href="/business-analytics-course">
                      <button className={styles.gridBtn}>View Program</button>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            {nonTech ? (
              <div className={styles.gridWrap}>
                <div className={styles.gridBox}>
                  <div className={styles.gridImg}>
                    <Image
                      src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/fCourse.webp"
                      alt="full stack course"
                      width={406}
                      height={253}
                      className={styles.gridBanner}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.gridInnerBox}>
                    <h4>Full Stack Developer Course With Certification</h4>
                    <div className={styles.lines}></div>
                    <span>
                      <BsCheck className={styles.gridIcon} />
                      10 Months
                    </span>
                    <span>
                      <BsCheck className={styles.gridIcon} />
                      5+ Industry Projects
                    </span>
                    <span>
                      <BsCheck className={styles.gridIcon} />
                      EMI @INR 7916/month
                    </span>
                    <div className={styles.line}></div>
                    <Link href="/full-stack-developer-course">
                      <button className={styles.gridBtn}>View Program</button>
                    </Link>
                  </div>
                </div>

                <div className={styles.gridBox}>
                  <div className={styles.gridImg}>
                    <Image
                      src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/fsCourse.webp"
                      alt="web development course"
                      width={406}
                      height={199}
                      className={styles.gridBanner}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.gridInnerBox}>
                    <h4>Web Development Course With Certification</h4>
                    <div className={styles.lines}></div>
                    <span>
                      <BsCheck className={styles.gridIcon} />7 Months
                    </span>
                    <span>
                      <BsCheck className={styles.gridIcon} />
                      15+ Industry Projects
                    </span>
                    <span>
                      <BsCheck className={styles.gridIcon} />
                      EMI @INR 3,500/month
                    </span>
                    <div className={styles.line}></div>
                    <Link href="/web-development-course">
                      <button className={styles.gridBtn}>View Program</button>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            {manager ? (
              <div className={styles.gridWrap}>
                <div className={styles.gridBox}>
                  <div className={styles.gridImg}>
                    <Image
                      src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/fsCourse.webp"
                      alt="web development course"
                      width={406}
                      height={199}
                      className={styles.gridBanner}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.gridInnerBox}>
                    <h4>Web Development Course With Certification</h4>
                    <div className={styles.lines}></div>
                    <span>
                      <BsCheck className={styles.gridIcon} />
                      10 Months
                    </span>
                    <span>
                      <BsCheck className={styles.gridIcon} />
                      5+ Industry Projects
                    </span>
                    <span>
                      <BsCheck className={styles.gridIcon} />
                      EMI @INR 4916/month
                    </span>
                    <div className={styles.line}></div>
                    <Link href="/full-stack-developer-course">
                      <button className={styles.gridBtn}>View Program</button>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
