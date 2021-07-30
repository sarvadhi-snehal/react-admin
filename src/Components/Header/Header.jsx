import React from "react";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import "./Header.scss";
function Header() {
    const svgStyle = {
        mixBlendMode:"hard-light"
    }
  return (
    <header className="d-flex w-100 p-2 sticky-top">
        <a href="/" className="">
        <div className="logo">
        <svg
          width="49"
          height="39"
          viewBox="0 0 159 149"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g style={svgStyle}>
            <path
              d="M124.701 64.755C113.206 57.5171 100.962 53.4397 87.7566 50.3661C84.0828 49.511 67.6056 43.8614 63.9233 46.9772C61.7941 48.7788 62.4825 62.5303 62.2566 65.1439C61.5944 72.8062 61.0022 81.0792 61.9233 88.755C63.6099 102.811 66.8906 113.402 78.201 122.199C81.2503 124.571 84.9736 125.182 88.701 125.755C99.428 127.405 115.059 130.254 124.923 124.533C133.735 119.422 150.073 113.004 153.701 102.311C159.699 84.6325 155.749 60.1565 149.201 43.4216C135.216 7.68245 95.5276 -7.36926 60.1455 7.97719C48.0427 13.2266 37.1738 21.4954 25.701 27.9772C17.9433 32.3601 6.51263 37.421 3.86771 46.8105C-3.43562 72.7373 11.846 100.995 29.4788 119.088C42.9637 132.925 70.2039 157.571 90.1455 141.255C94.7213 137.511 104.668 134.855 106.701 128.755"
              stroke="#562727"
              trokeWidth="3"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>
    
        </a>
      <Search />
      <Navbar />
    </header>
  );
}

export default Header;
