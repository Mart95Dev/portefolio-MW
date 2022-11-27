import React from "react";
import Logo from "./../Logo/Logo";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  return (
    <div>
      <div className="container-xl bg-[#fbf8f8] fixed w-full z-20 flex items-center justify-between pt-2 pl-6 pr-14 ">
        <Logo width={"w-16 xl:w-20"} />
        <ul className="hidden flex gap-3 uppercase sm:flex sm:block sm:text-sm sm:gap-4 lg:text-md ">
          <li>About</li>
          <li>Services</li>
          <li>Porte-folio</li>
          <li>Contact</li>
        </ul>
        <div className="mr-2 sm:hidden">
          <MenuIcon sx={{ fontSize: 50 }} />
        </div>
      </div>
    </div>
  );
}
