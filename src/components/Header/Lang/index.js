import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    root: { paddingTop: 47, paddingBottom: 40 },
    link: {
      marginRight: 4,
      marginLeft: 4,
      paddingRight: 2,
      paddingLeft: 2,

      fontSize: 14,
      fontWeight: 600,
      color: "#8a8a8a",
      textDecoration: "none",
    },
  };
});
function Lang() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <a className={classes.link} href="#">
        En
      </a>
      <a className={classes.link} href="#">
        简
      </a>
      <a className={classes.link} href="#">
        繁
      </a>
    </div>
  );
}

export default Lang;
