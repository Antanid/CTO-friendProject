import React from "react";
import style from "./style/style.module.scss";

type TextProps = {
  h2Text: string;
  pText: string;
};

const ChargeText: React.FC<TextProps> = ({ h2Text, pText }) => {
  return (
    <div className={style.main_text}>
      <h2>{h2Text}</h2>
      <p>{pText}</p>
    </div>
  );
};

export default ChargeText;
