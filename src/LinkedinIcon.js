import React from "react";
import "./linkedin.css";

function LinkedinIcon() {
  return (
    <span className="linkedin">
      <svg
        class="linkedin-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        viewBox="0 0 24 24"
        fill="#0e76a8"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    </span>
  );
}

export default LinkedinIcon;
