"use client";
import React from "react";

type StarsProps = {
  size?: number;
};

const Stars: React.FC<StarsProps> = ({ size = 50 }) => {
  return (
    <div 
      className="stars-loader relative"
      style={{ 
        width: `${size}px`, 
        height: `${size}px`,
        filter: 'drop-shadow(0 0 10px var(--shine-color))'
      }}
    >
      <svg
        id="pegtopone"
        className="stars-svg stars-one"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 100 100"
      >
        <defs>
          <filter id="shine">
            <feGaussianBlur stdDeviation="3"></feGaussianBlur>
          </filter>
          <mask id="mask">
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="white"
            ></path>
          </mask>
          <radialGradient
            id="gradient-1"
            cx="50"
            cy="66"
            fx="50"
            fy="66"
            r="30"
            gradientTransform="translate(0 35) scale(1 0.5)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="black" stopOpacity="0.3" />
            <stop offset="50%" stopColor="black" stopOpacity="0.1" />
            <stop offset="100%" stopColor="black" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g>
          <path
            d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
            fill="currentColor"
          />
          <path
            d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
            fill="url(#gradient-1)"
          />
        </g>
      </svg>

      <svg 
        id="pegtoptwo" 
        className="stars-svg stars-two"
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 100 100"
      >
        <use xlinkHref="#pegtopone" />
      </svg>

      <svg 
        id="pegtopthree" 
        className="stars-svg stars-three"
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 100 100"
      >
        <use xlinkHref="#pegtopone" />
      </svg>
    </div>
  );
};

export default Stars;