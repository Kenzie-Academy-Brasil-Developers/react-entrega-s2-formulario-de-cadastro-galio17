import React from "react";
import StyledLoading from "./styles";

const Loading = ({ size }) => {
  return (
    <StyledLoading size={size}>
      <div className="circle"></div>
    </StyledLoading>
  );
};

export default Loading;
