import React from "react";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import Logo from "./../Logo/Logo";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  return (
    <div>
      <div className="container-xl fixed top-0 left-0 right-0 bg-[#00353f] text-white flex items-center justify-between px-4">
        <Logo width={"w-16"} />

        <ul className="flex gap-8 uppercase">
          <li>A propos</li>
          <li>Services</li>
          <li>Porte Folio</li>
          <li>Contact</li>
        </ul>
        <div className="mr-8">
          <SettingsBrightnessIcon sx={{ fontSize: 40 }} />
        </div>
        <div className="mr-8 sm:hidden">
          <MenuIcon sx={{ fontSize: 50 }} />
        </div>
      </div>
    </div>
  );
}
