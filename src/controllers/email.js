const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        host: 'smtp.gmail.com',
        port: 465,
        use_authentication: true,
        user: "ericksoi3709@gmail.com",
        pass: "udelraqjvfospwaq"
    }
});

let message = {
    from: "ericksoi3709@gmail.com",
    to: "erick.soi@hotmail.com",
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