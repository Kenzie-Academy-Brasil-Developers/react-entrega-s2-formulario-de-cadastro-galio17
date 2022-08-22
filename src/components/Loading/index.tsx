import React from "react";
import StyledLoading, { ILoadingProps } from "./styles";

const Loading = ({ size }: ILoadingProps) => {
  return (
    <StyledLoading size={size}>
      <div className="circle"></div>
    </StyledLoading>
  );
};

export default Loading;
