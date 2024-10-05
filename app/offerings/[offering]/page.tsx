import { notFound } from "next/navigation";
// import { client } from "@/app/lib/apollo";

const offeringSlugs = [
  'sex-therapy',
  'couples-therapy',
  'psychedelic-assisted-therapy',
  'therapy-for-people-of-color',
  'trauma-therapy',
  'edmr-therapy',
  'concierge-counseling',
  'intensive-therapy',
  'musicares',
  'kundalini-yoga',
  'media-speaking-engagements',
];

const offeringSlugById = {
  16471: 'sex-therapy',
  16362: 'therapy-for-people-of-color',
  16454: 'trauma-therapy',
  15589: 'intensive-therapy-packages',
  15594: 'musicares',
}

export default function Page({ params } : { params: { offering: string } }) {
  const slug = params.offering;
  const pageExists = offeringSlugs.includes(slug);

  if(pageExists) {
    return (
      <div>{slug}</div>
    )
  } else {
    return (
      notFound()
    )
  }
}
