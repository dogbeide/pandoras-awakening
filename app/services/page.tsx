import { squarePeg, montserrat } from "../lib/fonts"
import Service from "../components/cards/Service"
import services from "../lib/services-data"

export default function Page() {

  return (
    <div id="home-services" className={`px-20 max-md:px-10 max-sm:px-6 py-7 bg-pandoras-purple ${montserrat.className}`}>
      <div className={`${squarePeg.className} text-center max-md:text-5xl text-6xl text-slate-100 mb-5 max-sm:mb-6`}>
        Our Services
      </div>
      <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 max-lg:gap-5 gap-8">
        {services.map((service) => (
          <Service
            key={service.title}
            title={service.title}
            desc={service.desc}
            href={service.href}
            imgUrl={service.imgUrl}
          />
        ))

        }
        {/* <Service 
          href='/services/sex-therapy' 
          imgUrl='/Renee-Burwell-Sex-Therapy-thumbnail.webp' 
          title='SEX THERAPY' 
          desc={`
          If you are struggling with issues of sexual intimacy or desire, 
          we can help you chart a path forward in your sex life.
        `} />
        <Service 
          href='/services/couples-therapy' 
          imgUrl='/Renee-Burwell-couples-therapy-thumbnail-min.webp'
          title='COUPLES THERAPY' 
          desc={`
          If your relationship struggles from ongoing communication issues or conflict, 
          we can help you find common ground.
        `} />
        <Service 
          href='/services/therapy-for-people-of-color' 
          imgUrl='/Pandoras-Awakening-Woman-therapyforpeopleofcolor-thumbnail.webp' 
          title='THERAPY FOR PEOPLE OF COLOR' 
          desc={`
          If you identify as BIPOC and need mental health support, 
          we specialize in therapy for people of color.
        `} />
        <Service 
          href='/services/trauma-therapy' 
          imgUrl='/Renee-Burwell-Trauma-1-min-150x150.webp' 
          title='TRAUMA THERAPY' 
          desc={`
          If you or your child live with ongoing distress as a result of unresolved trauma, 
          you don’t have to suffer in silence.
        `} />
        <Service 
          href='/services/edmr-therapy' 
          imgUrl='/cosmic.webp' 
          title='EDMR THERAPY' 
          desc={`An integrative psychotherapy approach that has been extensively 
          researched and proven effective for the treatment of trauma.
        `} /> */}
      </div>
    </div>
  )
}