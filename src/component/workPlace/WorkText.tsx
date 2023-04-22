import React from "react";
import style from "./style/style.module.scss";

const WorkText: React.FC = () => {
  return (
    <div className={style.work_Text}>
      <p className={style.ready_text}>Решились на заправку автокондиционера?</p>
      <h2 className={style.text_h2}>МЫ НАХОДИМСЯ НА ТАКОЙ ЛОКАЦИИ:</h2>
      <h2 className={style.text_h2}>кропивницкий, вул.Шосейна</h2>
      <h2 className={style.now_work}> СЕЙЧАС РАБОТАЕТ </h2>
      <p className={style.street}>
        проспект Степана Бандери, 23, метро Почайна, ТЦ "ГородОк" возле гипермаркета "FOZZY":
      </p>
    </div>
  );
};

export default WorkText;
