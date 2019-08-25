import React, { useContext } from "react";
import styled from "styled-components";
import { LanguageSelect } from "Components/layout/LanguageSelect";
import { LocalizedContext } from "Common/hooks/localization/localizedContext";

export function Header() {
  const localized = useContext(LocalizedContext);

  return (
    <StyledLayout>
      <header style={headerStyle}>
        <h1>{localized.language}</h1>
        <LanguageSelect />
      </header>
    </StyledLayout>
  );
}

const headerStyle = {
  marginBottom: "5px",
  backgroundColor: "#8169b7",
  color: "#fff"
};

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: "#8169b7";
  color: "#fff";
  padding: "10px";
  main {
    flex: 1 1 auto;
  }
`;
