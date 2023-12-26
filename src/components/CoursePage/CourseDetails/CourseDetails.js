import React, { useState, useEffect } from "react";
import styles from "./CourseDetails.module.css";
import {
  IoIosArrowForward,
  IoIosArrowDown,
  IoIosPlayCircle,
} from "react-icons/io";
import { IoBook } from "react-icons/io5";
import {
  MdOutlineLocalFireDepartment,
  MdDataSaverOff,
  MdOutlinePlayCircleOutline,
} from "react-icons/md";
import { BsLaptop, BsDot } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";

const CourseDetails = ({ handleIcon }) => {
  const [popular, setPopular] = useState(true);
  const [Live, setLive] = useState(false);
  const [MockTest, setMockTest] = useState(false);
  const [LiveProject, setLiveProject] = useState(false);
  const [FinalA, setFinalA] = useState(false);
  const [TCertificate, setTCertificate] = useState(false);

  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;

    if (width < 481) {
      setMobile(true);
    }
    if (width > 481) {
      setMobile(false);
    }
  }, []);
  return (
    <div className={styles.MegaMenu}>
      <div className={styles.leftSideMenu}>
        {mobile ? (
          <>
            <span
              className={popular ? styles.activeSpan : styles.normalSpan}
              onClick={() => {
                setPopular(true);
                setLive(false);
                setMockTest(false);
                setLiveProject(false);
                setFinalA(false);
                setTCertificate(false);
              }}
            >
              <div className={styles.innerSpan}>
                <MdOutlineLocalFireDepartment className={styles.MenuIcon} />
                Popular Courses
              </div>
              <IoIosArrowDown />
            </span>
            {popular ? (
              <div className={styles.gridPanel}>
                <div
                  className={styles.mInnerBox}
                  onClick={() => handleIcon(false)}
                >
                  <a href="/advanced-data-science-and-ai-course-with-real-work-experience">
                    <div className={styles.mInnerBoxDiv}>
                      <h5>Advance Data science and AI course</h5>
                      <span>
                        <div>9 Months</div>
                        <BsDot className={styles.dot} />
                        <div>Live Classes</div>
                      </span>
                    </div>
                  </a>
                </div>
                <a href="/full-stack-developer-course">
                  <div
                    className={styles.mInnerBox}
                    onClick={() => handleIcon(false)}
                  >
                    <div className={styles.mInnerBoxDiv}>
                      <h5>Full Stack Developer course with certification</h5>
                      <span>
                        <div>10 Months</div>
                        <BsDot className={styles.dot} />
                        <div>Live Classes</div>
                      </span>
                    </div>
                  </div>
                </a>
                <a href="/business-analytics-course">
                  <div
                    className={styles.mInnerBox}
                    onClick={() => handleIcon(false)}
                  >
                    <div className={styles.mInnerBoxDiv}>
                      <h5>Business Analytics course for professionals</h5>
                      <span>
                        <div>8 Months</div>
                        <BsDot className={styles.dot} />
                        <div>Live Classes</div>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            ) : (
              ""
            )}
          </>
        ) : (
          <span
            className={popular ? styles.activeSpan : styles.normalSpan}
            onClick={() => {
              setPopular(true);
              setLive(false);
              setMockTest(false);
              setLiveProject(false);
              setFinalA(false);
              setTCertificate(false);
            }}
          >
            <div className={styles.innerSpan}>
              <MdOutlineLocalFireDepartment className={styles.MenuIcon} />
              Recorded Sessions
            </div>
            <IoIosArrowForward />
          </span>
        )}
        {mobile ? (
          <>
            <span
              className={Live ? styles.activeSpan : styles.normalSpan}
              onClick={() => {
                setPopular(false);
                setLive(true);
                setMockTest(false);
                setLiveProject(false);
                setFinalA(false);
                setTCertificate(false);
              }}
            >
              <div className={styles.innerSpan}>
                <MdDataSaverOff className={styles.MenuIcon} />
                <div>Data science and AI</div>
              </div>
              <IoIosArrowDown />
            </span>
            {Live ? (
              <div className={styles.gridPanel}>
                <a
                  href="/advanced-data-science-and-ai-course-with-real-work-experience"
                  onClick={() => handleIcon(false)}
                >
                  <div className={styles.mInnerBox}>
                    <div className={styles.mInnerBoxDiv}>
                      <h5>Advance Data science and AI course</h5>
                      <span>
                        <div>9 Months</div>
                        <BsDot className={styles.dot} />
                        <div>Live Classes</div>
                      </span>
                    </div>
                  </div>
                </a>
                <a
                  href="/business-analytics-course"
                  onClick={() => handleIcon(false)}
                >
                  <div className={styles.mInnerBox}>
                    <div className={styles.mInnerBoxDiv}>
                      <h5>Business Analytics course for professionals</h5>
                      <span>
                        <div>8 Months</div>
                        <BsDot className={styles.dot} />
                        <div>Live Classes</div>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            ) : (
              ""
            )}
          </>
        ) : (
          <span
            className={Live ? styles.activeSpan : styles.normalSpan}
            onClick={() => {
              setPopular(false);
              setLive(true);
              setMockTest(false);
              setLiveProject(false);
              setFinalA(false);
              setTCertificate(false);
            }}
          >
            <div className={styles.innerSpan}>
              <MdDataSaverOff className={styles.MenuIcon} />
              <div>Live Doubt Clearing Session</div>
            </div>
            <IoIosArrowForward />
          </span>
        )}
        {mobile ? (
          <>
            <span
              className={McosetMockTest ? styles.activeSpan : styles.normalSpan}
              onClick={() => {
                setPopular(false);
                setLive(false);
                setMockTest(true);
                setLiveProject(false);
                setFinalA(false);
                setTCertificate(false);
              }}
            >
              <div className={styles.innerSpan}>
                <BsLaptop className={styles.MenuIcon} />
                Mock Tests and Assignment
              </div>
              <IoIosArrowDown />
            </span>
            {MockTest ? (
              <div className={styles.gridPanel}>
                <a href="/full-stack-developer-course">
                  <div
                    className={styles.mInnerBox}
                    onClick={() => handleIcon(false)}
                  >
                    <div className={styles.mInnerBoxDiv}>
                      <h5>Full Stack Developer course with certification</h5>
                      <span>
                        <div>10 Months</div>
                        <BsDot className={styles.dot} />
                        <div>Live Classes</div>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            ) : (
              ""
            )}
          </>
        ) : (
          <span
            className={MockTest ? styles.activeSpan : styles.normalSpan}
            onClick={() => {
              setPopular(false);
              setLive(false);
              setMockTest(true);
              setLiveProject(false);
              setFinalA(false);
              setTCertificate(false);
            }}
          >
            <div className={styles.innerSpan}>
              <BsLaptop className={styles.MenuIcon} />
              Mock Test Development
            </div>
            <IoIosArrowForward />
          </span>
        )}
        {mobile ? (
          <>
            <span
              className={McosetMockTest ? styles.activeSpan : styles.normalSpan}
              onClick={() => {
                setPopular(false);
                setLive(false);
                setMockTest(true);
                setLiveProject(false);
                setFinalA(false);
                setTCertificate(false);
              }}
            >
              <div className={styles.innerSpan}>
                <BsLaptop className={styles.MenuIcon} />
                Mock Tests and Assignment
              </div>
              <IoIosArrowDown />
            </span>
            {LiveProject ? (
              <div className={styles.gridPanel}>
                <a href="/full-stack-developer-course">
                  <div
                    className={styles.mInnerBox}
                    onClick={() => handleIcon(false)}
                  >
                    <div className={styles.mInnerBoxDiv}>
                      <h5>Full Stack Developer course with certification</h5>
                      <span>
                        <div>10 Months</div>
                        <BsDot className={styles.dot} />
                        <div>Live Classes</div>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            ) : (
              ""
            )}
          </>
        ) : (
          <span
            className={MockTest ? styles.activeSpan : styles.normalSpan}
            onClick={() => {
              setPopular(false);
              setLive(false);
              setMockTest(true);
              setLiveProject(false);
              setFinalA(false);
              setTCertificate(false);
            }}
          >
            <div className={styles.innerSpan}>
              <BsLaptop className={styles.MenuIcon} />
              Live Project Session
            </div>
            <IoIosArrowForward />
          </span>
        )}
        {mobile ? (
          <>
            <span
              className={MockTest ? styles.activeSpan : styles.normalSpan}
              onClick={() => {
                setPopular(false);
                setLive(false);
                setMockTest(true);
                setLiveProject(false);
                setFinalA(false);
                setTCertificate(false);
              }}
            >
              <div className={styles.innerSpan}>
                <BsLaptop className={styles.MenuIcon} />
                Mock Tests and Assignment
              </div>
              <IoIosArrowDown />
            </span>
            {FinalA ? (
              <div className={styles.gridPanel}>
                <a href="/full-stack-developer-course">
                  <div
                    className={styles.mInnerBox}
                    onClick={() => handleIcon(false)}
                  >
                    <div className={styles.mInnerBoxDiv}>
                      <h5>Full Stack Developer course with certification</h5>
                      <span>
                        <div>10 Months</div>
                        <BsDot className={styles.dot} />
                        <div>Final Assessment</div>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            ) : (
              ""
            )}
          </>
        ) : (
          <span
            className={MockTest ? styles.activeSpan : styles.normalSpan}
            onClick={() => {
              setPopular(false);
              setLive(false);
              setMockTest(true);
              setLiveProject(false);
              setFinalA(false);
              setTCertificate(false);
            }}
          >
            <div className={styles.innerSpan}>
              <BsLaptop className={styles.MenuIcon} />
              Final Assessment
            </div>
            <IoIosArrowForward />
          </span>
        )}
        {mobile ? (
          <>
            <span
              className={McosetMockTest ? styles.activeSpan : styles.normalSpan}
              onClick={() => {
                setPopular(false);
                setLive(false);
                setMockTest(true);
                setLiveProject(false);
                setFinalA(false);
                setTCertificate(false);
              }}
            >
              <div className={styles.innerSpan}>
                <BsLaptop className={styles.MenuIcon} />
                Mock Tests and Assignment
              </div>
              <IoIosArrowDown />
            </span>
            {TCertificate ? (
              <div className={styles.gridPanel}>
                <a href="/full-stack-developer-course">
                  <div
                    className={styles.mInnerBox}
                    onClick={() => handleIcon(false)}
                  >
                    <div className={styles.mInnerBoxDiv}>
                      <h5>Full Stack Developer course with certification</h5>
                      <span>
                        <div>10 Months</div>
                        <BsDot className={styles.dot} />
                        <div>Final Assessment</div>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            ) : (
              ""
            )}
          </>
        ) : (
          <span
            className={MockTest ? styles.activeSpan : styles.normalSpan}
            onClick={() => {
              setPopular(false);
              setLive(false);
              setMockTest(true);
              setLiveProject(false);
              setFinalA(false);
              setTCertificate(false);
            }}
          >
            <div className={styles.innerSpan}>
              <BsLaptop className={styles.MenuIcon} />
              Triple Certification
            </div>
            <IoIosArrowForward />
          </span>
        )}
      </div>
      <div className={styles.MiddleMenu}>
        {popular ? (
          <div className={styles.gridPanel}>
            <a href="/advanced-data-science-and-ai-course-with-real-work-experience">
              <div
                className={styles.mInnerBox}
                onClick={() => handleIcon(false)}
              >
                <div>
                  <IoIosPlayCircle className="text-4xl text-[#f18350]" />
                </div>
                <div className={styles.mInnerBoxDiv}>
                  <h5>350+ hours of Live class recorded sessions</h5>
                </div>
              </div>
            </a>
            <a href="/full-stack-developer-course">
              <div
                className={styles.mInnerBox}
                onClick={() => handleIcon(false)}
              >
                <div>
                  <IoBook className="text-3xl text-[#f18350]" />
                </div>
                <div className={styles.mInnerBoxDiv}>
                  <h5>Get advanced level knowledge of all the concepts</h5>
                </div>
              </div>
            </a>
            <a href="/business-analytics-course">
              <div
                className={styles.mInnerBox}
                onClick={() => handleIcon(false)}
              >
                <div>
                  <FaUserTie className="text-3xl text-[#f18350]" />
                </div>
                <div className={styles.mInnerBoxDiv}>
                  <h5>Learn all the modules from the industry-experts</h5>
                </div>
              </div>
            </a>
          </div>
        ) : (
          ""
        )}
        {Live ? (
          <div className={styles.gridPanel}>
            <a href="/advanced-data-science-and-ai-course-with-real-work-experience">
              <div className={styles.mInnerBox}>
                <div
                  className={styles.mInnerBoxDiv}
                  onClick={() => handleIcon(false)}
                >
                  <h5>Advance Data science and AI course</h5>
                  <span>
                    <div>9 Months</div>
                    <BsDot className={styles.dot} />
                    <div>Live Classes</div>
                  </span>
                </div>
              </div>
            </a>
            <a href="/business-analytics-course">
              <div
                className={styles.mInnerBox}
                onClick={() => handleIcon(false)}
              >
                <div></div>
                <div className={styles.mInnerBoxDiv}>
                  <h5>Business Analytics course for professionals</h5>
                  <span>
                    <div>8 Months</div>
                    <BsDot className={styles.dot} />
                    <div>Live Classes</div>
                  </span>
                </div>
              </div>
            </a>
          </div>
        ) : (
          ""
        )}
        {MockTest ? (
          <div className={styles.gridPanel}>
            <a href="/full-stack-developer-course">
              <div
                className={styles.mInnerBox}
                onClick={() => handleIcon(false)}
              >
                <div className={styles.mInnerBoxDiv}>
                  <h5>Full Stack Developer course with certification</h5>
                  <span>
                    <div>10 Months</div>
                    <BsDot className={styles.dot} />
                    <div>Live Classes</div>
                  </span>
                </div>
              </div>
            </a>

            <a href="/web-development-course">
              <div
                className={styles.mInnerBox}
                onClick={() => handleIcon(false)}
              >
                <div className={styles.mInnerBoxDiv}>
                  <h5>Web Development course with certification</h5>
                  <span>
                    <div>7 Months</div>
                    <BsDot className={styles.dot} />
                    <div>Live Classes</div>
                  </span>
                </div>
              </div>
            </a>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CourseDetails;
