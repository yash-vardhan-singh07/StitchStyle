const nodemailer = require("nodemailer");
module.exports.sendMail = async function sendMail(str, data,res) {
    try{
    let transporter = await nodemailer.createTransport({

        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            // TODO: replace `user` and `pass` values from <https://forwardemail.net>
            user: 'mateo.bartell@ethereal.email',
            pass: 'FQKgKPQJ2EgBaTPhG4'
        }
    });
    var osubject, otext, ohtml;
    if (str == "signup") {
        osubject = `Thank You for signinh ${data.name}`;
        ohtml = `
        <h1>Welcome to StitchStyle.com</h1>
        Hope you have a good time here
        Name - ${data.name}
        Email - ${data.email}`
    }
    else if (str == "resetpassword") {
        osubject = "Reset Password";
        ohtml = `
        Click here to reset your password : 
        ${data.resetPasswordLink}
    `
    }
    let info = await transporter.sendMail({
        from: '<mateo.bartell@ethereal.email>',
        to: data.email, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
}
catch(err){
    console.log(err.message,"nodemailer");
}
}
