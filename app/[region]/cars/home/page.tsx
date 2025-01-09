import Cta from "@/components/Common/Cta";
import Blogs from "@/components/Homes/Home/Blogs";
import Brands from "@/components/Homes/Home/Brands";
import Cars from "@/components/Homes/Home/Cars";
import Cars2 from "@/components/Homes/CPO/Cars2";
import Facts from "@/components/Homes/Home/Facts";
import Features from "@/components/Homes/Home/Features";
import Features2 from "@/components/Homes/Home/Features2";
import Features3 from "@/components/Homes/Home/Features3";
import Hero from "@/components/Homes/Home/Hero";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Valid Cars",
  description: "Your Favorite Cars Portal.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Brands currPage="home" />
      <Cars />
      <Features />
      <Facts />
      <Features2 />
      <Cars2 />
      <Features3 />
      <Blogs />
      <Cta />
    </>
  );
}