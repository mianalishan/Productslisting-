const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    /*- Product Name
- Product Description
- Product Image
- Length
- Color
- Style
*/ 
    ProductName: {
        type: String,
       
    },
    ProductDesp: {
        type: String,
       
    },
    ProductImageUrl: {
        type: String,
        
    },
    Color: {
        type: String
    },
    Lenght: {
        type: String
    },
    Productsytle:{
        type:String
        
    }
});

module.exports = mongoose.model('Product', ProductSchema);