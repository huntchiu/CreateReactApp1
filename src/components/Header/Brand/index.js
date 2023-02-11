import React from "react";
import { makeStyles } from "@mui/styles";
import logo from "./logo.svg";
const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: 263,
      height: 118,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    link: {
      width: "60%",
      maxHeight: 42,
      maxWidth: 163,
      cursor: "pointer",
      display: "inline-block",
    },
    logo: {
      maxWidth: "100%",
      verticalAlign: "middle",
      display: "inline-block",
    },
  };
});
function Brand() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <a className={classes.link} href={"#"}>
        <img className={classes.logo} src={logo} alt="logo" />
      </a>
    </div>
  );
}

export default Brand;
