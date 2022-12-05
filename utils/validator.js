function isDecimal(input) {
  let regex = /^[-+]?[0-9]+\.[0-9]+$/;
  return regex.test(input);
}

function IsEmail(email) {
  const RE =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return RE.test(email);
}

function isString(string) {
  return typeof string === "string";
}

function IsPassword(string) {
  const regex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
  return regex.test(string);
}

module.exports = {
  isDecimal,
  IsEmail,
  isString,
  IsPassword,
};
