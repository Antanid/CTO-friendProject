import React from "react";
import style from './style/style.module.scss'

const Footer: React.FC = () => {
  return (
    <div className={style.footer_content}>
      <h5 className={style.logo_text}>Footer</h5>
      <div className={style.footer_phone}>
        <p className={style.call}>Телефонуйте</p>
        <a className={style.phone_number} href="tel:063 219-47-87">
          <p> ☎ (063) 219-47-87</p>
        </a>
        <p>Без вихідних: 10.00-20:00</p>
      </div>
    </div>
  );
};

export default Footer;
