import React from "react";

export default function Navbar() {
  return (
    <div className="container-xl flex">
      <div className="w-24">
        <img
          src="/public/logo-resize-Martial-Wehrling-Freelance-developpeur-front-End-react-JS.png"
          alt="logo Freelance developper front end react martial wehrling"
        />
      </div>
      <ul>
        <li>A propos</li>
        <li>Porte Folio</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
