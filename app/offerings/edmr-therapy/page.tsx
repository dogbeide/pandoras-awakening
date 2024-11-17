import Image from "next/image"
import { Metadata } from "next"

import Section from "@/app/components/general/Section"
import SubTitle from "@/app/components/general/SubTitle"
import Title from "@/app/components/text/Title"
import TextSection from "@/app/components/general/TextSection"
import BtnCTA from "@/app/components/buttons/btn-cta"
import { scheduleUrl } from "@/app/lib/links-data"

export const metadata: Metadata = {
  title: "EDMR Therapy - Pandora's Awakening",
  description: "Pandora's Awakening helps those with dysfunctional patterns and provides tools to live healthy mental and sex lives in the Nashville area.",
};

export default function Page() {
  return (
    <Section classNames="bg-pandoras-purple [&>SubTitle]:text-pandoras-orange [&>*]:mb-5 
      leading-7 [&>p]:text-white [&>h3]:text-white [&>h3]:text-xl [&>ul]:text-white"
    >
      <Title classNames="text-white">EDMR Therapy</Title>

      <Image
        style={{ fontSize: 16 }}
        alt="EDMR Therapy man looking up into starry sky"
        width={300}
        height={200}
        src="https://b1122150.smushcdn.com/1122150/wp-content/uploads/2019/11/cosmic.jpg?lossy=1&strip=1&webp=1"
      />

      <p className="font-bold">
        Eye Movement Desensitization and Reprocessing (EMDR) therapy is an
        integrative psychotherapy approach that has been extensively researched
        and proven effective for the treatment of trauma.
      </p>
      <SubTitle>How Does EMDR Work?</SubTitle>
      <p>
        Eye movement desensitization and reprocessing (EMDR) is a fairly new,
        nontraditional type of psychotherapy. It&apos;s growing in popularity,
        particularly for treating post-traumatic stress disorder (PTSD). PTSD
        often occurs after experiences such as military combat, physical
        assault, rape, or car accidents.
      </p>
      <p>
        At first glance, EMDR appears to approach psychological issues in an
        unusual way. It does not rely on talk therapy or medications. Instead,
        EMDR uses a patient&apos;s own rapid, rhythmic eye movements. These eye
        movements dampen the power of emotionally charged memories of past
        traumatic events.
      </p>
      <SubTitle>What Can You Expect From EMDR?</SubTitle>
      <p>
        An EMDR treatment session can last up to 90 minutes. Your therapist will
        move his or her fingers back and forth in front of your face and ask you
        to follow these hand motions with your eyes. At the same time, the EMDR
        therapist will have you recall a disturbing event. This will include the
        emotions and body sensations that go along with it.
      </p>
      <p>
        Gradually, the therapist will guide you to shift your thoughts to more
        pleasant ones. Some therapists use alternatives to finger movements,
        such as hand or toe tapping or musical tones.
      </p>
      <p>
        People who use the technique argue that EMDR can weaken the effect of
        negative emotions. Before and after each EMDR treatment, your therapist
        will ask you to rate your level of distress. The hope is that your
        disturbing memories will become less disabling.
      </p>

      <BtnCTA ariaLabel="Schedule Appointment" classNames="px-2 mt-4 text-white" fontSize="22px" href={scheduleUrl} target="_blank">
        SCHEDULE APPOINTMENT
      </BtnCTA>

      <p>
        <sup>1 </sup>
        {/* Source:{" "} */}
        <a href="https://www.webmd.com/mental-health/emdr-what-is-it#1"
          className="underline text-pandoras-orange hover:text-pandoras-lavender"
          target="_blank"
        >
          https://www.webmd.com/mental-health/emdr-what-is-it#1
        </a>
      </p>
    </Section>
  )
}
