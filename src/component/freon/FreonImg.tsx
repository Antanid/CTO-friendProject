import React from "react";
import { Fade } from "react-awesome-reveal";
import style from "./style/style.module.scss";

type ImgProps = {
  freon1: string;
  freon2: string;
};

const FreonImg: React.FC<ImgProps> = ({ freon1, freon2 }) => {
  return (
    <div className={style.freon_img}>
      <Fade direction="left" delay={0.3}>
        <img src={freon1} alt="freon1" />
      </Fade>
      <Fade direction="right" delay={0.3}>
        <img src={freon2} alt="freon2" />
      </Fade>
    </div>
  );
};

export default FreonImg;
