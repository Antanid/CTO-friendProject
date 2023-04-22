import React from "react";
import style from "./style/style.module.scss";

type TextProps = {
  pText: string;
};

const EqpDesc: React.FC<TextProps> = ({ pText }) => {
  return (
    <p  className={style.equipm_pText}>
      {pText}
    </p>
  );
};

export default EqpDesc;
