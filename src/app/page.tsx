import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import Speakers from "@/components/speakers";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { footerData } from "@/lib/config";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero></Hero>
      <Features></Features>
      <Speakers></Speakers>
      <Pricing></Pricing>
      <Footer {...footerData}></Footer>
    </div>
  );
}
