import React from "react";

const Crown = () => {
  return (
    <div
      className="framer-1jh9ng2"
      data-framer-appear-id="1jh9ng2"
      data-framer-name="Scribble"
      name="Scribble"
      style={{ opacity: 1, willChange: "transform", transform: "none" }}
    >
      <div className="framer-1dpztax" data-framer-name="Main " name="Main ">
        <div className="ssr-variant hidden-1sumy38">
          <div
            data-framer-component-type="SVG"
            data-framer-name="Crown"
            name="Crown"
            style={{
              imageRendering: "pixelated",
              flexShrink: 0,
              backgroundSize: "100% 100%",
              backgroundImage: 'url("data:image/svg+xml',
            }}
            className="framer-14ouk39"
            aria-hidden="true"
          />
        </div>
        <div className="framer-19smasz-container">
          <svg style={{ width: 0, height: 0, position: "absolute" }} aria-hidden="true" focusable="false">
            <defs>
              <filter id="framer-university-8pzjgkpoi" colorInterpolationFilters="sRGB">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.029282000000000013"
                  numOctaves={5}
                  seed={842}
                  stitchTiles="stitch"
                />
                <feDisplacementMap
                  in="SourceGraphic"
                  scale="3.83009242129015"
                  xChannelSelector="R"
                  yChannelSelector="G"
                />
              </filter>
            </defs>
          </svg>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              backdropFilter: 'url("#framer-university-8pzjgkpoi")',
              filter: 'url("#framer-university-8pzjgkpoi")',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Crown;
