import React from 'react';
import s from "@/app/ui/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import ava from "@/public/not_found.png";
import Pagination from "@/app/ui/dashboard/pagination/pagination";

const ProductsPage = () => {
    return (
        <div className={s.container}>
            <div className={s.top}>
                <Search placeholder="Search for a product..."/>
                <Link href={"/dashboard/products/add"}>
                    <button className={s.addBtn}>Add New</button>
                </Link>
            </div>
            <table className={s.table}>
                <thead>
                <tr>
                    <td>Title</td>
                    <td>Description</td>
                    <td>Price</td>
                    <td>Created At</td>
                    <td>Stock</td>
                    <td>Action</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <div className={s.product}>
                            <Image
                                src={ava}
                                alt={'avatar'}
                                width={40}
                                height={40}
                                className={s.productImage}/>
                            IPhone
                        </div>
                    </td>
                    <td>Description</td>
                    <td>$999</td>
                    <td>20.11.2025</td>
                    <td>72</td>
                    <td>
                        <div className={s.buttons}>
                            <Link href={"/dashboard/products/test"}>
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

export default ProductsPage;