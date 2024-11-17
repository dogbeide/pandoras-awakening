import { Metadata } from "next"

import { montserrat } from "../lib/fonts"
import { offeringsPreview } from "../lib/offerings-data"
import OfferingCard from "../components/cards/OfferingCard"
import Title from "../components/text/Title"

export const metadata: Metadata = {
  title: "Offerings - Pandora's Awakening",
  description: "Pandora's Awakening helps those with dysfunctional patterns and provides tools to live healthy mental and sex lives in the Nashville area.",
};

export default function Page() {

  return (
    <div id="home-offerings" className={`px-20 max-md:px-10 max-sm:px-6 py-7 bg-pandoras-purple ${montserrat.className}`}>
      <Title classNames="text-white">All Offerings</Title>
      <div className="flex justify-center">
        <span className="text-slate-300">(Servicing only clients 18 and older)</span>
      </div>
      <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 max-lg:gap-5 gap-8">
        {offeringsPreview.map((offering) => (
          <OfferingCard
            key={offering.title}
            title={offering.title}
            desc={offering.desc}
            href={offering.href}
            imgUrl={offering.imgUrl}
          />
        ))}
      </div>
    </div>
  )
}