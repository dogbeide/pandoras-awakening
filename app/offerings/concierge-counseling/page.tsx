import Image from "next/image"
import { Metadata } from "next"

import Section from "@/app/components/general/Section"
import SubTitle from "@/app/components/general/SubTitle"
import Title from "@/app/components/text/Title"
import TextSection from "@/app/components/general/TextSection"
import BtnCTA from "@/app/components/buttons/btn-cta"
import { scheduleUrl } from "@/app/lib/links-data"

export const metadata: Metadata = {
  title: "Concierge Counseling And Coaching - Pandora's Awakening",
  description: "Pandora's Awakening helps those with dysfunctional patterns and provides tools to live healthy mental and sex lives in the Nashville area.",
};

export default function Page() {
  return (
    <Section classNames="bg-pandoras-purple [&>SubTitle]:text-pandoras-orange [&>*]:mb-5 
      leading-7 [&>p]:text-white [&>h3]:text-white [&>h3]:text-xl [&>ul]:text-white"
    >
      <Title classNames="text-white">Concierge Counseling</Title>
      <Image
        alt=""
        width={300}
        height={200}
        src="/concierge_150x150.webp"
      />

      <p className="font-bold">
        Do you have a demanding work schedule or an affluent lifestyle requiring an additional level of confidentiality?
      </p>

      <p className="font-bold">
        Do traditional waiting rooms create immobilizing anxiety?
      </p>

      <p>
        Pandora&apos;s Awakening offers concierge counseling as a means to create additional confidentiality for those needing a therapist that meets you where you are. We offer in-home and online therapy allowing you to remain in the privacy of your own home or office while working on your personal healing and goals.
      </p>

      <div className="grid grid-cols-2 max-sm:grid-cols-1 text-pandoras-orange">
        <p className="font-bold col-span-1 w-[90%]">
          ✅ All concierge clients must meet in-person and in-office for an initial consultation.
        </p>
        <p className="font-bold col-span-1 w-[90%] max-sm:mt-4">
          ✅ Special accommodations can be made to ensure additional privacy if needed upon request.
        </p>
      </div>

      <BtnCTA ariaLabel="Schedule Appointment" classNames="px-2 mt-4 text-white" fontSize="22px" href={scheduleUrl} target="_blank">
        SCHEDULE APPOINTMENT
      </BtnCTA>
    </Section>
  )
}
