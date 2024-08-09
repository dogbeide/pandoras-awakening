import Image from 'next/image'
import Link from 'next/link'
import { squarePeg } from '@/app/lib/fonts';

import Dropdown from "./Dropdown";
import BtnCTA from '../buttons/btn-cta';
import SocialIcons from './SocialIcons';
import '@/app/components/navbar/navbar.css'

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
        title: "FAQ",
        route: "/faq",
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
    <div id="navbar" className='sticky top-0 z-40 bg-gradient-to-r from-white-50 via-25% via-white-50 to-pandoras-lavender-50'>

      <div id='pre-nav' className="flex max-md:flex-col justify-between items-center bg-gradient-to-b from-pandoras-lavender-50 to-transparent bg-opacity-20 px-2">
        <div className='ml-9 max-md:ml-0'>
          <SocialIcons />
        </div>
        <BtnCTA ariaLabel="Schedule Appointment" classNames="max-md:hidden mt-4 px-2 mr-6 text-white" href="https://calendly.com/holisticsextherapist" target="_blank">
          SCHEDULE APPOINTMENT
        </BtnCTA>
      </div>

      <div className='flex flex-row justify-between items-center px-3'>
        <Link href="/">
          <Image className='nav-logo max-md:hidden' src="/logo.webp" alt="Pandora's Awakening logo" width={176} height={100} />
          <Image className='nav-logo-sm max-md:block hidden' src="/logo.webp" alt="Pandora's Awakening logo" width={113} height={64} />
        </Link>
        <div className={`nav-items flex flex-row justify-around px-4 ${squarePeg.className} max-md:hidden`}>
          {menuItems[1].children?.map(item => (
            <Link
              key={item.title}
              href={item.route || '/'}
              className='text-pandoras-fuchsia hover:text-pandoras-orange px-2 py-4 text-lg max-lg:text-base max-[800px]:text-sm'
              style={{textShadow: 'rgba(255, 255, 255, 0.5) 0px 1px'}}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className={`nav-items flex flex-row justify-end items-center pl-1 pr-4 ${squarePeg.className} max-md:flex hidden`}>
          <BtnCTA ariaLabel='Schedule Appointment' classNames="hidden max-md:block my-2 px-2 mr-5 text-white" href="https://calendly.com/holisticsextherapist" 
          target="_blank" fontSize='14px' >
            SCHEDULE APPOINTMENT
          </BtnCTA>
          <Dropdown item={menuItems[1]} />
        </div>
      </div>
    </div>
  )
}