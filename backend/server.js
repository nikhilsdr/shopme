//const express = require('express');
import express from 'express';
//( to work the import function, add type:module in package.json)

import backendData from './backendData.js'

const app = express();

app.get('/',(req, res) => {

    res.send('hello world form node!')
 
 })

 app.get('/api/products',(req, res) => {

    res.send(backendData)
 
 })

 
 const port = process.env.PORT || 8000;

  app.listen(port, ()=>{
    try{
      console.log(`Server is running on the port: ${ port }`);
    }catch(err){
        console.log('Error',err);
    }
  });