import React, { useRef, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import Link from "./Link";
import { gsap } from "gsap";

import icon61 from "./images/61.png";
import icon104 from "./images/104.png";

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
    menu: {
      display: "inline-block",
      height: "100%",
      whiteSpace: "nowrap",
    },
  };
});
function ScrollSubMenu() {
  const classes = useStyles();
  const $nav = useRef();
  const $wrap = useRef();

  useEffect(() => {
    const Wrap = $wrap.current;
    const Nav = $nav.current;
    let wrapWidth = Wrap.clientWidth;
    let navWidth = Nav.clientWidth;

    let oldx = 0;
    let direction = "";
    // 滑动导航条向左边
    const slideLeft = (target, number) => {
      let minMarginLeft = 0;
      let value = parseInt(target.style.marginLeft.replace("px", "")) + number;
      // console.log("minMarginLeft", minMarginLeft);
      // console.log("value", value);
      if (value > minMarginLeft) {
        value = minMarginLeft;
      }
      gsap.to([target], {
        marginLeft: value + "px",
        duration: 0.7,
      });
    };
    // 滑动导航条向右边
    const slideRight = (target, number) => {
      let maxMarginLeft = navWidth - wrapWidth;
      let value = parseInt(target.style.marginLeft.replace("px", "")) - number;
      // console.log(Math.abs(value) > maxMarginLeft);
      if (Math.abs(value) > maxMarginLeft) {
        value = -maxMarginLeft;
      }
      gsap.to([target], {
        marginLeft: value + "px",
        duration: 0.7,
      });
    };
    // 添加鼠标滑动事件
    Nav.addEventListener("mousemove", (event) => {
      const pageX = event.pageX;
      if (pageX > oldx) {
        direction = "right";
        slideRight(Nav, 50);
      } else if (pageX < oldx) {
        direction = "left";
        slideLeft(Nav, 50);
      }
      oldx = event.pageX; //set oldx
    });
  }, []);

  return (
    <nav className={classes.root}>
      <Container
        maxWidth="lg"
        disableGutters
        sx={{
          height: "100%",
          overflow: "hidden",
        }}
        ref={$wrap}
      >
        <div className={classes.menu} ref={$nav} style={{ marginLeft: "0px" }}>
          <Link label="新品登場" icon={icon104} />
          <Link label="芒果甜品" icon={icon61} />
          <Link label="榴梿系列" icon={icon61} />
          <Link label="雪山系列 (可加配雪糕)" icon={icon61} />
          <Link label="饮品" icon={icon61} />
          <Link label="中式糖水" icon={icon61} />
          <Link label="水果系列" icon={icon61} />
          <Link label="抹茶系列" icon={icon61} />
          <Link label="情迷窝夫" icon={icon61} />
          <Link label="九份. 芋圓" icon={icon61} />
          <Link label="糕点" icon={icon61} />
        </div>
      </Container>
    </nav>
  );
}

export default ScrollSubMenu;
