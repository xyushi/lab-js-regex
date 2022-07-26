/* Fill your code*/

function formValidate() {
  let name = document.forms["RegForm"]["Name"];
  let address = document.forms["RegForm"]["Address"];
  let email = document.forms["RegForm"]["EMail"];
  let pass = document.forms["RegForm"]["Password"];
  let cpass = document.forms["RegForm"]["cPassword"];
  let phno = document.forms["RegForm"]["phone"];

  let faultname = _("name");
  let faultaddress = _("address");
  let faultemail = _("email");
  let faultpass = _("pwd");
  let faultcpass = _("cpwd");
  let faultph = _("phone");

  let flag;

  if (name.value == "") {
    faultname.textContent = "Please fill Name field";
    flag = false;
  } else if (!name.value.match(/^[\w ]{8,15}$/)) {
    faultname.textContent = "Atleast 8 to 15 Characters Required!";
    flag = false;
  } else {
    faultname.textContent = "";
    flag = true;
  }

  if (address.value == "") {
    faultaddress.textContent = "Please fill the address field";
    flag = false;
  } else {
    faultaddress.textContent = "";
    flag = true;
  }

  if (email.value == "") {
    faultemail.textContent = "Please fill email field";
    flag = false;
  } else if (email.value.match(/[@._]/)) {
    faultemail.textContent = "";
    flag = true;
  } else {
    faultemail.textContent = "Email is Invalid";
    flag = false;
  }

  if (pass.value == "") {
    faultpass.textContent = "Please fill Password field";
    flag = false;
  } else if (
    pass.value.match(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/
    )
  ) {
    faultpass.textContent = "";
    flag = true;
  } else {
    faultpass.textContent =
      "Password must be atleast 8 characters long,should contain 1 uppercase, 1 lowercase,1 number and symbol.";
    flag = false;
  }

  if (cpass.value == "") {
    faultcpass.textContent = "Please fill Confirm Password field";
    flag = false;
  } else if (
    !cpass.value.match(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/
    )
  ) {
    faultcpass.textContent =
      "Password must be atleast 8 characters long,should contain 1 uppercase, 1 lowercase,1 number and symbol.";
    flag = false;
  } else if (pass.value != cpass.value) {
    faultcpass.textContent = "Passwords don't match";
    flag = false;
  } else {
    faultcpass.textContent = "";
    flag = true;
  }

  if (phno.value == "") {
    faultph.textContent = "Please fill phone field";
    flag = false;
  } else if (!phno.value.match(/^[6-9][0-9]{9}$/)) {
    faultph.textContent = "Invalid phone number";
    flag = false;
  } else {
    faultph.textContent = "";
    flag = true;
  }

  if (flag) {
    let res = document.getElementById("output");
    res.innerText = "Regex Validation Success";
    res.style.color = "green";
    document.getElementsByTagName("p")[6].appendChild(res);
  }
}

function _(id) {
  return document.getElementById(id);
}

function addChanges() {
  document.getElementsByTagName("form")[0].removeAttribute("onsubmit");
  document.getElementsByTagName("form")[0].removeAttribute("action");
  document.getElementsByName("Submit")[0].type = "button";
  document
    .getElementsByName("Submit")[0]
    .setAttribute("onclick", "formValidate()");
}

window.onload = () => {
  addChanges();
};