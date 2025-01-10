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

router.get('/', async (req, res) => {
    const { coin } = req.query;
    try {
      const latestData = await db.collection('cryptoData').findOne({ coin }, { sort: { timestamp: -1 } });
      if (!latestData) return res.status(404).json({ message: 'No data found' });
      res.json({
        price: latestData.price,
        marketCap: latestData.marketCap,
        '24hChange': latestData.change24h,
      });
    } catch (error) {
      res.status(500).json({ message: 'Error fetching data', error });
    }
  });

module.exports = router;