import React from "react";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";
import fbIcon from "./fb_icon.svg";
import igIcon from "./ig_icon.svg";
const useStyles = makeStyles((theme) => {
  return {
    root: { paddingTop: 47, paddingBottom: 40 },
    mediaIcon: {
      display: "inline-block",
      width: 24,
      height: 24,
      marginRight: 10,
      marginLeft: 10,
    },
    fbIcon: {
      backgroundImage: `url(${fbIcon})`,
      backgroundPosition: "50% 50%",
      backgroundSize: "24px 24px",
      backgroundRepeat: "no-repeat",
    },
    igIcon: {
      backgroundImage: `url(${igIcon})`,
      backgroundPosition: "50% 50%",
      backgroundSize: "24px 24px",
      backgroundRepeat: "no-repeat",
    },
  };
});

function Media() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <a href="#" className={clsx(classes.mediaIcon, classes.fbIcon)}></a>
      <a href="#" className={`${classes.mediaIcon} ${classes.igIcon}`}></a>
    </div>
  );
}

export default Media;
