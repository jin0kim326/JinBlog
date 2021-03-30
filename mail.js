"use strict";

import nodemailer from "nodemailer";

const smtpServerURL = "stmp.gmail.com";
const gmail = "Gmail";
const authUser = process.env.GMAIL_EMAIL;
const authPass = process.env.GMAIL_PASS;

export const sendEmail = (fromEmail, name, message) => {
  let transporter = nodemailer.createTransport({
    service: gmail,
    host: smtpServerURL, //SMTP 서버 주소
    port: 465,
    secure: true,
    auth: {
      user: authUser, //메일서버 계정
      pass: authPass, //메일서버 비번
    },
  });

  let mailOptions = {
    from: fromEmail, //보내는 사람 주소
    to: authUser, //받는 사람 주소
    subject: `JINBLOG CONTACT  : ${fromEmail} / ${name}`, //제목
    text: message, //본문
  };

  const sendMailHandler = (error, info) => {
    if (error) {
      console.log(error);
    }
    //전송 완료
    console.log("Finish sending email : " + info.response);
    transporter.close();
  };

  //메일 전송 !!
  transporter.sendMail(mailOptions, sendMailHandler);
};
