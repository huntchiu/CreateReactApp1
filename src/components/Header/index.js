import React from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Brand from "./Brand";
import Nav from "./Nav";
import Media from "./Media";
import Lang from "./Lang";
const useStyles = makeStyles((theme) => {
  return {
    root: {
      position: "relative",
      marginBottom: 10,
      backgroundColor: "#ffffff !important",
      boxShadow:
        "0px 2px 4px -1px rgb(0 0 0 / 6%), 0px 4px 5px 0px rgb(0 0 0 / 7%), 0px 1px 10px 0px rgb(0 0 0 / 4%) !important",
    },
    content: {
      width: "100%",
      marginRight: "auto",
      marginLeft: "auto",
      maxWidth: 1200,
    },
  };
});
function Header() {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <Grid container className={classes.content}>
        {/* auto : 自适应宽度 */}
        <Grid item sx={{ width: { xs: "80%", sm: "90%", md: "auto" } }}>
          <Brand />
        </Grid>
        <Grid item md>
          <Nav />
        </Grid>
        <Grid item container sx={{ width: { md: 219 } }}>
          <Grid item md>
            <Media />
          </Grid>
          <Grid item md>
            <Lang />
          </Grid>
        </Grid>
      </Grid>
    </header>
  );
}

export default Header;
