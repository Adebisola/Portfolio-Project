// STORING CLASS TARGETS IN VARIABLES
const form = document.querySelector("#register");
const userName = document.querySelector("#User-id");
const eMail = document.querySelector("#Email-id");
const passWord = document.querySelector("#Password");
const passWord2 = document.querySelector("#Password2");
const input_group = document.querySelectorAll(".input-group");

const emailIdentity = localStorage.getItem("Email-id");
const passWordIdentity = localStorage.getItem("Password");
const userNameIdentity = localStorage.getItem("User-id");

const LoginEMail = document.getElementById("email");
const LoginPassword = document.getElementById("password");
const LoginBtn = document.querySelector("button");

export {
  form,
  userName,
  eMail,
  passWord,
  passWord2,
  input_group,
  emailIdentity,
  passWordIdentity,
  userNameIdentity,
  LoginBtn,
  LoginEMail,
  LoginPassword,
};