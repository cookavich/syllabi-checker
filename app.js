/**
 * Created by paulcook on 3/26/16.
 */


var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'oneofmyemails@gmail.com',
        pass: 'apassword'
    }
});

var mailOptions = {
    from: 'oneofmyemails@gmail.com', // sender address
    to: 'anotheremail@me.com', // list of receivers
    subject: 'The Syllabus for your class has been posted', // Subject line
    text: 'See above.' // plaintext body
};

var spawn = require('child_process').spawn,
    ls    = spawn('phantomjs', ['moodle-browser.js']);

ls.stdout.on('data', function (data) {
    var result = console.log('stdout: ' + data);
});

ls.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
});

ls.on('close', function (code) {
    console.log('child process exited with code ' + code)

    if(code == 1) {
        // send mail with defined transport object
        console.log("we have succeeded");
        transporter.sendMail (mailOptions, function (error, info) {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: ' + info.response);
        });

    }
});

