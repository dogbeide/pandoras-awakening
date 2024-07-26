import Image from "next/image";
import Section from "@/app/components/general/Section";
import Title from "@/app/components/text/Title";
import SubTitle from "@/app/components/general/SubTitle";
import TextSection from "@/app/components/general/TextSection";
import TherapistCard from "@/app/components/cards/TherapistCard";
import BtnCTA from "@/app/components/buttons/btn-cta";
import { notFound } from "next/navigation";

const therapistNameBySlug: any = {
  'renee-burwell': 'Renee Burwell',
}

export default function Page({ params } : { params: { therapist: string }}) {
  const name:string = therapistNameBySlug[params.therapist];

  if (!name) {
    return notFound()
  }
  return (
    <div>
      <Section classNames="bg-gradient-to-br from-white via-pandoras-teal to-white">
        <Title classNames="text-pandoras-purple">
          About Me
        </Title>
        <TherapistCard 
          name="Renee Burwell"
          imgUrl="/Renee-therapist.webp"
          href="/about-us/renee-burwell"
          desc={`
            "My name is RENÉE BURWELL, and I come from a strong maternal line of healers and spiritual guides."
          `}
        />

        <div className="flex flex-col text-center text-pandoras-purple text-sm">
          <span className="mb-3">
            I was born into this world as a symbol of light within the shadows of oppression.
          </span>
          <span className="mb-3">
            My presence is a symbol of pain, struggle, darkness, strength, courage, compassion, and love.
          </span>
          <span className="mb-3">
            I embrace both the shadow and light to work in a space of healing.
          </span>
          <span className="mb-1">
            I believe we all have purpose in this world, 
            and I have a gift in helping people regain connection with their gifts and creativity.
          </span>
        </div>
        <BtnCTA ariaLabel="Schedule Appointment" classNames="px-2 mt-4 text-white" fontSize="22px" href="https://calendly.com/holisticsextherapist" target="_blank">
          SCHEDULE APPOINTMENT
        </BtnCTA>
      </Section>

      <Section classNames="bg-gradient-to-tr from-pandoras-purple to-pandoras-pink">
        <SubTitle>
          Do you want to live a life with stronger connections to your creativity and sexuality?
        </SubTitle>
        <TextSection classNames="flex flex-col text-center items-center [&>span]:mb-2">
          <span className="font-semibold">Creativity comes in many forms.</span>
          <span>I define creativity as one’s ability to manifest and create a life in alignment with divine purpose.</span>
          <span>Divine purpose is not based in religion, rules, and other’s expectations, but is found within our dreams and desires.</span>
          <span className="text-pandoras-light-orange">It is found within our sacral chakra of passion and purpose.</span>
          <span className="text-pandoras-light-orange">Our sacral chakra holds our creativity, feelings, sexuality, intimacy, and connection.</span>
          <span>Sometimes our imagination and creativity get stifled by societal and other’s expectations, past trauma, life demands, and inadequate self-care,</span>
          <span>and we begin to paint pictures that are not in optimal alignment with our progress and development...</span>
          {/* <hr className="my-3 border-none h-[2px] bg-slate-200 rounded-md" /> */}
          <hr className="bg-pandoras-orange border-none rounded-sm h-[2px] my-5 max-sm:my-3 w-20 " />
          <span className="font-semibold">I am here to help you find the tools to break down the barriers that are preventing you from obtaining the connections you truly desire.</span>
        </TextSection>
      </Section>

      <Section classNames="bg-gradient-to-br from-white via-pandoras-teal to-white">
        <SubTitle textColor="black">
          Are you a healer looking for 
          guidance and clarity?
        </SubTitle>
        <TextSection classNames="flex flex-col items-center text-center [&>span]:mb-2" textColor="pandoras-purple">
          <span>
            <span className="font-semibold">I have close to two decades of experience </span>
            <span>working with individuals, couples, and families.</span>
          </span>
          <span>I have worked in almost every aspect of social work there is in my career.</span>
          <span>I have held hands while in delivery rooms to transitions in death as a medical social worker.</span>
          <span>I have worked in homeless shelters, with domestic violence victims, sex trafficking, foster care,</span>
          <span>and now I work with individuals, couples and providers in healing trauma and increasing pleasure as a sex therapist and educator. </span>
          <hr className="bg-pandoras-purple rounded-sm h-[1px] my-5 max-sm:my-3 w-20 " />
          <span>I have become a therapist and coach to healers and artists of many forms, 
            and would love to help those needing guidance, clarity and healing along their journey.
          </span>
          <span>
            <a href="https://calendly.com/holisticsextherapist" 
              className="underline text-pandoras-orange hover:text-pandoras-light-orange"
              target="_blank"
            >
              I am available for one-on-one sessions.
            </a>
          </span>
          <span>I host a variety of workshops, in-person and virtually, on working with diverse populations:</span>
          <span className="font-semibold">the basics with including sexuality in your practice, sexuality attitude reassessments, and trauma-informed care.</span>
          <span>Currently, I have a waiting list for those looking for supervision as a licensed clinical social worker or those looking to be certified as an AASECT-certified sex therapist.</span>
          
          <BtnCTA ariaLabel="Schedule Appointment" classNames="px-2 mt-2 py-1 text-white" fontSize="22px" href="https://calendly.com/holisticsextherapist" target="_blank">
            SCHEDULE APPOINTMENT
          </BtnCTA>
        </TextSection>

        <div className="flex flex-row max-md:flex-col [&>div]:mx-3 mt-7 flex-nowrap">
          <div className="flex flex-col justify-start items-center text-center max-w-[308px] mb-5">
            <Image
              src='/PPPhoto.webp'
              alt='Planned Parenthood Award - Renee'
              width={308}
              height={409}
            />
            <span className="text-sm mt-2">Tennessee and Northern Mississippi Community</span>
            <span className="text-sm font-semibold text-pandoras-purple">Board Member</span>
          </div>
          <div className="flex flex-col justify-start items-center text-center max-w-[308px] mb-5">
            <Image
              src='/FamilyLifeEducatorAward.webp'
              alt='Family Life Educator Award 2018 - Renee'
              width={292}
              height={409}
            />
            <span className="text-sm mt-2">2018</span>
            <span className="text-sm font-semibold text-pandoras-purple">Sex Educator of the Year</span>
          </div>
        </div>
      </Section>
      <Section classNames="bg-white">
        <div className="flex flex-row justify-center items-center flex-wrap [&>*]:mx-5">
          <Image
            src='/aasect_logo_color-20161_2.webp'
            alt='AASECT Logo'
            width={251}
            height={81}
          />
          <Image
            src='/logo_wocshn_3.webp'
            alt='WOCSHN Logo'
            width={159}
            height={35}
          />
          <Image
            src='/NCSF-155x86.webp'
            alt='NCSF Logo'
            width={155}
            height={86}
          />
          <Image
            src='/American-Academy-of-Psychotherapists-Log.webp'
            alt='AAP Logo'
            width={131}
            height={136}
          />
          <Image
            src='/the-association-of-black-psychologists.webp'
            alt='The Association of Black Psychologists Logo'
            width={159}
            height={116}
          />
          <Image
            src='/tnash-logo.webp'
            alt='TNASH Logo'
            width={177}
            height={177}
          />
          <Image
            src='/logo-nasw.webp'
            alt='NASW Logo'
            width={182}
            height={69}
          />
        </div>
      </Section>
    </div>
  )
}