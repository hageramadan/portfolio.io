import Layout from "./components/layout";
import { config } from "@fortawesome/fontawesome-svg-core";
import Features from "@/app/components/Features";
import Clients from "@/app/components/Clients";
import Rate from "@/app/components/Rate";
import Freq from "@/app/components/Freq";
import TeamMembers from "@/app/components/TeamMembers";
import Projects from "@/app/components/Projects";
import Blogs from "@/app/components/Blogs";
import Footer from "@/app/components/Footer";
import HomeComponent from "@/app/components/HomeComponent";
import Testimonial from "./components/Testimonial";
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
          <Projects className='bg-[#232429]' class2="absolute top-[60%] "/>
          <Testimonial/>
        </div>
      <Blogs/>
     <Footer/>
    </Layout>
  );
}
