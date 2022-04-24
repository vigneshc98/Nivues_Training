const sgMail = require('@sendgrid/mail');

const sendGridAPIKey = 'your sendgrid api key';

sgMail.setApiKey(sendGridAPIKey);

sgMail.send({
    to:'vignesh.chandrashekar16@gmail.com',
    from:'vignesh.c1698@gmail.com',
    subject:'This is my first creation',
    text:'I hope this one actually get to you'
});
