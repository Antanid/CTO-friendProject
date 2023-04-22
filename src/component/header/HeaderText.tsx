import React from "react";
import style from "./style/style.module.scss";

type TextProps = {
  h1Text: string;
  pText: string;
};

const HeaderText: React.FC<TextProps> = ({ h1Text, pText }) => {
  return (
    <>
      <h1 className={style.logoText}>{h1Text}</h1>
      <p className={style.secendText}>{pText}</p>
    </>
  );
};

export default HeaderText;
