import React from "react";

const Legend = ({ legendItems }) => {
  console.log(legendItems);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "stretch",
      }}
    >
      {legendItems.map((item, i) => {
        return (
          <div
            key={i}
            style={{
              background: item.color,
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: item.textColor,
              height: "10vh",
              fontWeight: "bold",
              fontSize: "1.5em",
            }}
          >
            <span>{item.title}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Legend;
