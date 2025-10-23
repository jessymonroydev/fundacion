import React from "react";
import "../../styles/ThreeDCanvas.css";

const ThreeDCanvas = () => {
  return (
    <div
      className="df-3dcanvas df-csscanvas"
      style={{
        overflow: "hidden",
        transformStyle: "preserve-3d",
        position: "absolute",
        top: "0px",
        pointerEvents: "none",
        width: "1027px",
        height: "800px",
        perspective: "1492.82px",
      }}
    >
      <div
        style={{
          transformStyle: "preserve-3d",
          width: "1027px",
          height: "800px",
          transform:
            "translate3d(0px, 0px, 1492.82px) matrix3d(1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, -8.52224, -637.114, 1) translate3d(513.5px, 400px, 0px)",
        }}
      >
        <div
          className="df-page-content df-page-content-left"
          style={{
            position: "absolute",
            width: "209.876px",
            left: "-104.938px",
            height: "297px",
            transform:
              "translate3d(-50%, -50%, 0px) matrix3d(0.999997, 0, 0.00234361, 0, 0, -1, 0, 0, -0.00234361, 0, 0.999997, 0, -104.719, 0, 0.437216, 1)",
            background: "#fff", // opcional para visualizar
          }}
        ></div>

        <div
          className="df-page-content df-page-content-right"
          style={{
            position: "absolute",
            width: "209.876px",
            left: "104.938px",
            height: "297px",
            transform:
              "translate3d(-50%, -50%, 0px) matrix3d(0.999996, 0, -0.00265777, 0, 0, -1, 0, 0, 0.00265777, 0, 0.999996, 0, -105.186, 0, 0.495825, 1)",
            background: "#ddd",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ThreeDCanvas;
