import React from 'react';
import s from '@/app/ui/users/users.module.css'
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import ava from "@/public/noa.png"
import Pagination from "@/app/ui/dashboard/pagination/pagination";

const UsersPage = () => {
    return (
        <div className={s.container}>
            <div className={s.top}>
                <Search placeholder="Search for a user..."/>
                <Link href={"/dashboard/users/add"}>
                    <button className={s.addBtn}>Add New</button>
                </Link>
            </div>
            <table className={s.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Created At</td>
                        <td>Role</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={s.user}>
                                <Image
                                    src={ava}
                                    alt={'avatar'}
                                    width={40}
                                    height={40}
                                    className={s.userImage}/>
                                John Doe
                            </div>
                        </td>
                        <td>john@gmail.com</td>
                        <td>20.11.2025</td>
                        <td>Admin</td>
                        <td>active</td>
                        <td>
                            <div className={s.buttons}>
                                <Link href={"/"}>
                                    <button className={`${s.btn} ${s.view}`}>View</button>
                                </Link>
                                <button className={`${s.btn} ${s.delete}`}>Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </div>
    );
};

export default UsersPage;