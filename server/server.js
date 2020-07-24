import {gmailUser, gmailPass} from '../config.js';
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();

// Allow CORS
app.use(cors());

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
        subject: req.body.name + ' wants to connect at' + req.body.email,
        text: req.body.body
    }

    smtp.sendMail(email, (err) =>{
       if(err) res.sendStatus(500);
       else res.sendStatus(200);
    });
});

app.listen(3001, () => {
    console.log('Listening');
});