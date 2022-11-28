function isDecimal(input) {
  let regex = /^[-+]?[0-9]+\.[0-9]+$/;
  return regex.test(input);
}

function isString(string) {
  return typeof string === "string";
}

module.exports = {
  isDecimal,

  isString,
};
