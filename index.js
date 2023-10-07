import express from 'express';
// import { emagProduct, jarProduct, tehnopolisProduct } from '/mainLogic';

const app = express();
app.use(express.static('public'));

 
const port = 3000;

app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});



app.get('/emag', (req, res) => {
  res.send("Hello to emag");
});
