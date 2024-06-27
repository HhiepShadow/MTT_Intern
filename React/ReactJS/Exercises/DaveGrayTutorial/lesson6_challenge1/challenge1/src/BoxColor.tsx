import React from "react";

const BoxColor = ({
  width,
  height,
  title,
  backgroundColor,
}: {
  width: number;
  height: number;
  title: string;
  backgroundColor: string;
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: backgroundColor,
        border: "2px solid black",
        borderRadius: "5px",
      }}
    >
      {title}
    </div>
  );
};

BoxColor.defaultProps = {
  title: "Empty color",
  backgroundColor: "white",
};

export default BoxColor;
