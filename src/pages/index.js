import Head from "next/head";
import Navbar from "@/components/Global/Navbar/Navbar";
import FirstSection from "@/components/Home/FirstSection/FirstSection";
import Tabs from "@/components/Home/Tabs/Tabs";
import Certificate from "@/components/Home/Certificate/Certificate";
import ProjectSlider from "@/components/Global/Project/ProjectSlider";
import Bootcamp from "@/components/Home/Bootcamp/Bootcamp";

export default function Home() {
  return (
    <>
      <Head>
        <title>Skillslash - Project Based Learning Platform.</title>
        <meta
          name="description"
          content="Learn latest blogs about Artificial Intelligence (AI), Python, Machine Learning, Data Science, NLP, Business Analysis, Data Science"
        />
      </Head>

      <Navbar />
      <FirstSection />
      <Tabs />
      <Certificate />
      <ProjectSlider heading="Hands-on Projects" />
      <Bootcamp />
      {/* <main className="grid grid-cols-[60%,40%] bg-slate-200">
        <div className="flex flex-col gap-3">
        <TextAnimation text="Get Free Education With Best Courses " />
        <motion.p
          initial={{ scale: 2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ damping: 12, stiffness: 100, delay: 0.8 }}
          className="w-[60%]"
        >
          Get free education and high quality education system to help you in{" "}
          advance in your career, learn new languages.
        </motion.p>
        <ScrollDiv />
        <div>
          <p className="flex items-center gap-3 ">
            <FaCircle style={{ fontSize: "12px" }} /> Live interactive classes
          </p>
          <p className="flex items-center gap-3">
            <FaCircle style={{ fontSize: "12px" }} /> Real Work Experience
          </p>
          <p className="flex items-center gap-3">
            <FaCircle style={{ fontSize: "12px" }} /> Best Advance courses
          </p>
          <p className="flex items-center gap-3">
            <FaCircle style={{ fontSize: "12px" }} />
            AI based syllabus
          </p>
        </div>
      </div>
      <div></div>
      </main> */}
    </>
  );
}
