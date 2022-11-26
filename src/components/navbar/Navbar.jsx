import React from "react";

export default function Navbar() {
  return (
    <div>
      <div className="container-xl bg-[#00353f] text-white flex items-center justify-between px-3">
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
        <span>3</span>
      </div>
    </div>
  );
}
