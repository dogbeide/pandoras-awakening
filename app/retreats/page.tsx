import Image from "next/image";

import Title from "../components/text/Title";
import Section from "../components/general/Section";
import { justAnotherHand } from "../lib/fonts";
import RetreatActivityCard from "./RetreatActivityCard";


export default function Page() {

  return (
    <div className="">
      <Image
        src="/retreats.webp"
        alt="retreats banner"
        width={1349}
        height={184}
      />
      <Section classNames="text-center bg-gradient-to-br from-white via-pandoras-teal to-white">
        <Title classNames={`text-black`}>Retreats</Title>
        <div className="text-pandoras-purple italic max-sm:text-sm">
          <p className="font-semibold">
            Pleasure Principal Retreats<br />
            All things pleasure and sexuality
          </p>
          <br />

          <p className="italic">
            Led by nationally-acclaimed sex therapist&nbsp;
            <a className="underline hover:text-pandoras-orange transition-all duration-100" href="/about-us/renee-burwell">Renee Burwell</a>.
          </p>
          <br />

          <p className="font-bold">
            A journey of healing and fun designed for individuals and couples.
          </p>
          <br />

          <p className="font-bold">
            Ignite many elements of pleasure & transform your life!
          </p>
          <br />
        </div>
      </Section>
      <div className="bg-pandoras-purple 
        grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 max-[420px]:grid-cols-1 max-md:gap-1 max-md:py-1"
      >
        <RetreatActivityCard
          title='EXPLORE SENSUALITY'
          desc={`Learn techniques for enhancing your sexual experiences.`}
          imgUrl="/pexels-sunsetoned-6536119_420x525.jpg"
          imgAlt="sensuality thumbnail"
          classNames="text-pandoras-orange"
          color="pandoras-orange"
        />
        <RetreatActivityCard
          title='Interactive Groups'
          desc={`Explore all things sex and sexuality. 
            We will also discuss techniques that will revitalize your relationship.`}
          imgUrl="/pexels-angela-roma-7480283_420x525.jpg"
          imgAlt="interactive groups thumbnail"
          classNames="text-yellow-300"
          color='yellow-300'
        />
        <RetreatActivityCard
          title='Experience Nashville'
          desc={`Enjoy the magic of music city and make memories 
            in one of the TOP places to visit in the USA!`}
          imgUrl="/pexels-ushindinamegabe-10111511_420x525.jpg"
          imgAlt="experience nashville thumbnail"
          classNames='text-pandoras-teal'
          color='pandoras-teal'
        />
        <RetreatActivityCard
          title='Positivity + Inclusiveness'
          desc={`Surround yourself with a tribe of supporters in a safe environment.`}
          imgUrl="/pexels-tim-samuel-5838294_420x525.jpg"
          imgAlt="positivity & inclusiveness thumbnail"
          classNames="text-pandoras-lime"
          color='pandoras-lime'
        />
      </div>
      {/* <Section classNames="bg-pandoras-purple">
        <Title classNames={`text-2xl text-white ${justAnotherHand.className}`}>
          REJUVENATION - FUN - SELF-CARE
        </Title>
      </Section> */}
    </div>
  )
}