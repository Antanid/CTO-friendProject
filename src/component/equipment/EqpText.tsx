import React from "react";
import style from "./style/style.module.scss";

type TextType = {
  h2Text: string
}

const EqpText: React.FC <TextType> = ({h2Text}) => {
  return (
    <div className={style.equipm_text}>
      <h2>{h2Text}</h2>
    </div>
  );
};

export default EqpText;
