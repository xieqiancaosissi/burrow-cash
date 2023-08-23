import React from "react";
import styled from "styled-components";

type Props = {
  children: string | React.ReactNode;
  className?: string;
};

const LayoutContainer = ({ children, className = "" }: Props) => {
  return <StyledWrapper className={className}>{children}</StyledWrapper>;
};

const StyledWrapper = styled.div`
  max-width: 1240px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
`;

LayoutContainer.displayName = "LayoutContainer";
export default LayoutContainer;

export const LayoutBox = ({ children, className = "" }: Props) => {
  return <div className={`mx-auto min-w-[800px] xl:max-w-[1200px] ${className}`}>{children}</div>;
};
