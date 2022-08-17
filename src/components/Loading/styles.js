import styled, { css, keyframes } from "styled-components";

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledLoading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .circle {
    ${({ size }) => css`
      width: ${size};
      height: ${size};
    `}
    border: 10px solid transparent;
    border-top-color: var(--color-primary);
    border-radius: 50%;
    animation: ${rotateAnimation} 1s infinite;
  }
`;

export default StyledLoading;
