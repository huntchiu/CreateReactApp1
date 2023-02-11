import React from "react";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";

import subMenu_arrow from "./images/subMenu_arrow.png";
const useStyles = makeStyles((theme) => {
  return {
    link: {
      display: "inline-block",
      height: "100%",
      fontSize: "16px",
      textAlign: "center",
      letterSpacing: "2px",
      textDecoration: "none",
      color: "#ffffff",
      paddingLeft: 20,
      paddingRight: 20,
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
    verticalCenter: {
      display: "flex",
      height: "100%",
      alignItems: "center",
      // 将子元素(内联元素)垂直居中
    },
    icon: {
      display: "inline-bloick",
      width: 34,
      height: 34,
      marginRight: 5,
    },
  };
});
function Link(props) {
  const classes = useStyles();
  const { label, icon } = props;
  return (
    <a href="#" className={classes.link}>
      <div className={classes.verticalCenter}>
        <span className={clsx(classes.icon)}>
          <img src={icon} style={{ height: "34px" }} />
        </span>
        {label}
      </div>
    </a>
  );
}
export default Link;
