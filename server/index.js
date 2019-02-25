const express = require('express'),
    bodyParser = require('body-parser'),
    nodemailer = require('nodemailer');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/form', (req,res) => {
    nodemailer.createTestAccount((err, account) => {
        if (err) {
            console.error('Failed to create a testing account');
            console.error(err);
            return process.exit(1);
        }
    
        console.log('Credentials obtained, sending message...');
        const htmlEmail = `
            <h3>Contact Details</h3>
            <ul>
                <li>First Name: ${req.body.firstName}</li>
                <li>Last Name: ${req.body.lastName}</li>
                <li>Email: ${req.body.email}</li>
            </ul>
            <h4>Subject</h4>
                <p>${req.body.subject}</p>
            <h3>Message</h3>
                <p>Message: ${req.body.message}</p>`

        const transporter = nodemailer.createTransport({
            host:  'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'a3wozfsg5f4kejcd@ethereal.email',
                pass: 'Bwej5mj5EMtSE2vJHb'
            }
        })

        let mailOptions = {
            from: 'test@test.com',
            to: 'a3wozfsg5f4kejcd@ethereal.email',
            replyTo: 'test@test.com',
            subject: req.body.subject,
            message: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err,info) => {
            // if (err) {
            //     return console.log(err)
            // }
            if (err) {
                console.log('Error occurred');
                console.log(err.message);
                return process.exit(1);
            }
            console.log('Message sent: %s', info.message)
            console.log('MessageURL: %s', nodemailer.getTestMessageUrl(info))
        })
    })
})

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
    console.log(`The Secret Sauce is on Port ${PORT}`);
})

