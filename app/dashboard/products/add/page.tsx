import React from 'react';
import s from '@/app/ui/products/addProduct/addProduct.module.css'

const AddProductPage = () => {
    return (
        <div className={s.container}>
            <form className={s.form} action="">
                <input type="text" placeholder="title" name="title" required />
                <select name="cat" id="cat">
                    <option value="general">Choose a category</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <input type="number" placeholder="price" name="price"/>
                <input type="number" placeholder="stock" name="stock"/>
                <input type="text" placeholder="color" name="color"/>
                <input type="text" placeholder="size" name="size"/>
                <textarea
                    name="description"
                    id="description"
                    rows={16}
                    placeholder="description"/>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProductPage;