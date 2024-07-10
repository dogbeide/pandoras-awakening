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
        <button className="hover:text-blue-600 font-bold" onClick={toggle}>
          {item.title.toUpperCase() == 'MENU' ? item.title + ' ☰' : item.title}
        </button>
        <div
          className={`absolute top-8 -right-4 z-30 w-[100px] min-h-[300px] flex flex-col py-4 items-start bg-green-300 rounded-md ${transClass}`}
        >
          {menuItems.map((item: any) => (
            <Link
              key={item.route}
              className="hover:bg-cyan-100 hover:text-zinc-500 px-4 py-1 w-full"
              href={item?.route || ""}
              onClick={toggle}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      {isOpen ? (
        <div
          className="fixed top-0 right-0 bottom-0 left-0 z-20 "
          onClick={toggle}
        ></div>
      ) : (
        <></>
      )}
    </>
  );
}