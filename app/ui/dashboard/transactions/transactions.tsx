import React from 'react';
import s from './transactions.module.css'
import Image from "next/image";
import noavatar from '@/public/noa.png'

const Transactions = () => {
    return (
        <div className={s.container}>
            <h2 className={s.title}>Latest Transactions</h2>
            <table className={s.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={s.user}>
                                <Image
                                    src={noavatar}
                                    alt={'no avatar'}
                                    width={40}
                                    height={40}
                                    className={s.userImage}
                                />
                                John Doe
                            </div>
                        </td>
                        <td>
                            <span className={`${s.status} ${s.pending}`}>Pending</span>
                        </td>
                        <td>14.02.2025</td>
                        <td>$3.200</td>
                    </tr><tr>
                        <td>
                            <div className={s.user}>
                                <Image
                                    src={noavatar}
                                    alt={'no avatar'}
                                    width={40}
                                    height={40}
                                    className={s.userImage}
                                />
                                John Doe
                            </div>
                        </td>
                        <td>
                            <span className={`${s.status} ${s.done}`}>Done</span>
                        </td>
                        <td>14.02.2025</td>
                        <td>$3.200</td>
                    </tr><tr>
                        <td>
                            <div className={s.user}>
                                <Image
                                    src={noavatar}
                                    alt={'no avatar'}
                                    width={40}
                                    height={40}
                                    className={s.userImage}
                                />
                                John Doe
                            </div>
                        </td>
                        <td>
                            <span className={`${s.status} ${s.cancelled}`}>Cancelled</span>
                        </td>
                        <td>14.02.2025</td>
                        <td>$3.200</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Transactions;