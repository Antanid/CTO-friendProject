import React from "react";
import { Fade } from "react-awesome-reveal";
import priceImg from "../../assets/img/numberPrice.jpeg";
import workImg from "../../assets/img/work_auto.jpeg";
import EqpDesc from "./EqpDesc";
import EqpImg from "./EqpImg";
import EqpText from "./EqpText";
import style from "./style/style.module.scss";

const Equipment: React.FC = () => {
  return (
    <div>
      <div className={style.equipm_content}>
        <Fade direction="right">
          <EqpText h2Text='ОБЛАДНАННЯ ДЛЯ ЗАПРАВКИ АВТОКОНДИЦІОНЕРІВ "TEXA 705R" R134A - АБСОЛЮТНО НОВЕ' />
        </Fade>
        <EqpImg workImg={workImg} priceImg={priceImg} />

        <EqpDesc
          pText="  Заправна установка TEXA 705R автоматично здійснюють подвійну перевірку можливих у будь-який
      момент витоку газу з балона. Усі операції, що стосуються безпеки, відбуваються повністю
      автоматичним способом, без можливості помилки або забудькуватості з боку оператора. Ви можете
      бути впевнені у високій якості заправки кондиціонера на вашому авто."
        />
      </div>
    </div>
  );
};

export default Equipment;
