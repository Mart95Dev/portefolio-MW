import React from "react";

export default function Logo({ width }) {
  return (
    <div>
      <img
        className={width}
        src="/logo-resize-Martial-Wehrling-Freelance-developpeur-front-End-react-JS.png"
        alt="Freelance Front End Developper"
      />
    </div>
  );
}
