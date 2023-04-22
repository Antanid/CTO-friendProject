import React from "react";
import style from "./style/style.module.scss";

type TextProps = {
  pText: string;
};

const ChargeDesc: React.FC<TextProps> = ({ pText }) => {
  return <p className={style.timeCharge}>{pText}</p>;
};

export default ChargeDesc;
