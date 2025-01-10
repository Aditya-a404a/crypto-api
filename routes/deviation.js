const { MongoClient } = require('mongodb');
const express = require('express');
const router = express.Router();
const uri = process.env.MONGO;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
let db
require('dotenv').config();
client.connect().then(() => {
   db = client.db('cryptoDB');
  console.log('MongoDB connected');
}).catch(err => console.error(err));
//  NEXT COMMIT WILL CHANGE IT INTO A FUNCTION
router.get('/',async (req, res) => {
    const { coin } = req.query;
    try {
      const records = await db.collection('cryptoData').find({ coin }).sort({ timestamp: -1 }).limit(100).toArray();
      if (records.length === 0) return res.status(404).json({ message: 'No data found' });
      const prices = records.map(record => record.price);
      const mean = prices.reduce((acc, price) => acc + price, 0) / prices.length;
      const variance = prices.reduce((acc, price) => acc + Math.pow(price - mean, 2), 0) / prices.length;
      const deviation = Math.sqrt(variance);
      res.json({ deviation });
    } catch (error) {
      res.status(500).json({ message: 'Error calculating deviation', error });
    }
  }); 
module.exports = router;