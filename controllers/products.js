import Product from "../models/Product.js";

// create the product
export const createProduct = async (req, res) => {
    try {
        const { name, category, description, aboutProduct, color, quantity, price, image, picture } = req.body;
        const newProduct = new Product({
            name, category, description, aboutProduct, color, quantity, price, image, picture
        });
        await newProduct.save();
        await res.json(newProduct);
    } catch (error) {
        res.json({error, message: 'Щось пышло не так...'});
    }
}

// get all products
export const products = async (req, res) => {
    try {      
        const products = await Product.find();
        if(!products) {
            res.json({ message: 'Продукти відсутні' })
        }
        res.json(products);
    } catch (error) {
        res.json({error, message: 'Щось пышло не так...'});
    }
}