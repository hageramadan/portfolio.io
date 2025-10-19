import Layout from "../src/components/layout";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Features from "@/src/components/Features";
import Clients from "@/src/components/Clients";
import Rate from "@/src/components/Rate";
import Freq from "@/src/components/Freq";
import TeamMembers from "@/src/components/TeamMembers";
import Projects from "@/src/components/Projects";
import Testimonial from "@/src/components/Testimonial";
import Blogs from "@/src/components/Blogs";
import Footer from "@/src/components/Footer";
import HomeComponent from "@/src/components/HomeComponent";
;
config.autoAddCss = false;

export default function Home() {
  return (
    <Layout>
        <HomeComponent/>
        <Features />
        <Clients />
        <Rate />
        <Freq />
        <TeamMembers />
        <div className="bg-[#f4f5f9]">
          <Projects className='bg-[#232429]' class2="absolute top-[60%]"/>
          <Testimonial/>
        </div>
      <Blogs/>
     <Footer/>
    </Layout>
  );
}
