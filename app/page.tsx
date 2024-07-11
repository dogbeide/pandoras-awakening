import Image from "next/image";
import Banner from "./components/banner/Banner";
import BtnCTA from "@/app/components/buttons/btn-cta";

import './home.css'

export default function Home() {
  return (
    <main>
      <Banner />
      <div className="flex flex-col items-center justify-center py-8 px-9 intro-container">
        <span className="text-3xl mb-4">Pandora’s Awakening</span>
        <span className="text-center">
          Are you going through a challenging time in your life?
          We greatly empathize with what you might be experiencing and will do our best to help you through yourcircumstances with empathy and compassion. There are no topics too taboo to discuss in our office. 
          We specialize in treating sexual issues, trauma, anxiety, depression, relationship concerns, and general life stressors.
          The goal of Pandora’s Awakening is to assist with changing stigmatized and dysfunctional patterns and replace them with holistic and healthy tools, to help you live an unapologetically authentic life.
          We pride ourselves on accessibility and inclusivity. We never want finances, scheduling, or other accessibility issues to stand in your way of care. 
          To assist clients in getting their needs met we have various providers trained in multiple modalities of care, we accept insurance and have affordable packages to help you access care. 
          We also offer in-person and virtual therapy to best fit your needs.
        </span>
        <BtnCTA classNames='text-white mt-4' href='/about' fontSize="22px">ABOUT US</BtnCTA>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="mt-6"
          src="/man-standing-under-rainbow-waterfall.webp"
          alt="man-standing-under-rainbow-waterfall.webp"
        />
      </div>
    </main>
  );
}
