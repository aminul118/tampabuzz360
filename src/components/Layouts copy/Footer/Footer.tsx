import Link from "next/link";
import React from "react";
import Image from "next/image";
import Copiright from "./Copiright";
import { allThingsGood, moreFromUs } from "@/lib/constants/footerMenu";

const Footer = () => {
  return (
    <footer className="bg-black py-10 px-2 ">
      <div className="flex flex-col md:flex-row gap-6 justify-between container mx-auto">
        {/* Left */}
        <div className=" flex flex-col justify-center gap-4">
          {/* Logo white */}
          <div>
            <Link href="/">
              <Image
                src={"/logo-white.svg"}
                width={260}
                height={80}
                alt="logo of Tampabuzz 360"
                priority
              />
            </Link>
          </div>
          <p className=" text-sm max-w-xl text-white">
            Since 2013, That’s So Tampa has been the most trusted local resource
            for discovering All Things Good in Tampa Bay.
          </p>
        </div>

        {/* Middle */}
        <div>
          <p className="text-lg font-semibold mb-5 text-white">
            All Things Good
          </p>
          <ul className="space-y-2">
            {allThingsGood.map((menu, i) => (
              <li key={i}>
                <Link href={menu.url} className="text-white/90  text-sm">
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right */}
        <div>
          <p className="text-lg font-semibold mb-5 text-white">More From Us</p>
          <ul className="space-y-2">
            {moreFromUs.map((menu, i) => (
              <li key={i}>
                <Link href={menu.url} className="text-white/90  text-sm">
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Copiright />
    </footer>
  );
};

export default Footer;
