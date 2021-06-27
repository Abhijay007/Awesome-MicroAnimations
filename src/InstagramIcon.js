import React from "react";
import "./instagram.css";

function InstagramIcon() {
  return (
    <span className="">
      <svg
        class="instagram-icon instagram"
        x="0px"
        y="0px"
        viewBox="0 0 150 150"
        width="50"
      >
        <circle id="littleCircle" class="st0" cx="101" cy="101.5" r="18.9" />
        <circle id="shutter" class="st0" cx="101" cy="101.5" r="8" />
        <circle id="lens" class="st0" cx="125.5" cy="78.6" r="2.9" />
        <path
          id="camera"
          class="st0"
          d="M79,60.5h44c10.5,0,19,8.5,19,19v44c0,10.5-8.5,19-19,19H79c-10.5,0-19-8.5-19-19v-44
                        C60,69,68.5,60.5,79 60.5z"
        />
      </svg>
    </span>
  );
}

export default InstagramIcon;
