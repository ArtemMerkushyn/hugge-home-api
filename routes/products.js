import { Router } from 'express';
import { products } from '../controllers/products.js';

const router = Router();

// http://localhost:8080/api/products
// products
router.get('/products', products);


export default router;