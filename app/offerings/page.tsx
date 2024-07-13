import { montserrat } from "../lib/fonts"
import offerings from "../lib/offerings-data"
import OfferingCard from "../components/cards/OfferingCard"
import Title from "../components/text/title"

export default function Page() {

  return (
    <div id="home-offerings" className={`px-20 max-md:px-10 max-sm:px-6 py-7 bg-pandoras-purple ${montserrat.className}`}>
      <Title>Offerings</Title>
      <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 max-lg:gap-5 gap-8">
        {offerings.map((offering) => (
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