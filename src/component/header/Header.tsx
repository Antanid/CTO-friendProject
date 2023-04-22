import React from "react";
import { Flip } from "react-awesome-reveal";
import Description from "./Description";
import HeaderText from "./HeaderText";
import PhoneNumber from "./PhoneNumber";
import style from "./style/style.module.scss";

const Header: React.FC = () => {
  return (
    <div className={style.header}>
      <HeaderText
        h1Text="Рома Ковалев Автобот"
        pText="Мережа станцій по заправці автокондиціонерів"
      />

      <Description
        headerText="СЕРЕДНЯ ЦІНА ЗАПРАВКИ?"
        pText='Комплекс включає відкачування залишків
      вашого фреону і масла, вакуумацію, перевірку системи на герметичність, додавання
      оригінальної компресорної олії PAG-46 ("Poe" для електромобілів) з барвником, заправка
      оригінальним фреоном.'
        spanText="- 982 грн (500 грн комплекс + фреон)."
        endText="(фреон японської фірми San Mei 100% якість, 100% оригінальність)"
        endSpan="- 1.5 грн <s>1.75 грн</s>"
      />
      <Flip triggerOnce>
        <PhoneNumber pText="Працюємо без вихідних!" phoneNumber="☎ (063) 219-47-87" />
      </Flip>
    </div>
  );
};

export default Header;
