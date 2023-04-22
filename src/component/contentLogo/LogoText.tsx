import React from "react";
import { Fade } from "react-awesome-reveal";
import style from "./style/style.module.scss";

type LogoType = {
  autoLogo: string,
  pText: string
};

const LogoText: React.FC <LogoType> = ({ autoLogo, pText }) => {
  return (
    <div className={style.img_text}>
      <Fade direction="left">
      <img className={style.img_logo} src={autoLogo} alt="autoLogo" />
      </Fade>
      <Fade direction="right">
      <p className={style.text_logo}>
        {pText}
      </p>
      </Fade>
    </div>
  );
};

export default LogoText;
