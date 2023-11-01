import express from 'express';
import { MongoClient } from 'mongodb';
import * as tf from '@tensorflow/tfjs-node';

const app = express();
const PORT = 3000;


const client = new MongoClient('mongodb://username:password@localhost:27017', {
  useUnifiedTopology: true,
});

client.connect().then(() => {
  console.log('Connected to MongoDB');
});


const model = tf.loadLayersModel('file://path/to/your/model.json');


app.get('/recommendations/:userId', async (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  const usersCollection = client.db('recommender').collection('users');

  try {
    const user = await usersCollection.findOne({ _id: userId });
    if (!user || !user.embedding) {
      res.status(404).send('User not found');
      return;
    }

    const userEmbedding = tf.tensor(user.embedding);
    const predictions = model.predict(userEmbedding.expandDims(0)); 
    userEmbedding.dispose(); 

    const recommendedProductIds = predictions.flatten().argsort(undefined, false).slice(0, 10); 
    const productsCollection = client.db('recommender').collection('products');
    const recommendedProducts = await productsCollection.find({ _id: { $in: recommendedProductIds } }).toArray();

    res.json(recommendedProducts);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
