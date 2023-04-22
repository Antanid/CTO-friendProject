import React from "react";
import style from "./style/style.module.scss";

type ImgProps = {
  numberImg: string;
};

const AskImg: React.FC<ImgProps> = ({ numberImg }) => {
  return (
    <a className={style.img_ask} href="tel:063 219-47-87">
      <img src={numberImg} alt="numberImg" />
    </a>
  );
};

export default AskImg;
