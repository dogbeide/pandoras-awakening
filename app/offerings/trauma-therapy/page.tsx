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
      <Title classNames="text-white">Trauma Therapy</Title>

      <SubTitle>
        <span style={{ fontWeight: 400 }}>
          Is It Difficult To Feel Safe, Secure, And Present In Your
          Surroundings?&nbsp;
        </span>
      </SubTitle>

      <p>
        <span style={{ fontWeight: 400 }}>
          Do you or your child struggle with constant fear and distress? Are you
          holding onto some element of the past that is making it difficult to move
          forward? Is unresolved trauma preventing you from being able to be present
          in your daily life?&nbsp;
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>
          You may experience constant anxiety. Fearing the worst, you may have
          trained your mind to always be “on” or hypervigilant about your
          surroundings. Maybe you have started to make decisions based on fear
          rather than confidence because you’re always worried that something bad
          might happen.&nbsp;
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>
          Perhaps you struggle with symptoms, such as confusion or lack of focus.
          Maybe you disassociate from your surroundings during moments of distress,
          and feel a general sense of disconnection or numbness.&nbsp;
        </span>
      </p>
      <p>
        <img
          // decoding="async"
          // fetchpriority="high"
          alt="Person dressed smartly smiling at the camera"
          width={300}
          height={200}
          data-srcset="https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/07/Renee-Burwell-Trauma-1-min-300x200.jpg?lossy=1&strip=1&webp=1 300w, https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/07/Renee-Burwell-Trauma-1-min-280x187.jpg?lossy=1&strip=1&webp=1 280w, https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/07/Renee-Burwell-Trauma-1-min.jpg?lossy=1&strip=1&webp=1 600w"
          data-src="https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/07/Renee-Burwell-Trauma-1-min-300x200.jpg?lossy=1&strip=1&webp=1"
          data-sizes="(max-width: 300px) 100vw, 300px"
          className="size-medium wp-image-16455 alignleft lazyloaded"
          src="https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/07/Renee-Burwell-Trauma-1-min-300x200.jpg?lossy=1&strip=1&webp=1"
          sizes="(max-width: 300px) 100vw, 300px"
          srcSet="https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/07/Renee-Burwell-Trauma-1-min-300x200.jpg?lossy=1&strip=1&webp=1 300w, https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/07/Renee-Burwell-Trauma-1-min-280x187.jpg?lossy=1&strip=1&webp=1 280w, https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/07/Renee-Burwell-Trauma-1-min.jpg?lossy=1&strip=1&webp=1 600w"
        />
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>
          As the result of an inability to connect, your relationships are likely
          suffering or strained. Perhaps you struggle with mood swings or angry
          outbursts that seem to come out of nowhere. Or it could be that you have
          trouble feeling safe and secure with others.&nbsp;
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>
          If you have experienced any instance of emotional, physical, sexual,
          mental, or verbal abuse, or if you survived abuse and neglect as a child,
          you have likely put protective measures in place that are keeping you from
          being fully present in your life and relationships. And if your trauma is
          the result of an accident or life-and-death situation, your need to be
          hyper-aware of potential dangers is probably preventing you from feeling
          relaxed and at ease.&nbsp;
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>
          Yet, trauma is not always the result of a single, distressing event;
          oppressive systems can traumatize individuals across generations. At
          Pandora’s Awakening, we recognize the value of therapy in allowing all of
          our clients—across the spectrum of age, gender, race, and socioeconomic
          status—to explore their trauma and experiences.&nbsp;
        </span>
      </p>
      <p>&nbsp;</p>
      <SubTitle>
        <span style={{ fontWeight: 400 }}>Trauma Has Many Faces</span>
      </SubTitle>
      <p>
        <span style={{ fontWeight: 400 }}>
          For a long time, it was understood that trauma affected only a small
          subset of people who survived an attack, an accident, or an instance of
          abuse. However, as a society, we are now coming to acknowledge the
          far-reaching definitions and implications of trauma. In the process, we
          are making room for more narratives that allow us to better understand the
          effects of internalized fear and distress across cultures.&nbsp;
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>
          Take, for example, racial trauma, which is coming more and more to the
          center of the American mental health narrative. The last several years
          have seen further research done on instances of trauma within marginalized
          communities, underscoring the disproportionate harassment, violence, and
          abuse suffered by non-white, non-cis, non-heteronormative, and
          non-Christian populations.<sup>1</sup>
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>
          We know now that people of color experience traumatization and
          re-traumatization at higher rates than their white counterparts due to
          both direct and indirect instances of racism. This includes d
        </span>
        iscrimination, media depictions of racism and violence against Black
        individuals (including police brutality), and exposure to racial
        stereotypes.<sup>2</sup>
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>
          Yet, this is just one example of how trauma impacts marginalized
          communities; there are many more.&nbsp;
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>
          Women, for instance, have long been an oppressed population in America,
          experiencing sexual assault at a rate of about 15 percent (compared to
          men, who suffer sexual assault at a rate of 3 percent) within the general
          population.<sup>3</sup>
        </span>
        <span style={{ fontWeight: 400 }}>
          {" "}
          And there are many systems at play—including cultural, legal, and
          religious ones—that reinforce the burden of trauma impacting all of these
          marginalized communities at alarming rates.&nbsp;
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>
          Whether your trauma stems from a painful instance from your past or from
          ongoing and intergenerational subjugation to oppressive forces, you
          deserve to heal. With therapy for trauma, you can learn more about the
          impact that distress and oppressive systems are having on you in a
          supportive environment where you will be seen, valued, and uplifted.&nbsp;
        </span>
      </p>
      <p>&nbsp;</p>
      <SubTitle>
        <span style={{ fontWeight: 400 }}>
          Therapy Gives You The Perspective And Tools Needed To Overcome Trauma
        </span>
      </SubTitle>
      <p>
        <span style={{ fontWeight: 400 }}>
          With all of the growing research into the field of trauma, it’s become
          increasingly evident that supportive, nonjudgmental, and evidence-based
          treatment can greatly help individuals struggling with the lingering
          effects of internalized distress.<sup>4</sup>
        </span>
        <span style={{ fontWeight: 400 }}>
          {" "}
          At Pandora’s Awakening, our clinicians provide an unbiased and
          confidential atmosphere where you can learn tools for overcoming the
          challenges presented by unresolved trauma.&nbsp;
        </span>
      </p>
      <p>
        <img
          // decoding="async"
          alt="Young child with backpack smiling at the camera"
          width={300}
          height={225}
          data-srcset="https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/07/Renee-Burwell-Trauma-3-min-300x225.jpg?lossy=1&strip=1&webp=1 300w, https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/07/Renee-Burwell-Trauma-3-min-510x382.jpg?lossy=1&strip=1&webp=1 510w, https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/07/Renee-Burwell-Trauma-3-min-250x187.jpg?lossy=1&strip=1&webp=1 250w, https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/07/Renee-Burwell-Trauma-3-min.jpg?lossy=1&strip=1&webp=1 600w"
          data-src="https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/07/Renee-Burwell-Trauma-3-min-300x225.jpg?lossy=1&strip=1&webp=1"
          data-sizes="(max-width: 300px) 100vw, 300px"
          className="size-medium wp-image-16457 alignright lazyloaded"
          src="https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/07/Renee-Burwell-Trauma-3-min-300x225.jpg?lossy=1&strip=1&webp=1"
          sizes="(max-width: 300px) 100vw, 300px"
          srcSet="https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/07/Renee-Burwell-Trauma-3-min-300x225.jpg?lossy=1&strip=1&webp=1 300w, https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/07/Renee-Burwell-Trauma-3-min-510x382.jpg?lossy=1&strip=1&webp=1 510w, https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/07/Renee-Burwell-Trauma-3-min-250x187.jpg?lossy=1&strip=1&webp=1 250w, https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/07/Renee-Burwell-Trauma-3-min.jpg?lossy=1&strip=1&webp=1 600w"
        />
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>
          Treatment begins with a 15-minute consultation during which
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>
          &nbsp;you or your child will be matched with one
        </span>
        <span style={{ fontWeight: 400 }}>
          &nbsp;of our skilled and empathetic therapists. From there, throughout the
          first few sessions, you will begin the intake process, which will help
          your clinician to understand your trauma and the impact it has had on your
          life. We are trained in trauma-informed, evidence-based models and will be
          careful during this time not to push you too far, too quickly—always
          moving at a pace that works for you.&nbsp;
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>
          Over the course of therapy, your or your child’s therapist will work to
          understand the support systems at play in your life and how they are
          either helping you heal from or contributing to trauma. Armed with this
          information, we will work together to build individually tailored coping
          skills that can help you to calm the nervous system during times of
          distress and create meaningful boundaries within your relationships.&nbsp;
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>
          Our team at Pandora’s Awakening uses trauma-informed models, including Eye
          Movement Desensitization and Reprocessing (EMDR) to target uncomfortable
          memories and associations, ultimately releasing you from the blockages
          that trauma has created in your life. In addition, certain Dialectical
          Behavior Therapy (DBT) skills may be enlisted to help you with distress
          tolerance and emotional regulation.&nbsp;
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>
          While our approach is rooted in evidence-based practices, we also like to
          provide holistic strategies when possible. Depending on your individual
          needs, we may incorporate elements of mindfulness into trauma therapy, as
          well as breathing, meditation, and yoga techniques. These kinds of
          body-based strategies can help you be calm and recenter yourself so that
          you feel distressed less often.&nbsp;
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>
          It’s possible to break free from the memories, sensations, and
          associations that have caused you pain. With help and support, you or your
          child can evolve with and move past your trauma into a new, refreshed
          state of being. Your story does not end with your trauma—at Pandora’s
          Awakening, a new narrative centered around your healing is possible.&nbsp;
        </span>
      </p>
      <p>&nbsp;</p>
      <h3>
        <i>
          <span style={{ fontWeight: 400 }}>
            Perhaps you’re considering therapy for trauma, but you have some
            questions…&nbsp;
          </span>
        </i>
      </h3>
      <h3>
        <i>
          <span style={{ fontWeight: 400 }}>
            I am afraid that talking about my trauma in counseling will just make it
            worse.&nbsp;
          </span>
        </i>
      </h3>
      <p>
        <span style={{ fontWeight: 400 }}>
          It can be daunting and uncomfortable to explore painful elements of your
          past, but our clinicians are specifically trauma-informed for this reason.
          We will never move at a pace that is uncomfortable for you, and we are
          trained to help calm your nervous system in a way that does not
          retraumatize. EMDR is highly effective for removing negative associations
          and blockages—ultimately helping you to feel better in the long run.
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>&nbsp;</span>
      </p>
      <h3>
        <i>
          <span style={{ fontWeight: 400 }}>
            Will I ever heal from this trauma?&nbsp;
          </span>
        </i>
      </h3>
      <p>
        <span style={{ fontWeight: 400 }}>
          It is entirely possible to heal from trauma. In fact, EMDR has proven to
          be highly effective as a treatment for individuals struggling with
          unresolved trauma or Post-Traumatic Stress Disorder (PTSD). Though it may
          seem unlikely to you now that you will be able to clear the negative
          associations and blockages that are a result of trauma, we are confident
          that EMDR and our other body-based approaches will, in time, help you to
          feel more at ease and less distressed by the traumatic event.&nbsp;
        </span>
      </p>
      <p>&nbsp;</p>
      <p>
        <img
          // decoding="async"
          alt='Young woman with tshirt reading "young and powerful"'
          width={231}
          height={300}
          data-srcset="https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/07/Renee-Burwell-Trauma-2-min-231x300.jpg?lossy=1&strip=1&webp=1 231w, https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/07/Renee-Burwell-Trauma-2-min-144x187.jpg?lossy=1&strip=1&webp=1 144w, https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/07/Renee-Burwell-Trauma-2-min.jpg?lossy=1&strip=1&webp=1 462w"
          data-src="https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/07/Renee-Burwell-Trauma-2-min-231x300.jpg?lossy=1&strip=1&webp=1"
          data-sizes="(max-width: 231px) 100vw, 231px"
          className="size-medium wp-image-16456 alignleft lazyloaded"
          src="https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/07/Renee-Burwell-Trauma-2-min-231x300.jpg?lossy=1&strip=1&webp=1"
          sizes="(max-width: 231px) 100vw, 231px"
          srcSet="https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/07/Renee-Burwell-Trauma-2-min-231x300.jpg?lossy=1&strip=1&webp=1 231w, https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/07/Renee-Burwell-Trauma-2-min-144x187.jpg?lossy=1&strip=1&webp=1 144w, https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/07/Renee-Burwell-Trauma-2-min.jpg?lossy=1&strip=1&webp=1 462w"
        />
      </p>
      <h3>
        <i>
          <span style={{ fontWeight: 400 }}>
            I’m concerned that information shared about my trauma in therapy won’t
            be kept confidential.&nbsp;
          </span>
        </i>
      </h3>
      <p>
        <span style={{ fontWeight: 400 }}>
          It is of the utmost priority that you feel safe and confident in the
          therapeutic process, so we would never share any of your personal
          information without your explicit permission. We are HIPAA-compliant,
          which means that everything shared in therapy is kept confidential.&nbsp;
        </span>
      </p>
      <p>&nbsp;</p>
      <SubTitle>
        <span style={{ fontWeight: 400 }}>
          You Can Feel Safe In The World Again
        </span>
      </SubTitle>
      <p>
        <span style={{ fontWeight: 400 }}>
          If you or your child live with ongoing pain and distress as a result of
          unresolved trauma, you don’t have to suffer in silence. Trauma therapy at
          Pandora’s Awakening can help you to cope with and overcome your distress.
          For more information or to schedule a 15-minute consultation,{" "}
        </span>
        <a href="https://pandorasawakening.com/consultation/">
          <span style={{ fontWeight: 400 }}>please fill out this form</span>
        </a>
        <span style={{ fontWeight: 400 }}>. We look forward to serving you.</span>
      </p>

      <BtnCTA ariaLabel="Schedule Appointment" classNames="px-2 mt-4 text-white" fontSize="22px" href={scheduleUrl} target="_blank">
        SCHEDULE APPOINTMENT
      </BtnCTA>

      <p className="text-left w-full">
        <sup>1 </sup>
        <a
          href="https://www.mhanational.org/racial-trauma"
          className="underline text-pandoras-orange hover:text-pandoras-lavender"
          target="_blank"
          rel="noopener"
        >
          https://www.mhanational.org/racial-trauma
        </a>
      </p>
      <p>
        <sup>2 </sup>
        <a
          href="https://www.odu.edu/content/dam/odu/offices/academic-affairs/docs/racial-trauma-and-diversity.pdf"
          className="underline text-pandoras-orange hover:text-pandoras-lavender"
          target="_blank"
          rel="noopener"
        >
          https://www.odu.edu/content/dam/odu/offices/academic-affairs/docs/racial-trauma-and-diversity.pdf
        </a>
      </p>
      <p>
        <sup>3&nbsp;</sup>
        <a
          href="https://www.rainn.org/statistics/scope-problem#:~:text=1%20out%20of%20every%206,completed%2C%202.8%25%20attempted).&text=About%203%25%20of%20American%20men,completed%20rape%20in%20their%20lifetime."
          className="underline text-pandoras-orange hover:text-pandoras-lavender"
          target="_blank"
          rel="noopener"
        >
          https://www.rainn.org/statistics/scope-problem#:~:text=1%20out%20of%20every%206...etc
        </a>
      </p>
      <p>
        <sup>4 </sup>
        <a
          href="https://adaa.org/understanding-anxiety/posttraumatic-stress-disorder-ptsd/treatment-facts"
          className="underline text-pandoras-orange hover:text-pandoras-lavender"
          target="_blank"
          rel="noopener"
        >
          https://adaa.org/understanding-anxiety/posttraumatic-stress-disorder-ptsd/treatment-facts
        </a>
      </p>
    </Section>
  )
}
