import React from "react";
import { Fade } from "react-awesome-reveal";
import chargeMan from "../../assets/img/chargeMan.jpeg";
import chargePlace from "../../assets/img/chargePlace.jpeg";
import ChargeDesc from "./ChargeDesc";
import ChargeImg from "./ChargeImg";
import ChargeText from "./ChargeText";
import style from "./style/style.module.scss";

const FastCharge: React.FC = () => {
  return (
    <div className={style.charge_content}>
      <Fade direction="left">
        <ChargeText
          pText="Ми знаходимося в основному на паркінгах великих ТЦ. Бля вашої зручності та вдалого
      проведення часу під час самої заправки."
          h2Text="ЗАПРАВКА АВТОКОНДИЦІОНЕРІВ У Кропивницькому ЗА 30 ХВИЛИН!"
        />
      </Fade>
      <ChargeImg chargePlace={chargePlace} chargeMan={chargeMan} />
      <ChargeDesc
        pText="Середній час заправки займає 30 хвилин. Цей час ви з комфортом зможете провести у ТЦ, випити
      кави, купити кілька речей."
      />
    </div>
  );
};

export default FastCharge;
