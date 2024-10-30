
import CardGrid from "@/components/CardGrid";
import Ghost from "@/components/Ghost";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Order from "@/components/Order";
import Process from "@/components/Process";
import Story from "@/components/Story";
import Testimonial from "@/components/Testimonial";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Order/>
      <CardGrid/>
      <Ghost/>
      <Story/>
      <Process/>
      <Testimonial/>
    </div>
  );
}
