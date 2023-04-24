const express = require('express');
const app = express();
const nodemailer = require("nodemailer");


const PORT = process.env.PORT || 5000;
//middleware
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})


app.listen(PORT, () =>{
    console.log('server running on port -' + PORT)
})

app.post('/', (req, res) =>{
    console.log(req.body);
    const transporter = nodemailer.createTransport({
        /*service: 'gmail',
        auth: {
            user: 'snellithanathu@gmail.com',
            pass: 'kyuzbxoduzybgcez'
        },*/
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'snellithanathu@gmail.com',
            pass: 'kyuzbxoduzybgcez'
        }
    /*    get auth() {
            return this._auth;
        },
        set auth(value) {
            this._auth = value;
        },*/
    })
    const mailOptions ={
        from: req.body.email,
        to: 'snellithanathu@gmail.com',
       // subject: 'Message from' + req.body.email + req.body.subject,
       subject: 'Message from' +req.body.email,
       
        text:'subject- '+ req.body.subject + req.body.message
    }
    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
        console.log(error);
        res.send('error');
        }else{
            console.log('Email sent'+ info.response);
            res.send('sucess');
        }
    })
}) 