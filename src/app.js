//utilisation module ES6 avec l import
import express from 'express';
//déclaration de variable pour init express
const app = express();



app.listen(process.env.PORT, () => {
  console.log(`***Connection*** ==> http://localhost:${process.env.PORT}`);
}); 