import CourseDetails from "@/components/CoursePage/CourseDetails/CourseDetails";
import Header from "@/components/CoursePage/Header/Header";
import Navbar from "@/components/Global/Navbar/Navbar";
import ProjectSlider from "@/components/Global/Project/ProjectSlider";
import Certificate from "@/components/Home/Certificate/Certificate";
import React from "react";

const DataSciencePage = () => {
  return (
    <div>
      <Navbar />
      <Header
        deskTopPara="India’s 1st"
        mTopPara="India’s 1st"
        title="Adv Data Science and AI Course"
        spanTitleText="Live Project Based Learning Partnered with Tech Companies"
        desc="Update your data analytics skills through our comprehensive program that includes Case-based learning, Projects & certification, Domain Specialized Tracks and much more."
      />
      <CourseDetails />
      <ProjectSlider heading="Hands-on Projects" redirectDs={true} />
      <Certificate />
    </div>
  );
};

export default DataSciencePage;
