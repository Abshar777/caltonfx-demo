"use client"
import Hero from "@/components/page-section/hero";
import Features from "@/components/page-section/features";
import WhyChoosUs from "@/components/page-section/whyChoosUs";
import Testimonials from "@/components/page-section/testimonials";
import Sections from "@/components/page-section/sections";
import Cta from "@/components/page-section/cta";
export default function Home() {
  return (
  <>
  <Hero/>
  <Features/>
  <WhyChoosUs/>
  <Testimonials/>
  <Sections/>
  {/* <Cta/> */}
  <div className="mb-10"></div>
  </>
  );
}
