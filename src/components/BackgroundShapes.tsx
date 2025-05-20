import React from "react";
const BackgroundShapes = () => {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
      <div className="shape w-64 h-64 rounded-full bg-gradient-to-r from-pastel-blue to-pastel-purple opacity-20 top-1/4 -left-20 animate-float"></div>
      <div
        className="shape w-96 h-96 rounded-full bg-gradient-to-r from-pastel-peach to-pastel-pink opacity-20 top-3/4 -right-32 animate-float"
        style={{ animationDelay: "1.5s" }}
      ></div>
      <div
        className="shape w-48 h-48 rounded-full bg-gradient-to-r from-pastel-yellow to-pastel-green opacity-20 top-1/2 left-1/4 animate-float"
        style={{ animationDelay: "2.5s" }}
      ></div>
      {}
      <div className="shape w-[600px] h-[600px] animate-spin-slow top-0 right-0 opacity-20">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient
              id="blob-gradient-1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#E5DEFF" />
              <stop offset="100%" stopColor="#D3E4FD" />
            </linearGradient>
          </defs>
          <path
            fill="url(#blob-gradient-1)"
            d="M40.4,-62.9C54,-55.3,67.8,-46.6,74.9,-33.8C82,-21,82.4,-4.3,79,11.1C75.6,26.6,68.4,40.9,57.1,51.4C45.8,61.9,30.4,68.6,13.9,73.1C-2.7,77.6,-20.3,79.9,-35.5,73.9C-50.7,67.8,-63.6,53.4,-71.1,36.8C-78.7,20.2,-81,1.3,-77.1,-16C-73.1,-33.2,-63,-48.9,-49.4,-57C-35.9,-65.2,-17.9,-65.8,-0.9,-64.4C16.1,-63,26.8,-70.5,40.4,-62.9Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div
        className="shape w-[500px] h-[500px] animate-spin-slow bottom-0 left-0 opacity-20"
        style={{ animationDirection: "reverse", animationDuration: "25s" }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient
              id="blob-gradient-2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#FDE1D3" />
              <stop offset="100%" stopColor="#FFDEE2" />
            </linearGradient>
          </defs>
          <path
            fill="url(#blob-gradient-2)"
            d="M51.3,-76.9C66.2,-69.3,78,-54.7,84.6,-38.3C91.1,-21.9,92.5,-3.6,89.8,14.9C87.2,33.5,80.7,52.2,68,64.4C55.3,76.5,36.5,82.1,18.1,85.1C-0.2,88,-18,88.3,-33.4,81.9C-48.9,75.6,-61.9,62.6,-71,47.4C-80.1,32.2,-85.3,14.8,-85.2,-2.6C-85,-20,-79.5,-37.5,-68.9,-50.8C-58.3,-64.2,-42.6,-73.5,-26.9,-77.6C-11.2,-81.8,4.4,-81,20.5,-78.9C36.6,-76.8,36.3,-84.5,51.3,-76.9Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </div>
  );
};
export default BackgroundShapes;
