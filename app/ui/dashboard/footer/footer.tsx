import React from 'react';
import s from './footer.module.css'

const Footer = () => {
    return (
        <div className={s.container}>
            <div className={s.logo}>DEVALTAR</div>
            <div className={s.text}>All rights reserved</div>
        </div>
    );
};

export default Footer;