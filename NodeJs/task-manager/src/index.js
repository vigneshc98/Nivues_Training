const app = require('./app');

const port = process.env.PORT;

app.listen(port, ()=>{
    console.log('server started on port ',port);
});

// -----------------
// const sgMail = require('@sendgrid/mail');


// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

//     sgMail.send({
//         to:'vignesh.chandrashekar16@gmail.com',
//         from:'vignesh.c1698@gmail.com',
//         subject:'Thank for joining in',
//         text:`Welcome to the app, let me know how you get along with the app.`
//     });




