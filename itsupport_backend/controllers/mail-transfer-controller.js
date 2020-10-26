const Joi = require('joi'); // validation module
const nodemailer = require('nodemailer');
const config = require('config');
const debug = require('debug')('app:logs');

module.exports = {
    sendMialController : (req, res) => {

    const {error} = validateEmailJson(req.body);
    if(error) {
      debug(error.details[0].message)
       return res.status(400).send(error.details[0].message);
    }

    // send email logic
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: config.get('email.user'),
          pass: config.get('email.password')
        }
      });

      const mailOptions = {
        from: req.body.from,
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.text
      };

      debug(mailOptions);

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            debug(error);
            return res.status(500).send(new Error(error));
          
        } else {
            debug('Email sent: ' + info.response);
            res.send(`Email sent successfully to ${req.body.to}`)
        }
      });

    }
}
function validateEmailJson(body){
    const schema = {
        from: Joi.string().required().email(),
        to: Joi.string().required().email(),
        subject: Joi.string().required(),
        text: Joi.string().required().max(255)
    }
    return Joi.validate(body, schema);
}