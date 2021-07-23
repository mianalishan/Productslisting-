const Post = require('../model/Product');
const ProductRepository = require('../repository/ProductRepository');
const productsRepo = new ProductRepository();
module.exports = {
    getProducts:async  (req, res) => {
        let products = await productsRepo.getAll();
        console.log(products);
        res.json(products);
    },
    getProductById:async (req, res) => {
        let product = await productsRepo.getById(req.params.productId);
        console.log("controller "+product.ProductName);
        res.json(productsRepo);
    },

    createProduct:async (req,res,next)=>{
          let {ProductName,
            ProductDesp,
            ProductImageUrl,
            ProductSytle}=req.body;
          await productsRepo.createProduct({ProductName,
            ProductDesp,
            ProductImageUrl,
            ProductSytle});
          res.json( {success:true});
    },

    updateProduct:async (req,res,next)=>{
        const {ProductName,
            ProductDesp,
            ProductImageUrl,
            ProductSytle}=req.body;
        const productId=req.params.productId;
        await productsRepo.updateProduct(productId,{ProductName,
            ProductDesp,
            ProductImageUrl,
            ProductSytle});
        res.json( {success:true});

    },

    deleteProduct:async(req,res,next)=>{
        const productId=req.params.productId;
        await productsRepo.removeProduct(productId);
        res.json( {success:true});
    }


};