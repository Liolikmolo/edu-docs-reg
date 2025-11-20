import React from 'react';
import s from './card.module.css'
import {MdSupervisedUserCircle} from "react-icons/md";

const Card = () => {
    return (
        <div className={s.container}>
            <MdSupervisedUserCircle size={24} />
            <div className={s.texts}>
                <span className={s.title}>Total Users</span>
                <span className={s.number}>10.273</span>
                <span className={s.detail}>
                    <span className={s.positive}>12%</span> more then previous week
                </span>
            </div>
        </div>
    );
};

export default Card;