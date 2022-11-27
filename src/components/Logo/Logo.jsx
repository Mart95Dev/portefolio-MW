import React from "react";

export default function Logo({ width }) {
  return (
    <div className="flex items-center uppercase gap-2 pl-4">
      <img
        className={width}
        src="/logo-Martial-Wehrling-Freelance-.png"
        alt="Freelance Front End Developper"
      />
    </div>
  );
}
