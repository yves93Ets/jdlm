import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export function Footer() {
  const time = new Date().toDateString();
  const classes = useStyles({});
  return (
    <StyledLayout>
      <footer className={classes.footer}>
        <p>{time}</p>
      </footer>
    </StyledLayout>
  );
}

const footerStyle = {
  backgroundColor: "#8169b7",
  color: "#fff",
  padding: "5px"
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

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  },
  footer: {
    padding: "5px",
    marginTop: "5px",
    backgroundColor: "#8169b7",
    color: "#fff",
    textAlign: "center"
  }
}));
