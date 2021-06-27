import React from "react";
import "./codeforces.css";

function CodeforcesIcon() {
  return (
    <svg
      class="codeforces-icon codeforces"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 8"
      width="100"
    >
      <g>
        <rect
          class="red"
          x="15"
          width="2"
          height="6.5"
          rx="0.7"
          y="0"
          fill="#AE0F0A"
        />
        <rect
          class="blue"
          x="12"
          width="2"
          height="6.5"
          rx="0.7"
          y="0"
          fill="#4F81C1"
        />
        <rect
          class="yellow"
          x="9"
          width="2"
          height="6.5"
          rx="0.7"
          y="0"
          fill="#FFD400"
        />
      </g>
    </svg>
  );
}

export default CodeforcesIcon;
