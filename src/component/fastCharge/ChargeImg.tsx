import React from "react";
import { Fade } from "react-awesome-reveal";
import style from "./style/style.module.scss";

type ImgProp = {
  chargePlace: string;
  chargeMan: string;
};

const ChargeImg: React.FC<ImgProp> = ({ chargePlace, chargeMan }) => {
  return (
    <div className={style.img_block}>
      <Fade direction="left" delay={0.2}>
        <img src={chargeMan} alt="chargeMan" />
      </Fade>

      <Fade direction="right" delay={0.2}>
        <img src={chargePlace} alt="chargePlace" />
      </Fade>
    </div>
  );
};

export default ChargeImg;
