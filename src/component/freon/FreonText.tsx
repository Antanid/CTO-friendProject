import React from "react";
import style from "./style/style.module.scss";

type TextProps = {
  firstText: string;
  secendText: string
}

const FreonText: React.FC <TextProps> = ({firstText, secendText}) => {
  return (
    <div className={style.freon_text}>
      <p className={style.first_text}>
        {firstText}
      </p>
      <p className={style.secend_text}>
        {secendText}
      </p>
    </div>
  );
};

export default FreonText;
