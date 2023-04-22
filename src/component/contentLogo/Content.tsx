import React from "react";
import style from "./style/style.module.scss";
import autoLogo from "../../assets/img/autoholod-logo.jpeg";
import ContentText from "./ContentText";
import LogoText from "./LogoText";
import { Fade } from "react-awesome-reveal";

const Content: React.FC = () => {
  return (
    <div className={style.content_wrapper}>
      <Fade direction="left">
      <ContentText
        h2Text="ЗАПРАВКА АВТОКОНДИЦІОНЕРА В Кропивницькому"
        pText="FЯкщо вам необхідно професійно заправити автокондиціонер у Кропивницькому на вашому авто, випотрапили туди куди треба!"
      />
      </Fade>
      <LogoText
        pText="Підготуйте вчасно ваш автомобіль до сезону, скористайтеся послугою заправки кондиціонера
      вашого авто на професійному обладнанні та не переживайте за справність системи кондиціювання
      влітку, у спекотні дні."
        autoLogo={autoLogo}
      />
    </div>
  );
};

export default Content;
