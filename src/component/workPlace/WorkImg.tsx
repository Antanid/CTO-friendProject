import React from "react";
import { Fade } from "react-awesome-reveal";
import style from "./style/style.module.scss";

type ImgProps = {
  mapPlace: string;
  photoPlace: string;
};

const WorkImg: React.FC<ImgProps> = ({ mapPlace, photoPlace }) => {
  return (
    <div className={style.work_img}>
      <Fade direction="left" delay={0.3}>
        <a href="https://www.google.com.ua/maps/place/%D0%A1%D0%A2%D0%9E+Autodoc,+%D0%9A%D1%80%D0%BE%D0%BF%D0%B8%D0%B2%D0%BD%D0%B8%D1%86%D1%8C%D0%BA%D0%B8%D0%B9,+%D0%9A%D1%96%D1%80%D0%BE%D0%B2%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+25000/@48.4910131,32.2131191,18z/data=!4m9!1m2!2m1!1z0LrQvtCy0LDQu9GR0LIg0LDQstGC0L4!3m5!1s0x40d043329ef62f23:0x2af2cdf22843758d!8m2!3d48.4911403!4d32.2134198!16s%2Fg%2F11l4lxdqfw?hl=ru-ua">
          <img src={mapPlace} alt="mapPlace" />
        </a>
      </Fade>
      <Fade direction="right" delay={0.3}>
        <img src={photoPlace} alt="photoPlace" />
      </Fade>
    </div>
  );
};

export default WorkImg;
