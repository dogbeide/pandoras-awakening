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
    title: "Passionate Marriage: Keeping Love and Intimacy Alive in Committed Relationships",
    imgUrl: "/passionatemarriage-book.webp",
    href: "http://a.co/d/2O7r2fE",
  },
  {
    title: "Mating in Captivity: Unlocking Erotic Intelligence",
    imgUrl: "/matingincaptivity-book.webp",
    href: "http://a.co/d/9mImp9l",
  },
  {
    title: "Come as You Are: The Surprising New Science that Will Transform Your Sex Life",
    imgUrl: "/comeasyouare-book.webp",
    href: "http://a.co/d/8hVaXAS",
  },
  {
    title: "She Comes First: The Thinking Man's Guide to Pleasuring a Woman",
    imgUrl: "/shecomesfirst-book.webp",
    href: "http://a.co/d/cFb0OQC",
  },
  {
    title: "Rekindling Desire",
    imgUrl: "/rekindlingdesire-book.webp",
    href: "http://a.co/d/cFrFYNc",
  },
  {
    title: "Coping with Erectile Dysfunction: How to Regain Confidence and Enjoy Great Sex",
    imgUrl: "/copingwithed-book.webp",
    href: "http://a.co/d/07LWPwI",
  },
  {
    title: "Coping With Premature Ejaculation: How to Overcome PE, Please Your Partner & Have Great Sex",
    imgUrl: "/copingwithpe-book.webp",
    href: "http://a.co/d/bu9Ke5T",
  },
  {
    title: "The New Monogamy: Redefining Your Relationship After Infidelity",
    imgUrl: "/thenewmonogamy-book.webp",
    href: "http://a.co/d/iWvQKwT",
  },
  {
    title: "Getting the Sex You Want: Shed Your Inhibitions and Reach New Heights of Passion Together",
    imgUrl: "/gettingthesexyouwant-book.webp",
    href: "http://a.co/d/1NhCjm9",
  },
  {
    title: "Sex Matters for Women, Second Edition: A Complete Guide to Taking Care of Your Sexual Self",
    imgUrl: "/sexmattersforwomen-book.webp",
    href: "http://a.co/d/inSZnxm",
  },
  {
    title: "It's Grief: The Dance of Self-Discovery Through Trauma and Loss",
    imgUrl: "/itsgrief-book.webp",
    href: "http://a.co/d/8NIyVCK",
  },
  {
    title: "On Grief and Grieving: Finding the Meaning of Grief Through the Five Stages of Loss",
    imgUrl: "/ongriefandgrieving-book.webp",
    href: "http://a.co/d/bEbhIxD",
  },
  {
    title: "'It Will Never Happen to Me!' Children of Alcoholics: As Youngsters - Adolescents - Adults",
    imgUrl: "/itwillneverhappentome-book.webp",
    href: "http://a.co/d/5lqDPIK",
  },
  {
    title: "Getting Past Your Past: Take Control of Your Life with Self-Help Techniques from EMDR Therapy",
    imgUrl: "/gettingpastyourpast-book.webp",
    href: "http://a.co/d/40zZkeH",
  },
  {
    title: "The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma",
    imgUrl: "/thebodykeepsthescore-book.webp",
    href: "http://a.co/d/7Y1g2YM",
  },
  {
    title: "Trauma and Recovery: The Aftermath of Violence--From Domestic Abuse to Political Terror",
    imgUrl: "/traumaandrecovery-book.webp",
    href: "http://a.co/d/egA4Iie",
  },
  {
    title: "Sex Outside the Lines: Authentic Sexuality in a Sexually Dysfunctional Culture",
    imgUrl: "/sexoutsidethelines-book.webp",
    href: "http://a.co/d/f0ZSFz5",
  },
  {
    title: "Opening Up: A Guide To Creating and Sustaining Open Relationships",
    imgUrl: "/openingup-book.webp",
    href: "http://a.co/d/7KWA7Xt",
  },
  {
    title: "The Ultimate Guide to Prostate Pleasure: Erotic Exploration for Men and Their Partners",
    imgUrl: "/ultimateguidetoprostatepleasure-book.webp",
    href: "http://a.co/d/d3CK1kw",
  },
  {
    title: "The Ultimate Guide to Anal Sex for Women",
    imgUrl: "/ultimateguideforwomen-book.webp",
    href: "http://a.co/d/6YbYldp",
  },
  {
    title: "Urban Tantra",
    imgUrl: "/urbantantra-book.webp",
    href: "http://a.co/d/2JFS9fn",
  },
  {
    title: "Brain Sex: The Real Difference Between Men and Women",
    imgUrl: "/brainsex-book.webp",
    href: "http://a.co/d/0MbKgJs",
  },
  {
    title: "Attached: The New Science of Adult Attachment and How It Can Help YouFind - and Keep - Love",
    imgUrl: "/attached-book.webp",
    href: "http://a.co/d/0QKbM9a",
  },
  {
    title: "Wired for Love: How Understanding Your Partner's Brain and Attachment Style Can Help You Defuse Conflict and Build a Secure Relationship",
    imgUrl: "/wiredforlove-book.webp",
    href: "http://a.co/d/1PWVREu",
  },
  {
    title: "Getting the Love You Want: A Guide for Couples",
    imgUrl: "/gettingtheloveyouwant-book.webp",
    href: "http://a.co/d/79jmrSJ",
  },
  {
    title: "Living and Loving after Betrayal: How to Heal from Emotional Abuse, Deceit, Infidelity, and Chronic Resentment",
    imgUrl: "/livingandlovingafterbetrayal-book.webp",
    href: "http://a.co/d/eO5Q8vG",
  },
  {
    title: "Celebrate Your Body (and Its Changes, Too!): The Ultimate Puberty Book for Girls",
    imgUrl: "/celebrateyourbody-book.webp",
    href: "http://a.co/d/26qRlhn",
  },
  {
    title: "It's So Amazing!: A Book about Eggs, Sperm, Birth, Babies, and Families",
    imgUrl: "/itssoamazing-book.webp",
    href: "http://a.co/d/6RgtlHy",
  },
  {
    title: "The Girls' Guide to Sex Education: Over 100 Honest Answers to Urgent Questions about Puberty, Relationships, and Growing Up",
    imgUrl: "/thegirlsguidetosexeducation-book.webp",
    href: "http://a.co/d/eKDcfnL",
  },
  {
    title: "It's Perfectly Normal: Changing Bodies, Growing Up, Sex, and Sexual Health",
    imgUrl: "/itsperfectlynormal-book.webp",
    href: "http://a.co/d/f9vBuqa",
  },
  {
    title: "What's Happening to My Body? Book for Boys",
    imgUrl: "/thewhatshappeningtomybodybookforboys-book.webp",
    href: "http://a.co/d/einyx8E",
  },
  {
    title: "Sex is a Funny Word: A Book about Bodies, Feelings, and YOU",
    imgUrl: "/sexisafunnyword-book.webp",
    href: "http://a.co/d/6Ns46Rn",
  },
  {
    title: "The Female Brain",
    imgUrl: "/thefemalebrain-book.webp",
    href: "http://a.co/d/iAEYBHH",
  },
  {
    title: "The Male Brain: A Breakthrough Understanding of How Men and Boys Think",
    imgUrl: "/themalebrain-book.webp",
    href: "http://a.co/d/3U09aUh",
  },
  {
    title: "The Developing Mind: How Relationships and the Brain Interact to Shape Who We Are",
    imgUrl: "/thedevelopingmind-book.webp",
    href: "http://a.co/d/8K0vBDE",
  },
].sort((a, b) => a.title.localeCompare(b.title));