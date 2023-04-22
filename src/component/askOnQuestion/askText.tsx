import React from "react";
import style from "./style/style.module.scss";

type AskProps = {
  ask: {
    title: string;
    text: string;
  }[];
};

const AskText: React.FC<AskProps> = ({ ask }) => {
  return (
    <div className={style.ask_content}>
      {ask.map((i: { title: string; text: string }) => (
        <>
          <h2>{i.title}</h2>
          <p>{i.text}</p>
        </>
      ))}
    </div>
  );
};

export default AskText;
