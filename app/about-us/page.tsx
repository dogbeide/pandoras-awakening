import { squarePeg } from "../lib/fonts";
import Section from "../components/general/Section";
import Title from "../components/text/Title";
import SubTitle from "./SubTitle";
import TextSection from "./TextSection";
import TherapistCard from "../components/cards/TherapistCard";
import BtnCTA from "../components/buttons/btn-cta";

export default function Page() {

  return (
    <div>
      <Section classNames="bg-gradient-to-tr from-pandoras-purple to-pandoras-pink text-center">
        <span className={`max-md:text-5xl text-6xl  mb-4 ${squarePeg.className} font-black`}>Pandora’s Awakening</span>
        <SubTitle classNames="mt-4">
          The premise of Pandora’s Awakening stems from the Greek myth of Pandora’s box.
        </SubTitle>
        <TextSection classNames="mt-5">
          In Greek mythology, Pandora was the first woman on Earth. 
          As a gift on her wedding night Zeus presented her with a beautiful box, 
          and instructed her not to open it under any circumstances. 
          Stricken with curiosity (also a gift given to her by the gods), 
          Pandora opened the box which contained all of the evils and detriments of the world. 
          Pandora quickly attempted to close the box, but to her dismay all of the evils had already escaped. 
          Pandora was deeply saddened by her actions and feared the consequences of Zeus. 
          However, Zeus did not punish her because he knew this would happen. 
          What Pandora didn’t realize at the time was that at the bottom of the box existed the solution to her problems, Hope.
        </TextSection>

        <SubTitle classNames="mt-9">
          Pandora’s Awakening, is about hope.
        </SubTitle>
        <TextSection>
          As human beings, we all will experience some form of crisis or change in our lives. 
          Some of these circumstances are brought on by others and at times by ourselves.
        </TextSection>

        <TextSection>
          Pandora’s Awakening is about helping those experiencing trauma, crisis, and/or change in their lives realize that there is hope. 
          No matter how frightening the circumstance there is always hope.
        </TextSection>

        <SubTitle classNames="mt-9">
          Sex is an aspect of humanity that is often taboo and looked negatively in many communities.
        </SubTitle>
        <TextSection>
          Many even equate Pandora ’s Box of misfortune to the loss of her virginity. 
          Pandora’s Awakening has a focus and specialization in offering Sexual Therapy 
          and Education to help break down many barriers and misconceptions individuals and couples have with sex. 
          The goal of Pandora’s Awakening is to assist with changing stigmatized and dysfunctional patterns and replace them with holistic and healthy tools, 
          so that individuals and our larger community can live healthy mental and sexual lives. 
          We offer an array of services to address mental and sexual health needs. 
          We offer an array of therapeutic services to help you live an unapologetically authentic life. 
        </TextSection>

        <div className="flex flex-row max-md:flex-col items-center mt-3">
          <BtnCTA classNames="text-white" href="https://calendly.com/holisticsextherapist" target="_blank" ariaLabel="Schedule Appointment with Renee">
            SCHEDULE APPOINTMENT
          </BtnCTA>
          <span className="text-white mt-1 ml-2 max-md:ml-0"> with Renee today.</span>
        </div>
        

        <BtnCTA classNames="mt-9 py-1 px-3 text-white"
          fontSize="22px"
          href="/faq"
        >
          VIEW FAQS
        </BtnCTA>

        <SubTitle classNames="mt-12">Services Include:</SubTitle>
        <TextSection>
          <ul className="list-disc text-left">
            <li>Individual/Couples/Family/Group therapy</li>
            <li>Sex Therapy</li>
            <li>Psychoeducational Workshops & Trainings</li>
            <li>Individual & Group Kundalini Yoga</li>
            <li>Life Coaching</li>
            <li>Bedroom Kandi</li>
          </ul>
        </TextSection>

        <BtnCTA classNames="mt-9 py-1 px-3 text-white"
          fontSize="22px"
          href="/offerings"
        >
          VIEW OFFERINGS
        </BtnCTA>
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
        <BtnCTA ariaLabel="Schedule Appointment" classNames="px-2 mt-4 text-white" fontSize="22px" href="https://calendly.com/holisticsextherapist" target="_blank">
          SCHEDULE APPOINTMENT
        </BtnCTA>
        <span className={`text-center text-pandoras-purple mt-6`}>
          &quot;I live by the philosophy that everyone on this earth plays a vital part 
          in the success and failures of their community, and I prefer to play on the side of success. 
          Analyzing and learning functions of relationships has always been a great passion of mine. 
          I believe relationships are the driving force behind our existence.&quot;
        </span>
        <span className="text-center max-md:text-left text-pandoras-purple mt-5 max-md:mt-3 font-semibold text-sm max-sm:text-xs">
        🥇 2021 - American Association of Sexuality Educators, Counselors, 
          and Therapists Award for Integrative Approaches to Sex Therapy
        </span>
        <span className="text-center max-md:text-left text-pandoras-purple mt-3 font-semibold text-sm max-sm:text-xs">
        🥇 2018 - Family Life Educator Award Winner from Planned Parenthood of Tennessee and North Mississippi
        </span>
      </Section>

    </div>
  )
}