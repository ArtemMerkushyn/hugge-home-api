import Product from "../models/Product.js";

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