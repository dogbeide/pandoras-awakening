import { Metadata } from "next"

import Title from "../components/text/Title"
import SubscribeModal from "../components/modals/SubscribeModal"
import SocialIcons from "../components/navbar/SocialIcons"
import GeneralSubscribe from "../components/modals/GeneralSubscribe"
import BtnCTA from "../components/buttons/btn-cta"
import Section from "../components/general/Section"
import { squarePeg } from "../lib/fonts"

export const metadata: Metadata = {
  title: "Contact - Pandora's Awakening",
  description: "Pandora's Awakening helps those with dysfunctional patterns and provides tools to live healthy mental and sex lives in the Nashville area.",
};

export default function Page() {

  return (
    <>
      <div className="bg-gradient-to-br from-white via-pandoras-lavender-50 to-white flex flex-col items-center pb-6">
        <Title classNames="mt-3">Contact</Title>

        <div className="flex flex-col items-center w-[500px] max-sm:w-full px-7">

          <div className="col-span-1 flex flex-col items-center text-pandoras-purple text-center mb-6">
            <SocialIcons />
            <br />
            <p>(615) 375-6896</p>
            <p>contact@pandorasawakening.com</p>
            <p className="mt-3 font-semibold">12000 Biscayne Blvd, Miami, FL 33181</p>
          </div>

          <div
            style={{
              textDecoration: "none",
              overflow: "hidden",
              maxWidth: "500px",
              width: "100%",
              height: 500
            }}
          >
            <div
              id="my-map-canvas"
              style={{ height: "100%", width: "100%", maxWidth: "100%" }}
            >
              <iframe
                style={{ height: "100%", width: "100%", border: 0 }}
                frameBorder={0}
                src="https://www.google.com/maps/embed/v1/place?q=12000+Biscayne+Blvd,+Miami,+FL+33181&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              />
            </div>
            <a
              className="googlemaps-made"
              rel="nofollow"
              href="https://www.bootstrapskins.com/themes"
              id="make-map-infor-mation"
            >
              premium bootstrap themes
            </a>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "#my-map-canvas .text-marker{}.map-generator{max-width: 100%; max-height: 100%; background: none;"
              }}
            />
          </div>

        </div>

        <Section classNames="">
          <GeneralSubscribe
            imgUrl="/pexels-tim-douglas-6205772_800x959.jpg"
            imgAlt="open sesame message picture beautiful woman"
          >
            <div className={`${squarePeg.className} font-bold text-3xl pb-4`}>
              Get the Latest News to Your Inbox!
            </div>
            <div>
              Subscribe to our newsletter to receive news and updates.
            </div>
            <form action="" method="POST" className="mt-3 flex flex-col">
              <div>
                <label htmlFor="subscribe-email" className="mr-2 font-bold">Email:</label>
                <input type="email" name="email" id="subscribe-email" className="px-1" />
              </div>
              <BtnCTA type="submit" classNames="text-white text-2xl mt-5 w-24">
                SIGN UP
              </BtnCTA>
            </form>
          </GeneralSubscribe>
        </Section>

      </div>
    </>
  )
}