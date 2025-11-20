import React from 'react';
import s from './pagination.module.css'

const Pagination = () => {
    return (
        <div className={s.container}>
            <button className={s.btn} disabled>Previous</button>
            <button className={s.btn}>Next</button>
        </div>
    );
};

export default Pagination;