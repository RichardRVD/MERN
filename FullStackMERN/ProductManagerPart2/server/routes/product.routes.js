const ProductController = require("../controllers/product.controller");


module.exports = app => {
    app.post('/api/product/new', ProductController.createProduct);

    app.get('/api/products', ProductController.getAllProducts);

    app.get('/api/product/:id', ProductController.getProduct);

    app.put("/api/product/update/:id", ProductController.updateProduct);

    app.delete("/api/product/delete/:id", ProductController.deleteProduct);
}