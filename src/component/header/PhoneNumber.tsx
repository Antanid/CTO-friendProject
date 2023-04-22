import React from "react";
import style from "./style/style.module.scss";

type TextProps = {
  phoneNumber: string;
  pText: string;
};

const PhoneNumber: React.FC<TextProps> = ({ phoneNumber, pText }) => {
  return (
    <a
      className={style.a_Phone}
      href="tel:063 219-47-87"
    >
      <div className={style.phoneNumber}>
        <div className={style.phoneBlock}>
          <p className={style.number}> {phoneNumber}</p>
          <p className={style.text_phone}>{pText}</p>
        </div>
      </div>
    </a>
  );
};

export default PhoneNumber;
