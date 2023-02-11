import React from "react";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import subMenu_arrow from "./images/subMenu_arrow.png";
import icon61 from "./images/61.png";
import icon104 from "./images/104.png";
import clsx from "clsx";
const useStyles = makeStyles((theme) => {
  return {
    root: {
      position: "absolute",
      left: 0,
      top: "100%",
      width: "100%",
      height: 65,
      zIndex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.68)",
    },
    nav: {
      listStyle: "none",
      display: "flex",
      height: 65,
      padding: 0,
      alignItems: "center",
      "&>li": {
        height: "100%",
        display: "flex",
        flex: 1,
        justifyContent: "center",
      },
      "&>li>a": {
        width: "100%",
        height: "100%",
        display: "inline-block",
        fontSize: "16px",
        textAlign: "center",
        letterSpacing: "2px",
        textDecoration: "none",
        color: "#ffffff",
        fontWeight: 600,
        "&:hover": {
          backgroundColor: "#fdc225",
          backgroundImage: `url(${subMenu_arrow})`,
          backgroundPosition: "50% 0%",
          backgroundSize: "11px 6px",
          backgroundRepeat: "no-repeat",
          color: "#3c0101",
        },
      },
    },
    icon: {
      display: "inline-block",
      marginTop: 13,
      height: "38px",
      paddingLeft: "40px",
      lineHeight: "38px",
    },
    icon61: {
      backgroundImage: `url(${icon61})`,
      backgroundSize: "auto 34px",
      backgroundRepeat: "no-repeat",
    },
    icon104: {
      backgroundImage: `url(${icon104})`,
      backgroundSize: "auto 34px",
      backgroundRepeat: "no-repeat",
    },
  };
});
function SubMenu() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg" disableGutters>
        <ul className={classes.nav}>
          <li>
            <a href="#">
              <span className={clsx(classes.icon, classes.icon104)}>
                新品登场
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className={clsx(classes.icon, classes.icon61)}>
                芒果甜品
              </span>
            </a>
          </li>
      
          <li>
            <a href="#"> 芒果甜品</a>
          </li>
          <li>
            <a href="#"> 芒果甜品</a>
          </li>
          <li>
            <a href="#"> 芒果甜品</a>
          </li>
          <li>
            <a href="#"> 芒果甜品</a>
          </li>
          <li>
            <a href="#"> 芒果甜品</a>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default SubMenu;
