import { montserrat, squarePeg } from "./lib/fonts";
import offerings from "./lib/offerings-data";

import Banner from "./components/banner/Banner";
import BtnCTA from "@/app/components/buttons/btn-cta";
import Section from "./components/general/Section";
import OfferingCard from "./components/cards/OfferingCard";
import TherapistCard from "./components/cards/TherapistCard";

import './home.css'
import '@/app/components/buttons/btn-cta.css'
import Title from "./components/text/Title";

export default function Home() {
  return (
    <main>
      <Banner />

      <Section classNames="bg-gradient-to-tr from-pandoras-purple to-pink-500">
        <span className={`max-md:text-5xl text-6xl  mb-4 ${squarePeg.className} font-black`}>Pandora’s Awakening</span>
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
        <BtnCTA ariaLabel="About Us" classNames='text-white mt-4' href='/about' fontSize="22px">ABOUT US</BtnCTA>
      </Section>

      <Section classNames="bg-gradient-to-br from-white via-pandoras-teal to-white">
        <Title classNames="text-pandoras-purple hover:text-pandoras-orange" href="/about-us/renee-burwell">Our Therapist</Title>
        <TherapistCard 
          name="Renee Burwell"
          imgUrl="/Renee-therapist.webp"
          href="/about-us/renee-burwell"
          desc={`
            LCSW, MPA, AASECT 
            Certified Sex Therapist and Educator
          `}
        />
        <BtnCTA ariaLabel="Schedule Appointment" classNames="px-2 mt-4 text-pandoras-purple" fontSize="22px" href="https://calendly.com/holisticsextherapist" target="_blank">
          SCHEDULE APPOINTMENT
        </BtnCTA>
      </Section>

      <Section classNames="bg-pandoras-purple">
        <Title classNames="text-slate-100 hover:text-pandoras-teal" href='/offerings'>Offerings</Title>
        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 max-sm:gap-2 max-lg:gap-5 gap-8">
          {offerings.slice(0, 4).map((offering) => (
            <OfferingCard
              key={offering.title}
              title={offering.title}
              desc={offering.desc}
              href={offering.href}
              imgUrl={offering.imgUrl}
            />
          ))}
        </div>
        <a className="text-pandoras-orange btn-cta-text block text-center text-2xl mt-5 underline underline-offset-2"
          href={'/offerings'}
        >
          (See All Offerings...)
        </a>
      </Section>

    </main>
  );
}
