import React from "react";
import { Fade } from "react-awesome-reveal";

import freon1 from "../../assets/img/freon1.jpeg";
import freon2 from "../../assets/img/freon2.jpeg";

import FreonH2 from "./FreonH2";
import FreonImg from "./FreonImg";
import FreonText from "./FreonText";
import style from "./style/style.module.scss";

const Freon: React.FC = () => {
  return (
    <div className={style.freon_content}>
      <Fade direction="right">
        <FreonH2 h2Text='ЗАПРАВКА АВТОКОНДИЦІОНЕРІВ ВИРОБЛЯЄТЬСЯ ЯКІСНИМ ФРЕОНОМ ФІРМИ "SAN MEI"' />
      </Fade>
      <FreonImg freon1={freon1} freon2={freon2} />
      <FreonText
        firstText="Фреон від Японської компанії SAN MEI (Zhejiang Sanmei Chemical Industry Co., Ltd) на
      сьогоднішній день є одним із найякісніших на ринку. Ми можемо з упевненістю сказати, що
      холодоагент 134а, який ми пропонуємо нашим клієнтам – дійсно вартий того, щоб їм заправити
      автомобіль."
        secendText="Завдяки великим оптовим поставкам SAN MEI фреону (холодоагент 134а), для вас вихідна ціна
      буде набагато дешевшою."
      />
    </div>
  );
};

export default Freon;
