import Image from "next/image";

import Title from "../components/text/Title";
import Section from "../components/general/Section";
import RetreatActivityCard from "./RetreatActivityCard";
import RetreatOptionCard from "./RetreatOptionCard";

import '@/app/components/buttons/btn-cta.css'


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
            <a className="underline hover:text-pandoras-orange transition-all duration-150" href="/about-us/renee-burwell">Renee Burwell</a>.
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

      <Section classNames="text-center bg-gradient-to-br from-white via-pandoras-teal to-white">
        <Title classNames={`text-2xl text-black}`}>
          My Approach
        </Title>
        <div className="text-pandoras-purple max-sm:text-sm flex flex-col items-center">
          <p className="font-semibold">
            We welcome all couples and individuals <br/> from different stages of their relationships:
          </p>
          <br />
          
          <div className="font-semibold flex flex-row justify-center">
            <ul className="list-disc text-left">
              <li>beginning of the relationship</li>
              <li>trying to keep the fire burning</li>
              <li>on the verge of breakup</li>
            </ul>
          </div>
          <br />

          <p className="font-semibold italic">
            All sessions are focused on making a connection <br/>
            and being unapologetically authentic.
          </p>
          <br />

          <Image
            src="/Renee-glasses-frizzy_334x334.jpg"
            alt="Renee-glasses-frizzy"
            width={150}
            height={150}
            className="rounded-full btn-cta-img hover-orange mb-5"
          />

          <p className="">
            <a className="underline hover:text-pandoras-orange transition-all duration-150" href="/about-us/renee-burwell">
              Learn more about Renee...
            </a>
          </p>
          <br />
        </div>
      </Section>

      <Section classNames="bg-pandoras-purple">
        <Title classNames="text-white">Retreat Options</Title>
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-2 max-md:gap-4 max-sm:gap-2 mx-2 w-full text-center text-white"
        >
          <RetreatOptionCard
            title="Individual Getaway"
            desc={<div className="flex flex-col items-left text-center">
              <span className="font-semibold">5-Day Retreat - Nashville</span><br />
              <ul className="list-disc text-left">
                <li>Lodging</li>
                <li>Meals</li>
                <li>Transportation (within retreat)</li>
              </ul>
              <br />
              <ul className="list-disc text-left">
                <li>Daily Yoga</li>
                <li>Group Processing</li>
                <li>Activities</li>
              </ul>
              <br />
              <div className="italic font-semibold">May 11 - 15</div><br />
              <div className="italic">$1,250 / person</div><br />
            </div>}
          />
          <RetreatOptionCard
            title="Couples Retreat"
            desc={<div className="flex flex-col items-left text-center">
              <span className="font-semibold">5-Day Retreat - Nashville</span><br />
              <ul className="list-disc text-left">
                <li>Lodging</li>
                <li>Meals</li>
                <li>Transportation (within retreat)</li>
              </ul>
              <br />
              <ul className="list-disc text-left">
                <li>Daily Yoga</li>
                <li>Group Processing</li>
                <li>Activities</li>
              </ul>
              <br />
              <div className="italic font-semibold">April 20 - 24</div><br />
              <div className="italic">$2600 / couple</div><br />
            </div>}
          />
        </div>
        <div className="mt-3 text-center">
          <span className="italic">(Outside transportation & activities not included)</span>
        </div>
      </Section>
{/*       
      <Section classNames="text-center bg-gradient-to-br from-white via-pandoras-teal to-white">
        <Title classNames="text-pandoras-purple">Upcoming Dates</Title>
      </Section> */}

      <Section classNames="text-center bg-gradient-to-br from-white via-pandoras-teal to-white">
        <Title classNames={`text-pandoras-purple`} textSizes="text-4xl">
          Featured on premium outlets:
        </Title>
        <Image
          src='/news-outlets_360x165.png'
          alt='featured news outlets image list'
          width={360}
          height={165}
        />
      </Section>
    </div>
  )
}