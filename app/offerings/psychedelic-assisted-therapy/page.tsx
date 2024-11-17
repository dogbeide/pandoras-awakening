import Image from "next/image"
import { Metadata } from "next"

import Section from "@/app/components/general/Section"
import SubTitle from "@/app/components/general/SubTitle"
import Title from "@/app/components/text/Title"
import TextSection from "@/app/components/general/TextSection"
import BtnCTA from "@/app/components/buttons/btn-cta"
import { scheduleUrl } from "@/app/lib/links-data"

export const metadata: Metadata = {
  title: "Psychedelic-Assisted Therapy - Pandora's Awakening",
  description: "Pandora's Awakening helps those with dysfunctional patterns and provides tools to live healthy mental and sex lives in the Nashville area.",
};

export default function Page() {
  return (
    <Section classNames="bg-pandoras-purple [&>SubTitle]:text-pandoras-orange [&>*]:mb-5 
      leading-7 [&>p]:text-white [&>h3]:text-white [&>h3]:text-xl [&>ul]:text-white"
    >
      <Title classNames="text-white">Psychedelic-Assisted Therapy</Title>

      <Image
        src='/pexels-mccutcheon-1212408_150x150.jpg'
        alt='psychedelic therapy display img'
        width={150}
        height={150}
      />

      <p className="font-bold">
        Psychedelic-assisted therapy (PAT) is a therapeutic approach that incorporates the use
        of psychedelic substances, such as ketamine, psilocybin, MDMA, LSD, bufo and
        ayahuasca, to enhance the therapeutic process. These substances are used under
        controlled conditions and guided by trained facilitators to help patients achieve greater
        self-awareness, emotional healing, and psychological insights.
      </p>


      <p className="">
        At Pandora’s Awakening, we do not facilitate medicine journeys in office, but can assist
        in the preparation and integration process of your psychedelic experience. We can
        assist with accessing providers upon request.
      </p>

      <p>
        If you are considering a journey or have taken a journey and would like to go deeper in
        integrating your experience, we are here to help.
      </p>

      <SubTitle>Preparation</SubTitle>

      <p>
        At Pandora’s Awakening, we can assist in educating on different medicines, setting
        clear intentions for medicine work, vetting providers, and screening for suitability of
        psychedelic-assisted therapy.
      </p>

      <SubTitle>Integration</SubTitle>
      
      <p className="font-bold">Integration is what helps make sense of the psychedelic journey.</p>
      <p>
        At Pandora&apos;s
        Awakening, we recommend a 12-week integration strategy after medicine journeys.
        This is to help with processing the experience and integrating lessons learned into
        everyday life. We will also work on creating habits and accountability methods to fully
        integrate the psychedelic experience.
      </p>

      <SubTitle>Potential Benefits of Psychedelic Assisted Therapy:</SubTitle>

      <ul className="[&>li]:mb-4">
        <li>
          <span className="font-bold">Emotional Healing: </span>
          <span>Patients often access repressed emotions and trauma, leading
          to emotional release and healing.</span>
        </li>
        <li>
          <span className="font-bold">Insight and Self-Awareness: </span>
          <span>The altered state of consciousness can provide deep
          insights into personal issues, behaviors, and patterns.</span>
        </li>
        <li>
          <span className="font-bold">Reduction in Symptoms: </span>
          <span>Research shows promising results for conditions like
          PTSD, suicidal ideations, depression, anxiety, and addiction.</span>
        </li>
        <li>
          <span className="font-bold">Spiritual and Existential Insights: </span>
          <span>Many patients report profound spiritual or
          existential experiences that contribute to a sense of peace and well-being.</span>
        </li>
      </ul>

      {/* <SubTitle>Why Choose Us?</SubTitle>

      <ul className="[&>li]:mb-4">
        <li>
          <span className="font-bold">Experienced Therapists: </span>
          <span>Our team has extensive training in psychedelic therapy use.</span>
        </li>
        <li>
          <span className="font-bold">Personalized Care: </span>
          <span>We tailor our approach to meet the unique needs of each individual.</span>
        </li>
        <li>
          <span className="font-bold">Confidential and Compassionate: </span>
          <span>We prioritize your privacy and approach every session with empathy and respect.</span>
        </li>
      </ul> */}

      <SubTitle>Take the First Step</SubTitle>

      <BtnCTA ariaLabel="Schedule Appointment" classNames="px-2 mt-4 text-white" fontSize="22px" href={scheduleUrl} target="_blank">
        SCHEDULE APPOINTMENT
      </BtnCTA>
    </Section>
  )
}
