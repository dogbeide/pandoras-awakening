export type resourceType = {
  name: string,
  imgUrl: string,
  href: string,
}

export const resources = [
  {
    name: "International Society for the Study of Women's Sexual Health",
    imgUrl: "/ISSWSH-color-resource.webp",
    href: "https://www.isswsh.org/",
  },
  {
    name: "International Society for Sexual Medicine",
    imgUrl: "/issm-logo-resource.webp",
    href: "https://www.issm.info/",
  },
  {
    name: "Kinsey Institute",
    imgUrl: "/KinseyLogo74x414-resource.webp",
    href: "https://www.kinseyinstitute.org/index.php",
  },
  {
    name: "Substance Abuse and Mental Health Services Administration",
    imgUrl: "/SAMHSA-logo-blue-resource.webp",
    href: "https://www.samhsa.gov/find-help/national-helpline",
  },
  {
    name: "Alcoholics Anonymous",
    imgUrl: "/aa.org_resource.webp",
    href: "https://www.aa.org/pages/en_US",
  },
  {
    name: "Narcotics Anonymous",
    imgUrl: "/na-resource.webp",
    href: "https://www.na.org/",
  },
  {
    name: "Al-Anon",
    imgUrl: "/AFG_logo_with_slogan1-resource.webp",
    href: "https://al-anon.org/",
  },
  {
    name: "Co-Dependents Anonymous",
    imgUrl: "/codaLogo2-resource.webp",
    href: "http://coda.org/",
  },
  {
    name: "Celebrate Recovery",
    imgUrl: "/cr_web-logo_02-resource.webp",
    href: "https://www.celebraterecovery.com/",
  },
  {
    name: "Scarleteen",
    imgUrl: "/scarleteen-resource.webp",
    href: "https://www.scarleteen.com/",
  },
  {
    name: "Sex, etc.",
    imgUrl: "/sexetc-resource.webp",
    href: "https://sexetc.org/",
  },
  {
    name: "The National Child Traumatic Stress Network",
    imgUrl: "/nctsn-resource.webp",
    href: "https://www.nctsn.org/",
  },
  {
    name: "GLAAD",
    imgUrl: "/glaad-resource.webp",
    href: "https://www.glaad.org/",
  },
  {
    name: "World Professional Association For Transgender Health",
    imgUrl: "/WPATH-logo_v2-resource.webp",
    href: "https://www.wpath.org/",
  },
  {
    name: "Alcohol Effects, Addiction Treatment, and Resources",
    imgUrl: "/addictiongroup-1-resource.webp",
    href: "https://www.addictiongroup.org/rehab/",
  },
  {
    name: "Sex Smart Films",
    imgUrl: "/sexsmartfilms-resource.webp",
    href: "http://www.sexsmartfilms.com/",
  },
  {
    name: "Reproductive Health Access Project",
    imgUrl: "/reproductiveaccess-resource.webp",
    href: "https://www.reproductiveaccess.org/",
  },
  {
    name: "Guttmacher Institute",
    imgUrl: "/guttmacherinstitute-resource.webp",
    href: "https://www.guttmacher.org/",
  },
  {
    name: "The Best Colleges for LGBTQ+ Students",
    imgUrl: "/bestcolleges-resource.webp",
    href: "https://www.bestcolleges.com/features/best-colleges-for-lgbt-students/",
  },
  {
    name: "College Scholarships For LGBTQ+ Students",
    imgUrl: "/bestcolleges-scholarships-resource.webp",
    href: "https://www.bestcolleges.com/financial-aid/lgbtq-scholarships/",
  },
  {
    name: "How Addiction Affects The Transgender Community",
    imgUrl: "/sunshinebehaviouralhealth-resource.webp",
    href: "https://www.sunshinebehavioralhealth.com/resources/transgender-community/",
  },
].sort((a, b) => a.name.localeCompare(b.name));

