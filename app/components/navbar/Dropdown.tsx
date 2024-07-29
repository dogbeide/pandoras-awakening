'use client'

import { useState } from "react";
import Link from "next/link";

import { MenuItem } from "./Navbar";

interface Props {
  item: MenuItem;
}

export default function Dropdown(props: Props) {
  const { item } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuItems = item?.children ? item.children : [];

  const toggle = () => {
    setIsOpen((old) => !old);
  };

  const transClass = isOpen ? "flex" : "hidden";

  return (
    <>
      <div className="relative">
        <button className="text-slate-200 hover:text-pandoras-fuchsia font-bold" onClick={toggle}>
          {item.title.toUpperCase() == 'MENU' ? item.title + ' ☰' : item.title}
        </button>
        <div
          className={`absolute top-8 -right-4 z-30 w-[100px] min-h-[300px] flex flex-col py-4 items-start bg-pandoras-jasper-50 rounded-md ${transClass}`}
        >
          {menuItems.map((item: any) => (
            <Link
              key={item.route}
              className="hover:bg-pandoras-lavender-50 text-slate-200  px-4 py-1 w-full"
              href={item?.route || ""}
              onClick={toggle}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div className={`fixed top-0 w-full h-full z-[20] ${transClass}` } onClick={toggle}></div>
    </>
  );
}
