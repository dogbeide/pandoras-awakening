import Image from "next/image"
import { Metadata } from "next"

import Section from "@/app/components/general/Section"
import SubTitle from "@/app/components/general/SubTitle"
import Title from "@/app/components/text/Title"
import TextSection from "@/app/components/general/TextSection"
import BtnCTA from "@/app/components/buttons/btn-cta"
import { scheduleUrl } from "@/app/lib/links-data"

export const metadata: Metadata = {
  title: "Intensive Therapy - Pandora's Awakening",
  description: "Pandora's Awakening helps those with dysfunctional patterns and provides tools to live healthy mental and sex lives in the Nashville area.",
};

export default function Page() {
  return (
    <Section classNames="bg-pandoras-purple [&>SubTitle]:text-pandoras-orange [&>*]:mb-5 
      leading-7 [&>p]:text-white [&>h3]:text-white [&>h3]:text-xl [&>ul]:text-white"
    >
      <Title classNames="text-white">Intensive Therapy Packages</Title>

      <img src="https://b1122150.smushcdn.com/1122150/wp-content/uploads/2019/11/Color_Free.jpg?lossy=1&strip=1&webp=1"
        alt="" 
      />

      <p className="font-bold">
        Do you have a busy schedule or live out of town? 
        Pandora's Awakening is now offering intensive &nbsp;
        <a href="/offerings/couples-therapy" className="underline text-pandoras-orange hover:text-pandoras-lavender">Couples</a> 
        &nbsp; and/or &nbsp;
        <a href="/offerings/edmr-therapy" className="underline text-pandoras-orange hover:text-pandoras-lavender">EMDR therapy</a> 
        &nbsp;
        packages. Our intensive packages include 3, 6, 9 or twelve hours of therapy over a one or two-day time period. Mention that you are interested in one of our intensive therapy packages at the time of your consultation.
      </p>

      <BtnCTA ariaLabel="Schedule Appointment" classNames="px-2 mt-4 text-white" fontSize="22px" href={scheduleUrl} target="_blank">
        SCHEDULE APPOINTMENT
      </BtnCTA>
    </Section>
  )
}
