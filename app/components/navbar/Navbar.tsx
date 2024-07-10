import Image from 'next/image'
import Link from 'next/link'
import { Bad_Script } from 'next/font/google'

import Dropdown from "./Dropdown";
import '@/app/components/navbar/navbar.css'

const caveat = Bad_Script({ subsets: ["latin"], weight: "400" });


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
    <div id="navbar" className='fixed flex flex-row justify-between items-center px-3'>
      <Link href="/">
        <Image className='nav-logo' src="/logo.webp" alt="Pandora's Awakening logo" width={176} height={100} />
      </Link>
      <div className={`nav-items flex flex-row justify-around px-4 ${caveat.className} max-md:hidden`}>
        {menuItems[1].children?.map(item => (
          <Link key={item.title} href={item.route || '/'} className='hover:text-blue-600 font-bold px-2 py-4'>{item.title}</Link>
        ))}
      </div>
      <div className={`nav-items flex flex-row justify-end px-4 ${caveat.className} max-md:flex hidden`}>
        <Dropdown item={menuItems[1]} />
      </div>
    </div>
  )
}