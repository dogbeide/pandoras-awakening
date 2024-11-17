import Image from "next/image"
import { Metadata } from "next"

import Section from "@/app/components/general/Section"
import SubTitle from "@/app/components/general/SubTitle"
import Title from "@/app/components/text/Title"
import BtnCTA from "@/app/components/buttons/btn-cta"
import { scheduleUrl } from "@/app/lib/links-data"

export const metadata: Metadata = {
  title: "Couples Therapy - Pandora's Awakening",
  description: "Pandora's Awakening helps those with dysfunctional patterns and provides tools to live healthy mental and sex lives in the Nashville area.",
};

export default function Page() {
  return (
    // <Section classNames="bg-pandoras-purple">
    //   
    //   <SubTitle>Are You Worried That You And Your Partner Aren’t Speaking The Same Emotional Language?</SubTitle>
    //   <TextSection classNames="leading-7">
    //     Do you and your partner struggle with issues of ongoing conflict and miscommunication? Have you found yourself unsatisfied in the areas of intimacy or monogamy within your relationship? Are past traumas or breaches of trust creating a sense of resentment between you and your significant other? 
    //   </TextSection>
    //   <TextSection classNames="leading-7">
    //     <Image
    //       className="float-left mr-5 max-sm:mb-5"
    //       width={300}
    //       height={200}
    //       alt="serious couple looking outside"
    //       src='/couples-therapy-1.webp'
    //     />
    //     <p className="">
    //       You may have trouble communicating your needs. Despite talking about your issues time and time again, there may be problematic patterns or cycles of conflict that remain. Or perhaps there are things you’re curious to explore—such as introducing multiple partners into the marriage or trying new things in your sex life—but you don’t know how to approach the topic with your spouse or partner. 
    //     </p>
    //     <p className="mt-5">
    //       It could also be that a lack of trust has become an ongoing issue in your relationship. Maybe you or your partner have cheated or engaged in some form of extramarital behavior that was not agreed upon. And though you may have decided to stay in the relationship after an instance of betrayal, you could be at a loss for how to repair and heal your connection with one another. 
    //     </p>
    //     <p className="mt-5">
    //       Furthermore, if you or your partner experienced some kind of trauma—either during or before the relationship—you may find it difficult to connect or become intimate. There might be a lingering sense that your significant other just doesn’t “get it” or that you’re having trouble creating meaningful boundaries with one another. As a result, your relationship may be colored by tension and resentment. 
    //     </p>
    //     <p className="mt-5">
    //       In the process of becoming so close to another person, it’s easy to lose sight of your individual needs and how to balance them in the context of a relationship. But in therapy, you can come together as a couple (or as multiple partners) to work through ongoing issues and develop the skills for effective communication. 
    //     </p>
    //   </TextSection>
    //   <SubTitle classNames="mt-5">We’re All Brought Up With Our Own Unique Language And Set Of Expectations</SubTitle>
    //   <TextSection classNames="leading-7">
    //     <p>Just as every individual has their own story, each partnership is unique in its own special way. We all seek different qualities in our partners and have different experiences that we bring to the table. And though there is so much nuance when it comes to the world of dating and romance, many of the persistent issues that couples face—issues of intimacy and communication, for example—are extremely common among all kinds of partnerships. Every relationship requires a delicate balance of power, and that will look very different depending on the needs of the individuals in it.</p>
    //     <p className="mt-5">Moreover, each of us enters relationships with our own background, culture, and set of expectations. If we grew up with stringent cultural standards and strict religious or moral codes, for example, we may have a hard time relating to or understanding a partner who was brought up differently. And because we come from a competitive society—and not a collaborative one—we can end up viewing our relationships in terms of struggle and differences of opinion rather than agreement. </p>
    //     <p className="mt-5">The truth is we all maintain a unique language that is the result of our life experiences. No one is trained to have the same emotional language or upbringing as we do, and it takes a lot of effort to understand ourselves—let alone someone else. </p>
    //     <p className="mt-5">In couples therapy at Pandora’s Awakening, however, you can learn to translate your partner’s experience of the relationship so that you can begin to engage in dialogue rather than conflict.  </p>
    //   </TextSection>
    //   <SubTitle>Couples Therapy Can Help You To Communicate Your Needs And Find Common Ground</SubTitle>
    //   <TextSection classNames="leading-7">
    //     <p>In a world viewed through the skewed lens of comparison culture and social media, it can be difficult to recognize that all relationships take work and come up against their own unique barriers. But in therapy, you can see that what you and your partner experience as a couple is both normal and valid. And once you can begin to accept this truth, you will be more capable of developing the skills and perspective necessary to improve the relationship. </p>
    //     <p className="mt-5">To begin the process of therapy, you and your partner are welcome to schedule a brief consultation to ensure that our team of couples counselors can meet your needs. From there, you will convene with your Pandora’s Awakening therapist for a few introductory sessions. These sessions will function as your intake and give your clinician a solid idea of your needs and goals for couples therapy.</p>
    //   </TextSection>
    //   <TextSection classNames="leading-7">
    //     <Image
    //       className="float-right ml-5 max-sm:mb-5"
    //       width={200}
    //       height={300}
    //       alt="gay couple sitting together"
    //       src='/couples-therapy-2.webp'
    //     />
    //     <p>Over the course of counseling, you will learn more about the specific power struggle that is taking place within your relationship. Drawing from elements of the Psychobiological Approach to Couple Therapy (PACT), you will learn about what is happening in the brain during moments of conflict as well as which attachment patterns (patterns formed during childhood depending on the quality of your relationships with caregivers) lie at the root of your struggle. Using a similar approach of Imago Relationship Therapy (IRT), you and your partner can begin to develop insight into the past traumas you each have experienced, and which are now creating triggers for conflict.</p>
    //     <p className="mt-5">In addition, your therapist will likely give you take-home exercises that are based on Dr. Ellyn Bader’s couples counseling framework. Bader’s approach—also deeply rooted in development and neuroscience—looks at common and specific relationship obstacles in a way that identifies and dissects maladaptive behaviors in the relationship while reinforcing positive ones. </p>
    //     <p className="mt-5">There are any number of patterns, including generational traumas and cycles of conflict, that can keep partners from moving forward together. But with the collaborative approach to couples therapy we utilize at Pandora’s Awakening, you can learn effective communication and conflict-resolution skills, resolve ongoing issues of conflict, and build a deeper connection to each other. </p>
    //     <p className="mt-5"></p>
    //   </TextSection>
    // </Section>

    <Section classNames="bg-pandoras-purple [&>SubTitle]:text-pandoras-orange [&>*]:mb-5 
      leading-7 [&>p]:text-white [&>h3]:text-white [&>h3]:text-xl"
    >
      <Title classNames="text-white">Couples Therapy</Title>
      <SubTitle>
        <span style={{ fontWeight: 400 }}>
          Are You Worried That You And Your Partner Aren’t Speaking The Same
          Emotional Language?&nbsp;
        </span>
      </SubTitle>
      <p>
        <span style={{ fontWeight: 400 }}>
          Do you and your partner struggle with issues of ongoing conflict and
          miscommunication? Have you found yourself unsatisfied in the areas of
          intimacy or monogamy within your relationship? Are past traumas or
          breaches of trust creating a sense of resentment between you and your
          significant other?&nbsp;
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>
          <img
            // decoding="async"
            // fetchpriority="high"
            alt=""
            width={300}
            height={200}
            data-srcset="https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/07/young-serious-looking-couple-looking-out-of-window-min-300x200.jpg?lossy=1&strip=1&webp=1 300w, https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/07/young-serious-looking-couple-looking-out-of-window-min-280x187.jpg?lossy=1&strip=1&webp=1 280w, https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/07/young-serious-looking-couple-looking-out-of-window-min.jpg?lossy=1&strip=1&webp=1 600w"
            data-src="https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/07/young-serious-looking-couple-looking-out-of-window-min-300x200.jpg?lossy=1&strip=1&webp=1"
            data-sizes="(max-width: 300px) 100vw, 300px"
            className="wp-image-16459 size-medium alignleft lazyloaded"
            src="https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/07/young-serious-looking-couple-looking-out-of-window-min-300x200.jpg?lossy=1&strip=1&webp=1"
            sizes="(max-width: 300px) 100vw, 300px"
            srcSet="https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/07/young-serious-looking-couple-looking-out-of-window-min-300x200.jpg?lossy=1&strip=1&webp=1 300w, https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/07/young-serious-looking-couple-looking-out-of-window-min-280x187.jpg?lossy=1&strip=1&webp=1 280w, https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/07/young-serious-looking-couple-looking-out-of-window-min.jpg?lossy=1&strip=1&webp=1 600w"
          />
          You may have trouble communicating your needs. Despite talking about your
          issues time and time again, there may be problematic patterns or cycles of
          conflict that remain. Or perhaps there are things you’re curious to
          explore—such as introducing multiple partners into the marriage or trying
          new things in your sex life—but you don’t know how to approach the topic
          with your spouse or partner.&nbsp;
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>
          It could also be that a lack of trust has become an ongoing issue in your
          relationship. Maybe you or your partner have cheated or engaged in some
          form of extramarital behavior that was not agreed upon. And though you may
          have decided to stay in the relationship after an instance of betrayal,
          you could be at a loss for how to repair and heal your connection with one
          another.&nbsp;
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>
          Furthermore, if you or your partner experienced some kind of trauma—either
          during or before the relationship—you may find it difficult to connect or
          become intimate. There might be a lingering sense that your significant
          other just doesn’t “get it” or that you’re having trouble creating
          meaningful boundaries with one another. As a result, your relationship may
          be colored by tension and resentment.&nbsp;
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>
          In the process of becoming so close to another person, it’s easy to lose
          sight of your individual needs and how to balance them in the context of a
          relationship. But in therapy, you can come together as a couple (or as
          multiple partners) to work through ongoing issues and develop the skills
          for effective communication.&nbsp;
        </span>
      </p>

      <SubTitle>
        <span style={{ fontWeight: 400 }}>
          We’re All Brought Up With Our Own Unique Language And Set Of Expectations
        </span>
      </SubTitle>
      <p>
        <span style={{ fontWeight: 400 }}>
          Just as every individual has their own story, each partnership is unique
          in its own special way. We all seek different qualities in our partners
          and have different experiences that we bring to the table. And though
          there is so much nuance when it comes to the world of dating and romance,
          many of the persistent issues that couples face—issues of intimacy and
          communication, for example—are extremely common among all kinds of
          partnerships. Every relationship requires a delicate balance of power, and
          that will look very different depending on the needs of the individuals in
          it.&nbsp;
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>
          Moreover, each of us enters relationships with our own background,
          culture, and set of expectations. If we grew up with stringent cultural
          standards and strict religious or moral codes, for example, we may have a
          hard time relating to or understanding a partner who was brought up
          differently. And because we come from a competitive society—and not a
          collaborative one—we can end up viewing our relationships in terms of
          struggle and differences of opinion rather than agreement.&nbsp;
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>
          The truth is we all maintain a unique language that is the result of our
          life experiences. No one is trained to have the same emotional language or
          upbringing as we do, and it takes a lot of effort to understand
          ourselves—let alone someone else.&nbsp;
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>
          In couples therapy at Pandora’s Awakening, however, you can learn to
          translate your partner’s experience of the relationship so that you can
          begin to engage in dialogue rather than conflict.&nbsp;&nbsp;
        </span>
      </p>

      <SubTitle>
        <span style={{ fontWeight: 400 }}>
          Couples Therapy Can Help You To Communicate Your Needs And Find Common
          Ground
        </span>
      </SubTitle>
      <p>
        <span style={{ fontWeight: 400 }}>
          In a world viewed through the skewed lens of comparison culture and social
          media, it can be difficult to recognize that{" "}
        </span>
        <i>
          <span style={{ fontWeight: 400 }}>all</span>
        </i>
        <span style={{ fontWeight: 400 }}>
          {" "}
          relationships take work and come up against their own unique barriers. But
          in therapy, you can see that what you and your partner experience as a
          couple is both normal and valid. And once you can begin to accept this
          truth, you will be more capable of developing the skills and perspective
          necessary to improve the relationship.&nbsp;
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>
          To begin the process of therapy, you and your partner are welcome to
          schedule a brief consultation to ensure that our team of couples
          counselors can meet your needs. From there, you will convene with your
          Pandora’s Awakening therapist for a few introductory sessions. These
          sessions will function as your intake and give your clinician a solid idea
          of your needs and goals for couples therapy.
        </span>
      </p>
      <p>
        <img
          // decoding="async"
          alt="Couple sitting on floor leaning towards each other smiling"
          width={200}
          height={300}
          data-srcset="https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/06/Renee-Burwell-couples-therapy-2-min-200x300.jpg?lossy=1&strip=1&webp=1 200w, https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/06/Renee-Burwell-couples-therapy-2-min-124x187.jpg?lossy=1&strip=1&webp=1 124w, https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/06/Renee-Burwell-couples-therapy-2-min.jpg?lossy=1&strip=1&webp=1 399w"
          data-src="https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/06/Renee-Burwell-couples-therapy-2-min-200x300.jpg?lossy=1&strip=1&webp=1"
          data-sizes="(max-width: 200px) 100vw, 200px"
          className="size-medium wp-image-16450 alignright lazyloaded"
          src="https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/06/Renee-Burwell-couples-therapy-2-min-200x300.jpg?lossy=1&strip=1&webp=1"
          sizes="(max-width: 200px) 100vw, 200px"
          srcSet="https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/06/Renee-Burwell-couples-therapy-2-min-200x300.jpg?lossy=1&strip=1&webp=1 200w, https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/06/Renee-Burwell-couples-therapy-2-min-124x187.jpg?lossy=1&strip=1&webp=1 124w, https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/06/Renee-Burwell-couples-therapy-2-min.jpg?lossy=1&strip=1&webp=1 399w"
        />
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>
          Over the course of counseling, you will learn more about the specific
          power struggle that is taking place within your relationship. Drawing from
          elements of the Psychobiological Approach to Couple Therapy (PACT), you
          will learn about what is happening in the brain during moments of conflict
          as well as which attachment patterns (patterns formed duri
        </span>
        <span style={{ fontWeight: 400 }}>
          ng childhood depending on the quality of your relationships with
          caregivers) lie at the root of your struggle. Using a similar approach of
          Imago Relationship Therapy (IRT), you and your partner can begin to
          develop insight into the past traumas you each have experienced, and which
          are now creating triggers for conflict.&nbsp;
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>
          In addition, your therapist will likely give you take-home exercises that
          are based on Dr. Ellyn Bader’s couples counseling framework. Bader’s
          approach—also deeply rooted in development and neuroscience—looks at
          common and specific relationship obstacles in a way that identifies and
          dissects maladaptive behaviors in the relationship while reinforcing
          positive ones.&nbsp;
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>
          There are any number of patterns, including generational traumas and
          cycles of conflict, that can keep partners from moving forward{" "}
        </span>
        <i>
          <span style={{ fontWeight: 400 }}>together. </span>
        </i>
        <span style={{ fontWeight: 400 }}>
          But with the collaborative approach to couples therapy we utilize at
          Pandora’s Awakening, you can learn effective communication and
          conflict-resolution skills, resolve ongoing issues of conflict, and build
          a deeper connection to each other.&nbsp;
        </span>
      </p>
      <h3 />
      <h3>
        <i>
          <span style={{ fontWeight: 400 }}>
            Maybe you’re ready to see a couples counselor, but you still have some
            questions…&nbsp;
          </span>
        </i>
      </h3>
      <h3>
        <i>
          <span style={{ fontWeight: 400 }}>
            I don’t think I can get my partner to agree to see a couples or marriage
            therapist.&nbsp;
          </span>
        </i>
      </h3>
      <p>
        <span style={{ fontWeight: 400 }}>
          If you’re having trouble getting your partner to commit to couples
          therapy, it’s important to try and understand what is holding them back.
          If there are elements of unresolved trauma or attachment injuries from
          their past, it’s likely that they have put up defenses to protect
          themselves that may have worked in childhood but are now creating harm. By
          gently encouraging them to attend therapy, your partner will not only have
          an opportunity to help resolve the issues you face as a couple but also
          the chance to better understand their individual challenges and
          goals.&nbsp;
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>
          If you’re still having trouble getting your partner to agree to
          counseling, we encourage you to take advantage of a free, 15-minute
          consultation with one of our clinicians so that you can strategize about
          how best to encourage your partner to attend couples therapy.&nbsp;
        </span>
      </p>
      <h3 />
      <h3>
        <i>
          <span style={{ fontWeight: 400 }}>
            How long does couples therapy take?&nbsp;
          </span>
        </i>
      </h3>
      <p>
        <span style={{ fontWeight: 400 }}>
          Every couple is different, and each partner will come to counseling with
          their own emotional language and expectations. As such, there is no one
          specific timeline for therapy, though we do find that couples can begin to
          make progress in just a few sessions.&nbsp;
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>
          The time you spend in couples counseling will be largely dependent on the
          effort you make outside of the therapeutic space. If you can commit to
          applying the communication and conflict-resolution techniques in your
          everyday life, you may be surprised at how quickly you see
          improvements.&nbsp;
        </span>
      </p>
      <h3 />
      <h3>
        <i>
          <span style={{ fontWeight: 400 }}>
            We’re an “unconventional” couple—can you help?&nbsp;
          </span>
        </i>
      </h3>
      <p>
        <span style={{ fontWeight: 400 }}>
          Absolutely! Our marriage therapists are highly trained, culturally
          competent professionals who have worked with a wide range of couples and
          partnerships. We have ample experience working with cross-cultural
          relationships and intercultural marriages. And we welcome LGBTQ+ couples
          of all genders as well as couples in polyamorous relationships to
          counseling. No matter what your relationship looks like, we are here to
          provide empathetic and nonjudgmental support to you and your
          partner(s).&nbsp;
        </span>
      </p>

      <p>
        <img
          // decoding="async"
          alt="Couple standing in park, woman holding mans arm and smiling at camera, man facing away and kissing her cheek"
          width={300}
          height={200}
          data-srcset="https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/06/Renee-Burwell-couples-therapy-3-min-300x200.jpg?lossy=1&strip=1&webp=1 300w, https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/06/Renee-Burwell-couples-therapy-3-min-280x187.jpg?lossy=1&strip=1&webp=1 280w, https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/06/Renee-Burwell-couples-therapy-3-min.jpg?lossy=1&strip=1&webp=1 600w"
          data-src="https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/06/Renee-Burwell-couples-therapy-3-min-300x200.jpg?lossy=1&strip=1&webp=1"
          data-sizes="(max-width: 300px) 100vw, 300px"
          className="size-medium wp-image-16451 alignleft lazyloaded"
          src="https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/06/Renee-Burwell-couples-therapy-3-min-300x200.jpg?lossy=1&strip=1&webp=1"
          sizes="(max-width: 300px) 100vw, 300px"
          srcSet="https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/06/Renee-Burwell-couples-therapy-3-min-300x200.jpg?lossy=1&strip=1&webp=1 300w, https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/06/Renee-Burwell-couples-therapy-3-min-280x187.jpg?lossy=1&strip=1&webp=1 280w, https://b1122150.smushcdn.com/1122150/wp-content/uploads/2021/06/Renee-Burwell-couples-therapy-3-min.jpg?lossy=1&strip=1&webp=1 600w"
        />
      </p>
      <SubTitle>
        <span style={{ fontWeight: 400 }}>
          You Can Learn To Speak Your Partner’s Language
        </span>
      </SubTitle>
      <p>
        <span style={{ fontWeight: 400 }}>
          If your relationship struggles from ongoing communication issues or
          conflict, couples therapy at Pandora’s Awakening can help you achieve
          common ground and resolution. To schedule a free, 15-minute consultation,{" "}
        </span>
        <a href={scheduleUrl} className="underline text-pandoras-orange hover:text-pandoras-lavender" target="_blank">
          <span style={{ fontWeight: 400 }}>please fill out this form</span>
        </a>
        <span style={{ fontWeight: 400 }}> and we will contact you.</span>
      </p>
      <BtnCTA ariaLabel="Schedule Appointment" classNames="px-2 mt-4 text-white" fontSize="22px" href={scheduleUrl} target="_blank">
        SCHEDULE APPOINTMENT
      </BtnCTA>
    </Section>
  )
}
