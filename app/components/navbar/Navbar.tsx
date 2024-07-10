import Image from 'next/image'
import Link from 'next/link'
import { Bad_Script, Just_Another_Hand } from 'next/font/google'

import PreNavbar from './PreNavbar';
import Dropdown from "./Dropdown";
import '@/app/components/navbar/navbar.css'

const badScript = Bad_Script({ subsets: ["latin"], weight: "400" });
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
    <div id="navbar" className='fixed'>

      <div id='pre-nav' className="flex max-md:flex-col justify-between items-center bg-gradient-to-b from-green-300 to-transparent bg-opacity-20 px-2">
        <div className="social-icons">a b c d e</div>
        <div className="my-w contact-info text-xs flex max-sm:flex-col font-sans">
          <span>12000 Biscayne Blvd, Miami, FL 33181 | <a className='underline' href='tel:+16153756896'>Tel: (615) 375-6896</a> | </span>
          {/* <span></span> */}
          <span>COVID 19: We are following all CDC guidelines</span>
        </div>
        <button className={`schedule-btn max-md:hidden my-2 px-2 text-nowrap ${neucha.className}`}>SCHEDULE APPOINTMENT</button>
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
              className='hover:text-blue-600 font-bold px-2 py-4'
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className={`nav-items flex flex-row justify-end items-center pl-1 pr-4 ${badScript.className} max-md:flex hidden`}>
          <button className={`schedule-btn hidden max-md:block my-2 px-2 mr-5 ${neucha.className} text-nowrap`}>SCHEDULE APPOINTMENT</button>
          <Dropdown item={menuItems[1]} />
        </div>
      </div>
    </div>
  )
}