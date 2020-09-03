const express = require('express')
const router = express.Router()
const products = require('../data/products');



router.get('/products', (req, res) => res.json(products));

router.get('/products/:id', (req, res) => {
    const productFound = products.find(product => product._id === parseInt(req.params.id));

    if (productFound) {
        res.json(products.find(product => product._id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ Error: `No product with the ID of ${req.params.id}` });
    }
});

let productCounter = products.length + 1;
let productPostId = 1;
router.post('/products', (req, res) => {
    const newProduct = {
        postId: productPostId,
        _id: productCounter,
        name: req.body.name,
        description: req.body.de
    }

    productCounter++
    productPostId++
    products.push(newProduct)
    res.json(products)
});

module.exports = router;