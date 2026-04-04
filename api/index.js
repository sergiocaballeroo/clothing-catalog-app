const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const VERSION = process.env.VERSION || '1.0.0';
const ENV = process.env.ENV || 'dev';

const products = [
  { id: 1, name: 'Classic T-Shirt', price: 29.99, category: 'tops', stock: 50 },
  { id: 2, name: 'Slim Jeans',       price: 59.99, category: 'bottoms', stock: 30 },
  { id: 3, name: 'Hoodie',           price: 49.99, category: 'tops', stock: 25 },
  { id: 4, name: 'Chinos',           price: 44.99, category: 'bottoms', stock: 40 },
  { id: 5, name: 'Bomber Jacket',    price: 89.99, category: 'outerwear', stock: 15 },
];

app.get('/health', (req, res) => {
  res.json({ status: 'ok', version: VERSION, env: ENV });
});

app.get('/api/products', (req, res) => {
  const { category } = req.query;
  const result = category ? products.filter(p => p.category === category) : products;
  res.json(result);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ error: 'Product not found' });
  res.json(product);
});

app.listen(3000, () => console.log(`API v${VERSION} [${ENV}] running on :3000`));
