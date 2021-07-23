const Product =require('../model/Product');
class ProductRepository {
    constructor() {
       
    }



    async getById(id) {
        let product = {};
        product = await Product.findById(id);
        return product;
    }

    async getAll() {
        let products = await Product.find();
        return products;
    }

    async createProduct(productData){
        let newProduct={
            ProductName:productData.ProductName,
            ProductDesp:productData.ProductDesp,
            ProductImageUrl:productData.ProductImageUrl,
            ProductSytle:productData.ProductSytle

        }

        await Product.insertMany(newProduct);
        return {success:true};
    }

    async updateProduct(productId, productData){
        const product =await Product.findById(productId);

        if(product){
            await Product.findByIdAndUpdate(productId,{ 
                ProductName:productData.ProductName,
                ProductDesp:productData.ProductDesp,
                ProductImageUrl:productData.ProductImageUrl,
                ProductSytle:productData.ProductSytle},
            {new:true});
        }
        return {success:true};
    }

    async removeProduct(productId){
        const product =await Product.findById(productId);
        if(product){
            await product.remove();
            return {success:true};
        }
    }
}

module.exports = ProductRepository;