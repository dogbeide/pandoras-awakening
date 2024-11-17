import Image from "next/image"
import { Metadata } from "next"

import Section from "@/app/components/general/Section"
import SubTitle from "@/app/components/general/SubTitle"
import Title from "@/app/components/text/Title"
import TextSection from "@/app/components/general/TextSection"
import BtnCTA from "@/app/components/buttons/btn-cta"
import { scheduleUrl } from "@/app/lib/links-data"

export const metadata: Metadata = {
  title: "Trauma Therapy - Pandora's Awakening",
  description: "Pandora's Awakening helps those with dysfunctional patterns and provides tools to live healthy mental and sex lives in the Nashville area.",
};

export default function Page() {
  return (
    <Section classNames="bg-pandoras-purple [&>SubTitle]:text-pandoras-orange [&>*]:mb-5 
      leading-7 [&>p]:text-white [&>h3]:text-white [&>h3]:text-xl [&>ul]:text-white"
    >
      <Title classNames="text-white">Thriving Families</Title>

      <SubTitle>
        <span style={{ fontWeight: 400 }}>
          Thriving Families is a subset of Pandora’s Awakening.
        </span>
      </SubTitle>

      <p className="font-bold">
        Thriving Families focuses on couples and adults navigating transitions with having families, parenting, and caregiving family members and partners.   We believe that strong families are the foundation of a thriving community. Our mission is to support families in navigating challenges, enhancing communication, and fostering resilience.
      </p>

      <SubTitle>Our Approach</SubTitle>

      <p className="">We provide a safe, nurturing environment where every family member can express their feelings and experiences. Our licensed therapists utilize evidence-based techniques to help families:</p>
      <ul className="list-disc list-inside">
        <li>Improve communication skills</li>
        <li>Resolve conflicts constructively</li>
        <li>Strengthen emotional bonds</li>
        <li>Navigate life transitions together</li>
        <li>Build coping strategies for stress and adversity</li>
      </ul>

      <SubTitle>Services Offered</SubTitle>

      <ul className="[&>li]:mb-4">
        <li>
          <span className="font-bold">Family Therapy: </span>
          <span>Explore dynamics and improve relationships within the family unit.</span>
        </li>
        <li>
          <span className="font-bold">Parenting Support: </span>
          <span>Gain tools and strategies to enhance parenting skills and address behavioral challenges.</span>
        </li>
        <li>
          <span className="font-bold">Crisis Intervention: </span>
          <span>Support families through difficult times with immediate strategies and resources.</span>
        </li>
        <li>
          <span className="font-bold">Workshops: </span>
          <span>Participate in interactive sessions focused on topics like effective communication, conflict resolution, and stress management.</span>
        </li>
      </ul>

      <SubTitle>Why Choose Us?</SubTitle>

      <ul className="[&>li]:mb-4">
        <li>
          <span className="font-bold">Experienced Therapists: </span>
          <span>Our team has extensive training in family systems and therapy techniques.</span>
        </li>
        <li>
          <span className="font-bold">Personalized Care: </span>
          <span>We tailor our approach to meet the unique needs of each family.</span>
        </li>
        <li>
          <span className="font-bold">Confidential and Compassionate: </span>
          <span>We prioritize your privacy and approach every session with empathy and respect.</span>
        </li>
      </ul>

      <SubTitle>Take the First Step</SubTitle>

      <p className="font-bold">Building a healthier family dynamic starts with a conversation. Contact us today to schedule a consultation and begin your journey toward stronger relationships.</p>

      <BtnCTA ariaLabel="Schedule Appointment" classNames="px-2 mt-4 text-white" fontSize="22px" href={scheduleUrl} target="_blank">
        SCHEDULE APPOINTMENT
      </BtnCTA>
    </Section>
  )
}
