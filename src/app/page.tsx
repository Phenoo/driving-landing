import Advantage from "@/components/Advantage";
import Brands from "@/components/Brands";
import Choose from "@/components/Choose";
import Choosecar from "@/components/Choosecar";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Interest from "@/components/Interest";
import Pricing from "@/components/Pricing";
import Proud from "@/components/Proud";
import Review from "@/components/Review";
import Service from "@/components/Service";
import { StreamlinedExperience } from "@/components/Streamline";
import Testimonial from "@/components/Testimonial";
import Trainers from "@/components/Trainers";
import Video from "@/components/Video";
import WebTalk from "@/components/WebTalk";

export default function Home() {
  return (
    <main>
      <Hero />
      <Review />
      <Choosecar />
      <Advantage />
      <Brands />
      <Video />
      <Pricing />
      <Service />
      <Proud />
      <Trainers />
      <Faq />
      <WebTalk />
      {/* <StreamlinedExperience /> */}
      {/* <Testimonial /> */}
      {/* <Interest /> */}
    </main>
  );
}
