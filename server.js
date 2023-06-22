const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const products = [];
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render(path.join(__dirname, "pages",'home.ejs'));
    }
);
app.get('/about', (req, res) => {
    res.render(path.join(__dirname, "pages",'about.ejs'));
    }
);
app.get('/product', (req, res) => {
    res.render(path.join(__dirname, "pages",'Products.ejs'), {products});
    }
);
app.get('/addproduct', (req, res) => {
    res.render(path.join(__dirname, "pages",'AddProduct.ejs'));
    }
);
app.post('/addproduct', (req, res) => {
    products.push(req.body);
    res.redirect('/product');
    }
);

const server = app.listen(4000, () => {
    console.log('listening on port 4000');
}
);