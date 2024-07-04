import React, { Dispatch, SetStateAction } from "react";

const Button = ({
  btnText,
  reqType,
  setReqType,
}: {
  btnText: string;
  reqType: string;
  setReqType: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div
      style={{
        flex: 1,
        marginBottom: "20px",
      }}
    >
      <button
        style={{
          width: "100%",
          height: "100%",
          color: btnText === reqType ? "white" : "black",
          backgroundColor: btnText === reqType ? "black" : "white"
        }}
        className={btnText === reqType ? "selected" : ""}
        type="button"
        onClick={() => setReqType(btnText)}
      >
        {btnText}
      </button>
    </div>
  );
};

export default Button;
