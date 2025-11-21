import React from 'react';
import s from '@/app/ui/products/singleProduct/singleProduct.module.css'
import Image from "next/image";
import ava from '@/public/not_found.png'

const SingleProductPage = () => {
    return (
        <div className={s.component}>
            <div className={s.infoContainer}>
                <div className={s.imgContainer}>
                    <Image src={ava} alt={'avatar'} fill/>
                </div>
                Iphone
            </div>
            <div className={s.formContainer}>
                <form className={s.form}>
                <label>Title</label>
                <input type={'text'} name={'title'} placeholder={'Iphone'}/>
                <label>Price</label>
                <input type={'number'} name={'price'} placeholder={'5000'}/>
                <label>Stock</label>
                <input type={'number'} name={'stock'} placeholder={'23'}  />
                <label>Color</label>
                <input type={'text'} name={'color'} placeholder={'red'}/>
                <label>Size</label>
                <textarea name={'size'} placeholder={'New York'}/>
                <label>Cat</label>
                <select name={'cat'} id={'cat'}>
                    <option value={'kitchen'}>Kitchen</option>
                    <option value={'computers'}>Computers</option>
                </select>
                <label>Description</label>
                <textarea name={'description'} placeholder={'Description'} id={'description'} rows={10}/>
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    );
};

export default SingleProductPage;