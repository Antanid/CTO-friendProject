import React from "react";
import style from "./style/style.module.scss";

type TextProps = {
  headerText: string;
  pText: string;
  spanText: string;
  endText: string;
  endSpan: string
};

const Description: React.FC<TextProps> = ({ headerText, pText, spanText, endText, endSpan}) => {
  return (
    <div className={style.borderPrice}>
      <h3 className={style.price}>{headerText}</h3>
      <p className={style.descPrice}>
        <span>{spanText}</span>
        {pText}
      </p>
      <h3 className={style.price}>ЦІНА ФРЕОНА?</h3>
      <p className={style.descPrice}>
        <span>
          {endSpan}
        </span>{" "}
        {endText}
      </p>
    </div>
  );
};
export default Description;
