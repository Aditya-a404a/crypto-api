// Import necessary packages
const express = require('express');
const { MongoClient } = require('mongodb');
const axios = require('axios');
const cron = require('node-cron');
require('dotenv').config();
const app = express();
const uri = process.env.MONGO;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
let db
client.connect().then(() => {
   db = client.db('cryptoDB');
  console.log('MongoDB connected');
}).catch(err => console.error(err));
//  NEXT COMMIT WILL CHANGE IT INTO A FUNCTION
cron.schedule('0 */2 * * *', async () => {
  const coins = ['bitcoin', 'matic-network', 'ethereum'];
  try {
    for (const coin of coins) {
      const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd&include_market_cap=true&include_24hr_change=true`);
      const data = response.data[coin];
      const newEntry = {
        coin,
        price: data.usd,
        marketCap: data.usd_market_cap,
        change24h: data.usd_24h_change,
        timestamp: new Date(),
      };
      await db.collection('cryptoData').insertOne(newEntry);
      setTimeout(()=>{
        console.log("waiting done")
      },10)
    }
    console.log('Data fetched and stored successfully');
    
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}); 
// CRON JOB WILL MOVE TO NEXT PAGE
const statsRoute = require('./routes/stats');//API TO GET DETAILS
const deviationRoute = require('./routes/deviation');// API TO GET DEVIATION 
const HomeRoute = require("./routes/home")
app.use('/stats', statsRoute);
app.use('/deviation', deviationRoute);
app.use('/',HomeRoute);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