export const friends = [
  {
    name: "Tennessee Alliance For Sexual Health",
    imgUrl: "/tnash-friend.webp",
    href: "https://www.tnash.org/",
  },
  {
    name: "American Association of Sexuality Educators Counselors & Therapists",
    imgUrl: "/assect_logo2016WH1.3-friend.webp",
    href: "https://www.aasect.org/",
  },
  {
    name: "The Tennessee Coalition to end domestic & sexual violence",
    imgUrl: "/tenesseecoalition-friend.webp",
    href: "https://www.tncoalition.org/",
  },
  {
    name: "The American Academy of Psychotherapists",
    imgUrl: "/aapweb-friend.webp",
    href: "https://www.aapweb.com/",
  },
  {
    name: "National Association of Social Workers",
    imgUrl: "/nasw2colorlogo-friend.webp",
    href: "https://www.naswtn.com/?",
  },
  {
    name: "Afrosexology",
    imgUrl: "/afrosexology-friend.webp",
    href: "http://www.afrosexology.com/",
  },
  {
    name: "Tennessee Association of Alcohol, Drug, and other Addiction Services",
    imgUrl: "/taadas-logo-white-friend.webp",
    href: "https://taadas.org/",
  },
  {
    name: "Society for Sex Therapy and Research",
    imgUrl: "/SSTAR-Logo-896x156-friend.webp",
    href: "http://sstarnet.org/",
  },
  {
    name: "The Association of Black Sexologists and Clinicians",
    imgUrl: "/theabsc-friend.webp",
    href: "http://www.theabsc.com/",
  },
  {
    name: "Women's Institute for Sexual Health",
    imgUrl: "/wishnashville-friend.webp",
    href: "https://www.wishnashville.com/",
  },
  {
    name: "A Step Ahead - Middle Tennessee",
    imgUrl: "/astepahead-friend.webp",
    href: "https://www.astepaheadmiddletn.org/",
  },
  {
    name: "Sexual Assault Center",
    imgUrl: "/sac_logo-friend.webp",
    href: "http://sacenter.org/",
  },
  {
    name: "Healthy and Free Tennessee",
    imgUrl: "/healthyandfreetennesee-friend.webp",
    href: "https://www.healthyandfreetn.org/",
  },
  {
    name: "Nashville CARES",
    imgUrl: "/nashvillecares-friend.webp",
    href: "https://www.nashvillecares.org/",
  },
  {
    name: "Vanderbilt Program for LGBTQ Health",
    imgUrl: "/vanderbilthealth-friend.webp",
    href: "https://www.vanderbilthealth.com/lgbtqhealthprogram/",
  },
  {
    name: "Planned Parenthood of Tennessee and North Mississippi",
    imgUrl: "/pp-tennessee-north_mississippi-c3-full-friend.webp",
    href: "https://www.plannedparenthood.org/planned-parenthood-tennessee-and-north-mississippi",
  },
  {
    name: "Talk and Thrive Education",
    imgUrl: "/talkandthrive-friend.webp",
    href: "https://www.talkandthrive.com/",
  },
  {
    name: "The Southeast AIDS Education and Training Center",
    imgUrl: "/seaetc-friend.webp",
    href: "https://www.seaetc.com/",
  },
  {
    name: "Street Works",
    imgUrl: "/streetworks-friend.webp",
    href: "http://streetworks.org/",
  },
  {
    name: "Vanderbilt University Divinity School",
    imgUrl: "/Divinity-friend.webp",
    href: "https://divinity.vanderbilt.edu/",
  },
  {
    name: "SisterReach",
    imgUrl: "/sisterreach-friend.webp",
    href: "https://www.sisterreach.org/",
  },
  {
    name: "Rosemary Frank Financial",
    imgUrl: "/rosemary_logo_1-friend.webp",
    href: "http://rosemaryfrank.com/",
  },
  {
    name: "Kundalini Rising Yoga",
    imgUrl: "/kundalinirisingyoga-friend.webp",
    href: "http://www.kundalinirisingyoga.net/",
  },
  {
    name: "Dr. Tammy Nelson",
    imgUrl: "/drtammynelson-friend.webp",
    href: "https://drtammynelson.com/",
  },
  {
    name: "Sexual Health Certificate Program",
    imgUrl: "/schoolofsocialwork-sexualhealthcertificateprogram-friend.webp",
    href: "https://ssw.umich.edu/offices/continuing-education/certificate-courses/sexual-health",
  },
  {
    name: "Dancing Mindfulness",
    imgUrl: "/dancing_mindfullness-friend.webp",
    href: "https://www.dancingmindfulness.com/",
  },
  {
    name: "Soldier Center",
    imgUrl: "/soldiercenter-friend.webp",
    href: "https://www.soldier-center.com/index.html",
  },
  {
    name: "DENOR Brands & Public Relations",
    imgUrl: "/DENOR_horizontal_final_white-1-friend.webp",
    href: "https://denorbrands.com/",
  },
].sort((a, b) => a.name.localeCompare(b.name));

export type bookType = {
  title: string,
  imgUrl: string,
  href: string,
}

export const books = [
  {
    title: "",
    imgUrl: "",
    href: "",
  },
].sort((a, b) => a.title.localeCompare(b.title));