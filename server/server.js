import {gmailUser, gmailPass} from '../config';

const express = require('express');
const nodemailer = require('nodemailer');
const axios = require('axios');
const cors = require('cors');

const app = express();

// Allow CORS
app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true
    })
)

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.post('/contacted', (req,res) =>{
    // SMTP Server
    const smtp = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: gmailUser,
            pass: gmailPass
        }
    })

    // Email template
    const email = {
        from: req.body.email,
        to: gmailUser,
        subject: req.body.name + 'wants to connect',
        text: req.body.message 
    }

    smtp.sendMail(emai, (err, res) =>{
        if(err) console.log('its fucked');
        else console.log('Contact successful!');
    });
});

app.listen(3001);