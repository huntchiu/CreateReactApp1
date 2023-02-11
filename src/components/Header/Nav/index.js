import React from "react";
import { makeStyles } from "@mui/styles";
import SubMenu from "./SubMenu";
import ScrollSubMenu from "./ScrollSubMenu";
const useStyles = makeStyles((theme) => {
  return {
    root: {
      listStyle: "none",
      display: "flex",
      height: "100%",
      margin: 0,
      "& > li ": {
        flex: 1,
      },
      "& > li > a": {
        display: "inline-block",
        paddingTop: 30,
        paddingBottom: 40,
        fontSize: "16px",
        textAlign: "center",
        letterSpacing: "2px",

        position: "relative",
        textDecoration: "none",
        color: "#222222",
        fontWeight: 600,
      },
    },
    linkEn: {
      fontFamily: "Varela Round, sans-serif",
      color: "#ffc527",
      fontSize: 11,
      lineHeight: 0,
      fontWeight: 400,
      letterSpacing: 0,
    },
    subMenu: {},
  };
});
function Nav() {
  const classes = useStyles();
  return (
    <ul className={classes.root}>
      <li>
        <a href="#">
          <span className={classes.linkEn}>
            News
            <br />
          </span>
          最新消息
        </a>
      </li>
      <li>
        <a href="#">
          <span className={classes.linkEn}>
            Product
            <br />
          </span>
          产品推介
        </a>

        {/* <SubMenu /> */}
        <ScrollSubMenu />
      </li>
      <li>
        <a href="#">
          <span className={classes.linkEn}>
            Stores
            <br />
          </span>
          寻找分店
        </a>
      </li>
      <li>
        <a href="#">
          <span className={classes.linkEn}>
            Membership
            <br />
          </span>
          会员中心
        </a>
      </li>
      <li>
        <a href="#">
          <span className={classes.linkEn}>
            About Us
            <br />
          </span>
          关于满记
        </a>
      </li>
    </ul>
  );
}

export default Nav;
