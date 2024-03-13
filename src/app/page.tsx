import Advantage from "@/components/Advantage";
import Brands from "@/components/Brands";
import Choose from "@/components/Choose";
import Choosecar from "@/components/Choosecar";
import Faq from "@/components/Faq";
import FootTest from "@/components/FootTest";
import Hero from "@/components/Hero";
import Interest from "@/components/Interest";
import Overflow from "@/components/Overflow";
import Pricing from "@/components/Pricing";
import Proud from "@/components/Proud";
import Review from "@/components/Review";
import Service from "@/components/Service";
import { StreamlinedExperience } from "@/components/Streamline";
import Testimonial from "@/components/Testimonial";
import Trainers from "@/components/Trainers";
import Video from "@/components/Video";
import WebTalk from "@/components/WebTalk";
import { FaStar } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <Hero />
      <Review />
      <Overflow
        text="READy to get started "
        icon={<FaStar color="#D7FB00" />}
      />
      <Choosecar />
      <Advantage />
      <Brands />
      <Video />
      <Pricing />
      <Overflow
        text="READy to get started "
        icon={<FaStar color="#D7FB00" />}
      />
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
