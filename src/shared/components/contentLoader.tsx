import React from "react";

function ContentLoader() {
  return (
    <>
      {[1, 2, 3, 4].map(i => (
        <div className='col-md-3 mb-3' key={i}>
          <svg
            role='img'
            aria-label='Loading interface...'
            viewBox='0 0 250 450'
            preserveAspectRatio='none'
            width='260'
            height='400'>
            <title>Loading interface...</title>
            <rect
              x='0'
              y='0'
              width='250'
              height='450'
              clipPath='url(#or8wpu5l6lj)'
              style={{ fill: "url('#zt02gf7g59b')" }}></rect>
            <defs>
              <clipPath id='or8wpu5l6lj'>
                <circle cx='30' cy='30' r='30'></circle>
                <rect
                  x='75'
                  y='13'
                  rx='4'
                  ry='4'
                  width='100'
                  height='13'></rect>
                <rect x='75' y='37' rx='4' ry='4' width='50' height='8'></rect>
                <rect
                  x='0'
                  y='70'
                  rx='5'
                  ry='5'
                  width='400'
                  height='400'></rect>
              </clipPath>
              <linearGradient id='zt02gf7g59b'>
                <stop offset='-1.07979' stopColor='#f0f0f0' stopOpacity='1'>
                  <animate
                    attributeName='offset'
                    values='-2; -2; 1'
                    keyTimes='0; 0.25; 1'
                    dur='2s'
                    repeatCount='indefinite'></animate>
                </stop>
                <stop offset='-0.0797859' stopColor='#e0e0e0' stopOpacity='1'>
                  <animate
                    attributeName='offset'
                    values='-1; -1; 2'
                    keyTimes='0; 0.25; 1'
                    dur='2s'
                    repeatCount='indefinite'></animate>
                </stop>
                <stop offset='0.920214' stopColor='#f0f0f0' stopOpacity='1'>
                  <animate
                    attributeName='offset'
                    values='0; 0; 3'
                    keyTimes='0; 0.25; 1'
                    dur='2s'
                    repeatCount='indefinite'></animate>
                </stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}
    </>
  );
}

export default ContentLoader;
