import Image from 'next/image'
import Link from 'next/link'
import { Bad_Script, Square_Peg, Just_Another_Hand } from 'next/font/google'

import Dropdown from "./Dropdown";
import SocialIcons from './SocialIcons';
import '@/app/components/navbar/navbar.css'

const badScript = Square_Peg({ subsets: ["latin"], weight: "400" });
const neucha = Just_Another_Hand({ subsets: ["latin"], weight: "400" });

export interface MenuItem {
  title: string;
  route?: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "MENU",
    children: [
      {
        title: "About Us",
        route: "/about-us",
      },
      {
        title: "Offerings",
        route: "/offerings",
      },
      {
        title: "Retreats",
        route: "/retreats",
      },
      {
        title: "Events",
        route: "/events",
      },
      {
        title: "FAQ",
        route: "/faqs",
      },
      {
        title: "Blog",
        route: "/blog",
      },
      {
        title: "Contact",
        route: "/contact",
      },
      {
        title: "Resources",
        route: "/resources",
      },
    ],
  },
];

export default function Navbar() {

  return (
    <div id="navbar" className='sticky'>

      <div id='pre-nav' className="flex max-md:flex-col justify-between items-center bg-gradient-to-b from-green-300 to-transparent bg-opacity-20 px-2">
        <div className='ml-9 max-md:ml-0'>
          <SocialIcons />
        </div>
        <div className={`${badScript.className} ml-4 max-md:ml-0 contact-info text-xs max-md:text-[0.7rem] flex max-sm:flex-col font-sans`}>
          {/* <span>12000 Biscayne Blvd, Miami, FL 33181 | <a className='underline' href='tel:+16153756896'>Tel: (615) 375-6896</a> |&nbsp;</span>
          <span>COVID 19: We are following all CDC guidelines</span> */}
        </div>
        <button className={`schedule-btn max-md:hidden mt-4 px-2 mr-6 text-nowrap ${neucha.className}`}>SCHEDULE APPOINTMENT</button>
      </div>

      <div className='flex flex-row justify-between items-center px-3'>
        <Link href="/">
          <Image className='nav-logo max-md:hidden' src="/logo.webp" alt="Pandora's Awakening logo" width={176} height={100} />
          <Image className='nav-logo-sm max-md:block hidden' src="/logo.webp" alt="Pandora's Awakening logo" width={113} height={64} />
        </Link>
        <div className={`nav-items flex flex-row justify-around px-4 ${badScript.className} max-md:hidden`}>
          {menuItems[1].children?.map(item => (
            <Link
              key={item.title}
              href={item.route || '/'}
              className='hover:text-blue-600 px-2 py-4'
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className={`nav-items flex flex-row justify-end items-center pl-1 pr-4 ${badScript.className} max-md:flex hidden`}>
          <a href="https://calendly.com/holisticsextherapist" target='_blank' rel='noopener'>
            <button className={`schedule-btn hidden max-md:block my-2 px-2 mr-5 ${neucha.className} text-nowrap`}>SCHEDULE APPOINTMENT</button>
          </a>
          <Dropdown item={menuItems[1]} />
        </div>
      </div>
    </div>
  )
}