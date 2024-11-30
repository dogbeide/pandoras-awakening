import Image from "next/image"
import { Metadata } from "next"

import Section from "@/app/components/general/Section"
import SubTitle from "@/app/components/general/SubTitle"
import Title from "@/app/components/text/Title"
import BtnCTA from "@/app/components/buttons/btn-cta"
import { scheduleUrl } from "@/app/lib/links-data"
import BtnDownloadWrapper from "@/app/components/buttons/btn-download"

import '@/app/components/buttons/btn-cta.css'

export const metadata: Metadata = {
  title: "Workshops And Events And Speaking Engagements - Pandora's Awakening",
  description: "Pandora's Awakening helps those with dysfunctional patterns and provides tools to live healthy mental and sex lives in the Nashville area.",
};

export default function Page() {
  return (
    <Section classNames="bg-pandoras-purple [&>SubTitle]:text-pandoras-orange [&>*]:mb-5 
      leading-7 [&>p]:text-white [&>h3]:text-white [&>h3]:text-xl [&>ul]:text-white"
    >
      <Title classNames="text-white">Workshops And Events And Speaking Engagements</Title>

      <a href="/about-us/renee-burwell" className="btn-cta-img hover-slate-200">
        <Image
          src="/renee-speaker-one.jpg"
          alt="renee speaker one"
          width={300}
          height={400}
        />
      </a>
      <p className="font-bold">
        <a href="/about-us/renee-burwell" className="text-pandoras-orange underline hover:text-pandoras-lavender">Renee</a> is available for workshops, events, and speaking engagements. Please schedule a consultation for more information.
      </p>

      {/* <p className="">Our therapists are focused on making sure professionals and the community are educated on a variety of mental and sexual health topics. Some of the topics our professionals may speak on include:</p> */}
      <p>Some of the topics she may speak on include:</p>
      <ul className="list-disc list-inside">
        <li>Women’s Sexual Health</li>
        <li>Men’s Sexual Health</li>
        <li>Introduction to Sexual Health</li>
        <li>Sexual Health and Trauma/Neglect</li>
        <li>Working with People of Color and Sexual Health</li>
        <li>Incorporating Diversity and Inclusion in the Workplace</li>
        <li>Pleasure as the Measure for Reducing Sexual Assault</li>
        <li>Sexual Health Along the Lifespan</li>
        <li>Mental Health Wellness 101</li>
        <li>Sex Toys for Wellness</li>
        <li>The Power of Consent</li>
        <li>and many more...</li>
      </ul>

      <p className="font-bold">SIGNATURE TOPICS:</p>
      <ul className="list-disc list-inside">
        <li>Sex Therapy</li>
        <li>Individual Therapy and Coaching</li>
        <li>Psychedelic-Assisted Therapy</li>
        <li>EMDR Therapy</li>
        <li>Couples Therapy and Coaching</li>
      </ul>

      <p className=""><a href="/about-us/renee-burwell" className="text-pandoras-orange underline hover:text-pandoras-lavender">
        Renée Burwell</a> is a nationally acclaimed
        psychotherapist and educator with specializations
        in sex therapy, psychedelic treatment, and trauma.
        She is a skilled facilitator offering trainings and
        workshops to healthcare and social services
        professionals on mental health, sexual health, and
        reproductive justice.
      </p>

      <BtnCTA ariaLabel="Schedule Appointment" classNames="px-2 mb-4 mt-4 text-white" fontSize="22px" href={scheduleUrl} target="_blank">
        SCHEDULE APPOINTMENT
      </BtnCTA>

      <Image
        src="/asseenon.png"
        alt="As seen on Pure Romance, CNN, Bedroom Kandi, Nashville Public Television"
        width={600}
        height={150}
      />

      <div className="flex flex-row">
        <div className=" bg-slate-100 bg-opacity-10 p-4 rounded-md flex flex-col items-center">
          <SubTitle textColor="slate-50" classNames="mb-3">ARTICLES</SubTitle>
          <ul className="list-disc list-inside w-[600px] max-sm:w-[300px] text-slate-50 break-words">
            <li><a className="underline text-pandoras-orange hover:text-pandoras-lavender"
              href="https://pandorasawakening.com/blog"
              target="_blank"
            >
              https://pandorasawakening.com/blog
            </a></li>
            <li><a className="underline text-pandoras-orange hover:text-pandoras-lavender"
              href="https://www.cnn.com/2019/04/26/health/post-sex-kerner/index.html"
              target="_blank"
            >
              https://www.cnn.com/2019/04/26/health/post-sex-kerner/index.html
            </a></li>
            <li><a className="underline text-pandoras-orange hover:text-pandoras-lavender"
              href="https://www.cnn.com/2019/04/04/health/condom-sex-kerner/index.html"
              target="_blank"
            >
              https://www.cnn.com/2019/04/04/health/condom-sex-kerner/index.html
            </a></li>
            <li><a className="underline text-pandoras-orange hover:text-pandoras-lavender"
              href="https://www.cnn.com/2019/04/04/health/condom-sex-kerner/index.html"
              target="_blank"
            >
              https://buzz.pureromance.com/2020/05/post-quarantine/
            </a></li>
          </ul>
        </div>
      </div>
      
      <div className="flex flex-row">
        <div className=" bg-slate-100 bg-opacity-10 p-4 rounded-md flex flex-col items-center">
          <SubTitle textColor="slate-50" classNames="mb-3">PODCASTS</SubTitle>
          <ul className="list-disc list-inside w-[600px] max-sm:w-[300px] break-words text-slate-50">
            <li><a className="underline text-pandoras-orange hover:text-pandoras-lavender"
              href="https://soundcloud.com/user-698691361/episode-0S#t=0:00"
              target="_blank"
            >
              https://soundcloud.com/user-698691361/episode-0S#t=0:00
            </a></li>
            <li><a className="underline text-pandoras-orange hover:text-pandoras-lavender"
              href="https://www.theblackguywhotips.com/2018/07/"
              target="_blank"
            >
              https://www.theblackguywhotips.com/2018/07/
            </a></li>
            <li><a className="underline text-pandoras-orange hover:text-pandoras-lavender"
              href="https://www.podchaser.com/podcasts/life-hacks-for-entrepreneurs-p-670949?"
              target="_blank"
            >
              https://www.podchaser.com/podcasts/life-hacks-for-entrepreneurs-p-670949?
            </a></li>
            <li><a className="underline text-pandoras-orange hover:text-pandoras-lavender"
              href="https://podcasts.apple.com/us/podcast/how-to-skyrocket-intimacy-in-your-relationship-with/id1478520557?i=1000471311718"
              target="_blank"
            >
              https://podcasts.apple.com/us/podcast/how-to-skyrocket-intimacy-in-your-relationship-with/id1478520557?i=1000471311718
            </a></li>
          </ul>
        </div>
      </div>
      
      <div className="flex flex-row">
        <div className=" bg-slate-100 bg-opacity-10 p-4 rounded-md flex flex-col items-center">
          <SubTitle textColor="slate-50" classNames="mb-3">TV APPEARANCE</SubTitle>
          <ul className="list-disc list-inside w-[600px] max-sm:w-[300px] break-words text-slate-50">
            <li><a className="underline text-pandoras-orange hover:text-pandoras-lavender"
              href="https://video.wnpt.org/video/companionship-intimacy-aging-matters-npt-reports-rouqdn/"
              target="_blank"
            >
              https://video.wnpt.org/video/companionship-intimacy-aging-matters-npt-reports-rouqdn/
            </a></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-row">
        <div className=" bg-slate-100 bg-opacity-10 p-4 rounded-md flex flex-col items-center">
          <SubTitle textColor="slate-50" classNames="mb-3">LIVE SPEAKING ENGAGEMENTS</SubTitle>
          <ul className="list-disc list-inside w-[600px] max-sm:w-[300px] break-words text-slate-50">
            <li><a className="underline text-pandoras-orange hover:text-pandoras-lavender"
              href="https://vimeo.com/441206152"
              target="_blank"
            >
              https://vimeo.com/441206152
            </a></li>
            <li><a className="underline text-pandoras-orange hover:text-pandoras-lavender"
              href="https://www.instagram.com/tv/CnPrt8DKTDq/?igshid=YmMyMTA2M2Y%3D"
              target="_blank"
            >
              https://www.instagram.com/tv/CnPrt8DKTDq/?igshid=YmMyMTA2M2Y%3D
            </a></li>
            <li><a className="underline text-pandoras-orange hover:text-pandoras-lavender"
              href="https://www.instagram.com/tv/CoFvul6KFZd/?igshid=YmMyMTA2M2Y="
              target="_blank"
            >
              https://www.instagram.com/tv/CoFvul6KFZd/?igshid=YmMyMTA2M2Y=
            </a></li>
          </ul>
        </div>
      </div>


      <BtnCTA ariaLabel="Schedule Appointment" classNames="px-2 mt-4 text-white" fontSize="22px" href={scheduleUrl} target="_blank">
        SCHEDULE APPOINTMENT
      </BtnCTA>

      <div className="flex flex-col items-center">
        <BtnDownloadWrapper>
          <a download={true} href="/files/Burwell_CV_Main.pdf" className="hover:text-pandoras-lavender underline">
            DOWNLOAD Renee CV
          </a>
        </BtnDownloadWrapper>
        <BtnDownloadWrapper>
          <a download={true} href="/files/Burwell_CV_Main.pdf">
            <Image
              src="/download-icon.png"
              alt="download renee cv icon"
              width={64}
              height={64}
            />
          </a>
        </BtnDownloadWrapper>
      </div>
    </Section>
  )
}
