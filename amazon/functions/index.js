const functions = require("firebase-functions");
const express=require('express');
const cors=require('cors');
const stripe=require('stripe')('sk_test_51Kwxr0LWUCvI8KkJfz1Fm5xKcDbJWERUZcpse5uuj8EyJdtNKqk8LGAtRoiD7cE3JDu8NO0PVoinlhelfDEofNMY00PaQoS9aB')
const app=express();

app.use(cors({origin:true}));

app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).send('hello')
})
app.post('/payment/purchase',async(req,res)=>{
     const total=req.query.total;
     console.log('payment request received '+total)

     const paymentIntent=stripe.paymentIntents.create({
         amount:total,
         currency:'usd'
     })
     res.status(201).send({
         clientSecret:paymentIntent.client_secret,
     })
})

exports.api=functions.https.onRequest(app);