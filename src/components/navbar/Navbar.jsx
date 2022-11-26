import React from "react";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";

export default function Navbar() {
  return (
    <div>
      <div className="container-xl bg-[#00353f] text-white flex items-center justify-between px-2">
        <img
          className="w-16"
          src="/logo-resize-Martial-Wehrling-Freelance-developpeur-front-End-react-JS.png"
          alt="Freelance Front End Developper"
        />
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
