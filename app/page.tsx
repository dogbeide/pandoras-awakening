import Image from "next/image";
import { Montserrat, Square_Peg, Just_Another_Hand } from "next/font/google";

import Banner from "./components/banner/Banner";
import BtnCTA from "@/app/components/buttons/btn-cta";

const montserrat = Montserrat({ subsets: ['latin'], weight: '400' });
const badScript = Square_Peg({ subsets: ['latin'], weight: '400' });
const justAnotherHand = Just_Another_Hand({ subsets: ["latin"], weight: "400" });

import './home.css'
import '@/app/components/buttons/btn-cta.css'

export default function Home() {
  return (
    <main>
      <Banner />
      <div className="flex flex-col items-center justify-center py-8 px-9 max-md:px-3 intro-container bg-gradient-to-tr from-pandoras-purple to-pink-500">
        <span className={`max-md:text-5xl text-6xl  mb-4 ${badScript.className} font-black`}>Pandora’s Awakening</span>
        <span className={`spaced-paragraphs mx-4 text-center flex flex-col items-center text-slate-300 ${montserrat.className}`}>
          <p className="mt-3">Are you going through a challenging time in your life?</p>
          <p className="mt-3">We greatly empathize with what you might be experiencing</p>
          <p className="mt-3">and will do our best to help you through your circumstances with empathy and compassion.</p>
          <p className="mt-6 font-semibold">There are no topics too taboo to discuss in our office.</p>
          <p className="mt-3 mb-3">We specialize in treating: </p>
          <ul className="w-56 text-left list-disc italic">
            <li>sexual issues</li>
            <li>trauma</li>
            <li>anxiety</li>
            <li>depression</li>
            <li>relationship concerns</li>
            <li>and general life stressors.</li>
          </ul>

          <p className="mt-6">The goal of Pandora’s Awakening is to assist with changing stigmatized and dysfunctional patterns</p>
          <p className="mt-3">and replace them with holistic and healthy tools, to help you live an unapologetically authentic life.</p>
          <p className="mt-6 font-semibold">We pride ourselves on accessibility and inclusivity.</p>
          <p className="mt-2">We never want finances, scheduling, or other accessibility issues to stand in your way of care.</p>
          <p className="mt-6">To assist clients in getting their needs met we have various providers trained in multiple modalities of care.</p>
          <p className="mt-3">We accept insurance and have affordable packages to help you access care. </p>
          <p className="mt-3">We also offer in-person and virtual therapy to best fit your needs.!</p>
          
        </span>
        <BtnCTA classNames='text-white mt-4' href='/about' fontSize="22px">ABOUT US</BtnCTA>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="mt-6"
          src="/man-standing-under-rainbow-waterfall.webp"
          alt="man-standing-under-rainbow-waterfall"
        />
      </div>
      <div id="home-services" className={`px-28 max-md:px-10 max-sm:px-6 py-7 bg-pandoras-purple ${montserrat.className}`}>
        <div className={`${badScript.className} text-center max-md:text-5xl text-6xl text-slate-100`}>Our Services</div>
        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4">
          <div className="flex flex-col items-center my-8 py-3 px-3 bg-pink-200 bg-opacity-10 rounded-sm">
            <a href="/services/sex-therapy">
              <Image 
                src='/Renee-Burwell-Sex-Therapy-thumbnail.webp'
                alt='Sex Therapy'
                width={150}
                height={150}
                className="rounded-full btn-cta-img" 
              />
            </a>
            <div className="text-center flex flex-col">
              <a className={`btn-cta-text text-3xl text-pandoras-orange mt-3 font-bold ${justAnotherHand.className}`} href="/services/sex-therapy">SEX THERAPY</a>
              <hr className="bg-pandoras-orange h-1 border-none my-3" />
              <span className="text-base text-slate-200">
                If you are struggling with issues of sexual intimacy or desire, 
                we can help you chart a path forward in your sex life.
              </span>
              <a className="btn-cta-text mt-6 text-pandoras-orange" href="/services/sex-therapy">
                Learn More...
              </a>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}
