import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
    {       
        name: {
            type: String,
        },
        category: {
            type: String,
        },
        description: {
            type: String, 
        },
        aboutProduct: {
            type: String, 
        },
        color: {
           type: String, 
        },
        quantity: {
            type: String,
        },
        price: {
            type: Number,
        },
        image: [
            {
                type: String,
            }
        ],
        picture: {
            type: String,
        },
        reviews: {
            type: Array,
            default: [],
        },
        questions: {
            type: Array,
            default: [],

        }
    },
    { timestamps: true },
);
export default mongoose.model('Product', ProductSchema);