import React from "react";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import Logo from "./../Logo/Logo";

export default function Navbar() {
  return (
    <div>
      <div className="container-xl bg-[#00353f] text-white flex items-center justify-between px-2">
        <Logo width={"w-16"} />

        <ul className="flex gap-8">
          <li>A propos</li>
          <li>Services</li>
          <li>Porte Folio</li>
          <li>Contact</li>
        </ul>
        <div className="mr-8">
          <SettingsBrightnessIcon sx={{ fontSize: 30 }} />
        </div>
      </div>
    </div>
  );
}
