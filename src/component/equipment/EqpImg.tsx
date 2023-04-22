import React from "react";
import { Fade } from "react-awesome-reveal";
import style from "./style/style.module.scss";

type EqpImgProp = {
  workImg: string;
  priceImg: string;
};

const EqpImg: React.FC<EqpImgProp> = ({ workImg, priceImg }) => {
  return (
    <div className={style.img_block}>
      <Fade direction="left" delay={0.3}>
        <a href="tel:063 219-47-87">
          <img src={priceImg} alt="priceImg" />
        </a>
      </Fade>
      <Fade direction="right" delay={0.3}>
        <img src={workImg} alt="workImg" />
      </Fade>
    </div>
  );
};

export default EqpImg;
