import React from "react";
import { Fade } from "react-awesome-reveal";
import mapPlace from "../../assets/img/mapPlace.jpeg";
import photoPlace from "../../assets/img/photoPlace.jpeg";
import style from "./style/style.module.scss";
import WorkImg from "./WorkImg";
import WorkText from "./WorkText";

const Work: React.FC = () => {
  return (
    <div className={style.work_content}>
      <Fade direction="left">
      <WorkText />
      </Fade>
      <WorkImg 
      mapPlace={mapPlace}
      photoPlace={photoPlace}
      />
    </div>
  );
};

export default Work;
