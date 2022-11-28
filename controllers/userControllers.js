const userService = require("../services/user");
const { isDecimal } = require("../utils/validator");

async function getU(_, res) {
  const students = await userService.getUser();
  res.send(students);
}

async function update(req, res) {
  //parametros7tr
  try {
    const { id } = req.params;
    const user = req.body;
    const error_Message = [];
    if (!id) {
      error_Message.push("Parameter 'id' is required");
    }
    if (isDecimal(id)) {
      error_Message.push("'id' needs to be an integer");
    }
    if (error_Message.length) {
      res.status(400).send(errorMessages);
    } else {
      await userService.updateUser(id, user);
      res.send();
    }
  } catch (expection) {
    res.status(500).send("internal server error");
  }
}

module.exports = {
  update,
  getU,
};
