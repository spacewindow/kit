import React, { useContext } from "react";
import { TourContext } from "../components/TourToggle";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const TourPointContent = props => {
  /* Pseudo class failed to work emotion in object syntax - annoying */
  console.log("SHOW TOUR POINTS?", props.show);

  const bgColor = () => {
    if (props.type === "clickable") {
      return "#0064AB";
    }
    if (props.type === "opportunity") {
      return "darkorange";
    }
    return "deeppink";
  };

  const tourPointStyles = css`
    position: absolute;
    /* display:flex;
            flex-direction: column; */
    font-size: 110%;
    font-weight: 600;
    /* justify-content: center;
            align-items:flex-start; */
    width: 200px;
    color: white;
    background-color: ${bgColor()};
    opacity: 0.9;
    right: calc(100% + 12px);
    top: 0;
    box-sizing: border-box;
    padding: 1em;
    /* transform: translateY(-40%); */
    /* pointer-events: none; */
    border-radius: 5px;
    opacity: ${props.show ? 1 : 0};
    transition: opacity 0.3s ease-in;

    &:after {
      content: "";
      position: absolute;
      top: 10px;
      right: -14px;
      width: 15px;
      height: 20px;
      background-color: ${bgColor()};
      opacity: 0.9;
      clip-path: polygon(0 0, 0 100%, 100% 50%);
      z-index: 5001;
    }
  `;

  return (
    <div
      className="tourPointWrap"
      style={{
        filter: "drop-shadow(-1px 4px 4px rgba(0, 0, 0, 0.5))"
      }}
    >
      <div className="tourPoint" css={tourPointStyles}>
        {props.content}
      </div>
    </div>
  );
};

const TourPoint = props => {
  const [showTour] = useContext(TourContext);

  return (
    <div
      style={{
        position: "relative"
        // border: '1px dotted deeppink',
      }}
    >
      {props.content !== "" ? (
        <TourPointContent
          type={props.type}
          content={props.content}
          show={showTour}
        />
      ) : null}
      {props.children}
    </div>
  );
};

export default TourPoint;
