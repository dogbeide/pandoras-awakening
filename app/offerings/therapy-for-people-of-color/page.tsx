import Image from "next/image"
import { Metadata } from "next"

import Section from "@/app/components/general/Section"
import SubTitle from "@/app/components/general/SubTitle"
import Title from "@/app/components/text/Title"
import TextSection from "@/app/components/general/TextSection"
import BtnCTA from "@/app/components/buttons/btn-cta"
import { scheduleUrl } from "@/app/lib/links-data"

export const metadata: Metadata = {
  title: "Therapy For People Of Color - Pandora's Awakening",
  description: "Pandora's Awakening helps those with dysfunctional patterns and provides tools to live healthy mental and sex lives in the Nashville area.",
};

export default function Page() {
  return (
    <Section classNames="bg-pandoras-purple [&>SubTitle]:text-pandoras-orange [&>*]:mb-5 
      leading-7 [&>p]:text-white [&>h3]:text-white [&>h3]:text-xl [&>ul]:text-white"
    >
      <Title classNames="text-white">
        Therapy For People Of Color
      </Title>
      <SubTitle>
        <span style={{ fontWeight: 400 }}>
          Is It Difficult For You To Access Culturally Competent Mental
          Healthcare?&nbsp;
        </span>
      </SubTitle>
      <p>
        <span style={{ fontWeight: 400 }}>
          Are you Black, Indigenous, or a person of color (BIPOC) and in search of
          a culturally sensitive and effective therapist? Have symptoms of anxiety
          or depression—such as hopelessness, worry, and fear—negatively impacted
          your life? Or are you struggling to adjust to a big transition?
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>
          Perhaps you’ve experienced a sudden shift in your day-to-day routine,
          whether that’s due to new developments in your work, relationship
          changes, or a sudden flux of your everyday circumstances. Maybe you have
          recently endured one or many losses that have caused you to feel a heavy
          burden of grief.&nbsp;
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>
          It may be that depression and anxiety have followed you for much of your
          life. Perhaps you find it hard to concentrate or feel motivated, or
          maybe you often feel restless, fearful, and agitated. There may even be
          an instance of unresolved trauma from your past that has caused you to
          feel hypervigilant or unsafe.&nbsp;
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>
          Alternatively, you may be in a relationship that’s struggling. You and
          your significant other may often argue or experience breakdowns in
          communication. If this is the case, the stress generated in your
          relationship has likely infiltrated other areas of your life, further
          exacerbating symptoms of anxiety, depression, or distress.&nbsp;
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>
          As people of color, we are also subjected to more systemic bias and
          trauma. And despite the struggles we experience with our mental and
          emotional health, it can be difficult to feel seen and heard by
          clinicians or therapists who fail to understand our perspective.&nbsp;
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>
          In therapy at Pandora’s Awakening, people of color can feel confident
          that they are receiving effective support and guidance from culturally
          sensitive and knowledgeable providers.&nbsp;
        </span>
      </p>
      <p>&nbsp;</p>
      <SubTitle>
        <span style={{ fontWeight: 400 }}>
          The Field Of Therapy Has Historically Discounted The BIPOC
          Experience&nbsp;
        </span>
      </SubTitle>
      <p>
        <span style={{ fontWeight: 400 }}>
          Though the field of psychology has become more diverse over time, it was
          estimated as of 2013 that only about 16 percent of mental health
          professionals came from racially or ethnically diverse backgrounds
          <sup>1</sup>.
        </span>
        <span style={{ fontWeight: 400 }}>
          {" "}
          That’s hardly proportionate to the nearly 40 percent of Americans who
          identify as non-white<sup>2</sup>.
        </span>
      </p>
      <span style={{ fontWeight: 400 }}>
        <img
          // decoding="async"
          // fetchpriority="high"
          alt="Pandoras-Awakening-Therapy-one-woman-on-sofa-speaking-to-woman-sitting-on-chair"
          width={300}
          height={200}
          data-srcset="https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/06/Pandoras-Awakening-Therapy-one-woman-on-sofa-speaking-to-woman-sitting-on-chair-300x200.jpg?lossy=1&strip=1&webp=1 300w, https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/06/Pandoras-Awakening-Therapy-one-woman-on-sofa-speaking-to-woman-sitting-on-chair-280x187.jpg?lossy=1&strip=1&webp=1 280w, https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/06/Pandoras-Awakening-Therapy-one-woman-on-sofa-speaking-to-woman-sitting-on-chair.jpg?lossy=1&strip=1&webp=1 600w"
          data-src="https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/06/Pandoras-Awakening-Therapy-one-woman-on-sofa-speaking-to-woman-sitting-on-chair-300x200.jpg?lossy=1&strip=1&webp=1"
          data-sizes="(max-width: 300px) 100vw, 300px"
          className="size-medium wp-image-16382 alignleft ls-is-cached lazyloaded"
          src="https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/06/Pandoras-Awakening-Therapy-one-woman-on-sofa-speaking-to-woman-sitting-on-chair-300x200.jpg?lossy=1&strip=1&webp=1"
          sizes="(max-width: 300px) 100vw, 300px"
          srcSet="https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/06/Pandoras-Awakening-Therapy-one-woman-on-sofa-speaking-to-woman-sitting-on-chair-300x200.jpg?lossy=1&strip=1&webp=1 300w, https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/06/Pandoras-Awakening-Therapy-one-woman-on-sofa-speaking-to-woman-sitting-on-chair-280x187.jpg?lossy=1&strip=1&webp=1 280w, https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/06/Pandoras-Awakening-Therapy-one-woman-on-sofa-speaking-to-woman-sitting-on-chair.jpg?lossy=1&strip=1&webp=1 600w"
        />
      </span>
      <p>
        <span style={{ fontWeight: 400 }}>
          Unfortunately, this lack of representation in the field contributes to
          the mental health challenges experienced by the BIPOC population and
          mirrors the lack of representation we observe in other parts of society.
          Because individuals of color are often mis- or under-represented in the
          media, for instance, racial bias, race-related trauma, and stereotypes
          are further perpetuated.&nbsp;
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>
          Moreover, White supremacy runs rampant throughout our medical and
          education systems. As a result, individuals of color often do not
          receive culturally competent and effective healthcare—including mental
          health support—and we end up being harmed by the systems intended to
          protect and heal our pain.&nbsp;
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>As humans, </span>
        <i>
          <span style={{ fontWeight: 400 }}>all </span>
        </i>
        <span style={{ fontWeight: 400 }}>
          of us face hardships and challenges. Whether we are struggling to meet
          the cultural, educational, or religious expectations of our families or
          experiencing individual symptoms of anxiety, depression, or unresolved
          trauma, we deserve to receive culturally competent care and support. And
          within the BIPOC community in particular, we continue to be surrounded
          by a collective grief fomented by the continued violence and oppression
          demonstrated toward us.
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>
          With a BIPOC therapist, however, you can explore both the communal and
          individual mental health struggles that are creating obstacles in your
          daily life.
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>&nbsp;&nbsp;</span>
      </p>
      <SubTitle>
        <span style={{ fontWeight: 400 }}>
          Therapy For People Of Color Honors Your Unique Identity And Experience
        </span>
      </SubTitle>
      <p>
        <span style={{ fontWeight: 400 }}>
          No matter your circumstances, it can be difficult to find a safe,
          confidential atmosphere that is yours—and yours alone—to explore your
          experiences and emotions. Yet therapy for POC is designed to provide you
          with a space in which you can feel secure to become emotionally
          vulnerable as you’re supported by a clinician who is tailoring the
          therapeutic experience to meet your needs.&nbsp;
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>
          After a free, 15-minute consultation during which you can learn more
          about what therapy for people of color entails and how we can help,
          you’ll be matched with a counselor who will then initiate the intake
          process. This process typically lasts about three sessions and lays the
          foundation for what you will explore and target in therapy. Throughout
          these first sessions, your therapist will generally gather information
          about your history, presenting problems, and goals for BIPOC therapy.{" "}
          <img
            // decoding="async"
            alt="Pandoras-Awakening-Man-in-park-looking-happy"
            width={200}
            height={300}
            data-srcset="https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/06/Pandoras-Awakening-Man-in-park-looking-happy-200x300.jpg?lossy=1&strip=1&webp=1 200w, https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/06/Pandoras-Awakening-Man-in-park-looking-happy-125x187.jpg?lossy=1&strip=1&webp=1 125w, https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/06/Pandoras-Awakening-Man-in-park-looking-happy.jpg?lossy=1&strip=1&webp=1 400w"
            data-src="https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/06/Pandoras-Awakening-Man-in-park-looking-happy-200x300.jpg?lossy=1&strip=1&webp=1"
            data-sizes="(max-width: 200px) 100vw, 200px"
            className="size-medium wp-image-16384 alignright lazyloaded"
            src="https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/06/Pandoras-Awakening-Man-in-park-looking-happy-200x300.jpg?lossy=1&strip=1&webp=1"
            sizes="(max-width: 200px) 100vw, 200px"
            srcSet="https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/06/Pandoras-Awakening-Man-in-park-looking-happy-200x300.jpg?lossy=1&strip=1&webp=1 200w, https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/06/Pandoras-Awakening-Man-in-park-looking-happy-125x187.jpg?lossy=1&strip=1&webp=1 125w, https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/06/Pandoras-Awakening-Man-in-park-looking-happy.jpg?lossy=1&strip=1&webp=1 400w"
          />
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>
          As your therapist gets to know you better, they will be able to
          customize your treatment to target symptoms of anxiety, depression, or
          unresolved trauma and help you to build specific skills for coping. You
          will learn how to be more proactive and preventative in your daily life
          so that you can tolerate stress and manage emotions more effectively.
          And you’ll also be given an opportunity to understand more about the
          patterns that are ultimately leading to destructive behaviors.&nbsp;
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>
          The vast majority of our therapists are trained in Eye Movement
          Desensitization and Reprocessing (EMDR), which gently targets trauma,
          and Cognitive Behavioral Therapy (CBT), which is highly effective for
          resolving distorted thinking and behaviors. And for couples in
          particular, we may utilize the IMAGO, Bader’s Couple’s Institute,
          Psychobiological Approach to Couple Therapy (PACT), and the demonstrated
          Gottman Method to help POC resolve communication and intimacy issues in
          their partnerships.&nbsp;
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>
          In addition, your therapist may encourage techniques for grounding, such
          as mindfulness and deep breathing to promote relaxation. With the skills
          you gain in therapy for people of color, you will be better prepared to
          cope with distress and communicate more effectively. And, over time,
          you’re likely to see symptoms of anxiety and depression dramatically
          decrease.&nbsp;
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>
          Our clinicians at Pandora’s Awakening are solution-oriented and draw
          from a number of approaches to treat the mental health issues often
          experienced by the BIPOC population. As therapists of color, we can help
          you to create a new and refreshed lens with which to address your daily
          stressors. We understand your traumas and frustrations on a fundamental
          level and can thus offer lasting and tailored solutions.&nbsp;
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>
          By participating in therapy for people of color at Pandora’s Awakening,
          you are giving yourself an opportunity to become unapologetically
          authentic—and we look forward to supporting your healing and
          transformation.&nbsp;
        </span>
      </p>
      <p>&nbsp;</p>
      <h3>
        <i>
          <span style={{ fontWeight: 400 }}>
            Perhaps you’re considering therapy for people of color, but you have
            some concerns…
          </span>
        </i>
      </h3>
      <h3>
        <i>
          <span style={{ fontWeight: 400 }}>
            I’m concerned about the cost of BIPOC therapy.&nbsp;
          </span>
        </i>
      </h3>
      <p>
        <span style={{ fontWeight: 400 }}>
          We aim to make therapy accessible and affordable for all
          people—especially our clients of color. Therefore, we offer quite a few
          options to offset costs. Our interns, for instance, are able to offer
          counseling at a reduced rate. And part of the intake process is ensuring
          that your financial limitations will be honored. In addition, we do take
          the majority of insurance plans. Please{" "}
        </span>
        <a href="https://pandorasawakening.com/consultation/">
          <span style={{ fontWeight: 400 }}>contact us</span>
        </a>
        <span style={{ fontWeight: 400 }}>
          {" "}
          to learn more about if the cost of therapy will be covered by your
          provider.&nbsp;
        </span>
      </p>
      <p>&nbsp;</p>
      <h3>
        <i>
          <span style={{ fontWeight: 400 }}>
            I’m worried that the information I share in therapy won’t be kept
            private.&nbsp;
          </span>
        </i>
      </h3>
      <p>
        <span style={{ fontWeight: 400 }}>
          Our goal as therapists is to make sure that you feel secure in and
          trusting of the therapeutic process. Thus, we would never share any of
          your personal information without your permission. We are a
          HIPAA-compliant practice, meaning that{" "}
        </span>
        <i>
          <span style={{ fontWeight: 400 }}>all</span>
        </i>
        <span style={{ fontWeight: 400 }}>
          {" "}
          of what you share during sessions will be kept in confidence.&nbsp;
        </span>
      </p>
      <p>&nbsp;</p>
      <h3>
        <i>
          <span style={{ fontWeight: 400 }}>
            As a POC, I have had bad experiences in therapy in the past.
          </span>
        </i>
      </h3>
      <p>
        <span style={{ fontWeight: 400 }}>
          We are therapists of color and, as such, understand that the field of
          psychology has historically been unaccommodating to the BIPOC community.
          Yet all of us are expertly trained and have years of experience
          providing culturally competent care. We recognize that there is no such
          thing as a one-size-fits-all treatment, no matter if you are struggling
          with depression, anxiety, trauma, or relationship setbacks. Therefore,
          we tailor therapy sessions for people of color to meet the needs of each
          individual.&nbsp;
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>
          If, at any time, you feel as though you are not getting adequate care,
          we encourage you to reach out and tell us what we can do to make you
          feel better supported. We are happy to pair you with another Pandora’s
          Awakening clinician who is better suited to meet your needs or refer you
          through our vast network of therapists for POC to find effective
          support.&nbsp;
        </span>
      </p>
      <p>&nbsp;</p>

      <img
        // decoding="async"
        style={{ fontSize: 16 }}
        alt="Pandoras-Awakening-Woman-sitting-looking-thoughtful"
        width={300}
        height={200}
        data-srcset="https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/06/Pandoras-Awakening-Woman-sitting-looking-thoughtful-300x200.jpg?lossy=1&strip=1&webp=1 300w, https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/06/Pandoras-Awakening-Woman-sitting-looking-thoughtful-280x187.jpg?lossy=1&strip=1&webp=1 280w, https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/06/Pandoras-Awakening-Woman-sitting-looking-thoughtful.jpg?lossy=1&strip=1&webp=1 600w"
        data-src="https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/06/Pandoras-Awakening-Woman-sitting-looking-thoughtful-300x200.jpg?lossy=1&strip=1&webp=1"
        data-sizes="(max-width: 300px) 100vw, 300px"
        className="size-medium wp-image-16385 alignleft lazyload"
        src="https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/06/Pandoras-Awakening-Woman-sitting-looking-thoughtful-300x200.jpg?lossy=1&strip=1&webp=1"
      />

      <SubTitle>
        <span style={{ fontWeight: 400 }}>
          Feel Empowered To Be Wholeheartedly YOU
        </span>
      </SubTitle>

      <p>
        <span style={{ fontWeight: 400 }}>
          If you identify as BIPOC and are in need of mental health support, the
          therapists at Pandora’s Awakening specialize in therapy for people of
          color. To schedule a free, 15-minute consultation,{" "}
        </span>
        <a href="https://pandorasawakening.com/consultation/">
          <span style={{ fontWeight: 400 }}>please fill out this form</span>
        </a>
        <span style={{ fontWeight: 400 }}> and we will be in touch.&nbsp;</span>
      </p>

      <BtnCTA ariaLabel="Schedule Appointment" classNames="px-2 mt-4 text-white" fontSize="22px" href={scheduleUrl} target="_blank">
        SCHEDULE APPOINTMENT
      </BtnCTA>
      <span></span>
      <p>
        <sup>1 </sup>
        <a
          href="https://www.apa.org/workforce/publications/13-demographics/index"
          className="underline text-pandoras-orange hover:text-pandoras-lavender"
          target="_blank"
          rel="noopener"
        >
          https://www.apa.org/workforce/publications/13-demographics/index
        </a>
      </p>
      <p>
        <sup>2 </sup>
        <a
          href="https://www.census.gov/quickfacts/fact/table/US/PST045219"
          className="underline text-pandoras-orange hover:text-pandoras-lavender"
          target="_blank"
          rel="noopener"
        >
          https://www.census.gov/quickfacts/fact/table/US/PST045219
        </a>
      </p>
    </Section>
  )
}
