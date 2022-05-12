const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'yourservice',
    auth: {
        host: 'smtp.server.com',
        port: 465,
        use_authentication: true,
        user: "example@mail.com",
        pass: "12345"
    }
});

let message = {
    from: "example@mail.com",
    to: "example@mail.com",
    subject: "Subject",
    html: "<h1>Hello Test SMTP Email</h1>",
    attachments: [{
        filename: 'upload.js',
        path: __dirname + '/upload.js',
        cid: 'upload.js'
    }]
}

transporter.sendMail(message, function(err, info) {
    if (err) {
        console.log(err);
    } else {
        console.log(info);
    }
})