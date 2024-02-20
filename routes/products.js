import { Router } from 'express';
import { createProduct, products } from '../controllers/products.js';

const router = Router();

// http://localhost:8080/api/products
// create product
router.post('/products', createProduct);

// http://localhost:8080/api/products
// get all products
router.get('/products', products);


export default router;