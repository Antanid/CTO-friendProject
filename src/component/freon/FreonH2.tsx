import React from "react";
import style from "./style/style.module.scss";

type TextProps = {
  h2Text: string;
};

const FreonH2: React.FC<TextProps> = ({ h2Text }) => {
  return (
    <h2  className={style.freon_H2}>
      {h2Text}
    </h2>
  );
};

export default FreonH2;
