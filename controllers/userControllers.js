const userService = require("../service/user");
const { isDecimal } = require("../utils/validator");
const { successResponse, badRequestResponse } = require("../utils/responseBuilder");

const { IsEmail, IsPassword } = require("../utils/validator");
const HTTPCodes = {
  OK: 200,
  CREATED: 201,
  UPDATED: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
};
const crypto = require("crypto");

const jwt = require("jsonwebtoken");

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    const errorMessages = [];

    if (!email) {
      errorMessages.push("Parameter 'email' is required");
    } else if (!IsEmail(email)) {
      errorMessages.push("Parameter 'email' invalid");
    }

    if (!password) {
      errorMessages.push("Parameter 'password' is required");
    } else if (!IsPassword(password)) {
      errorMessages.push("Parameter 'password' invalid");
    }

    // action
    let dbUser = await getUserByEmail(email);
    if (dbUser) {
      dbUser = dbUser[0];
      const userEncryptedDetails = encryptPassword(password, dbUser.salt);
      if (userEncryptedDetails.encryptedPassword === dbUser.password) {
        const accessToken = jwt.sign(
          {
            email: dbUser.email,
            name: dbUser.name,
          },
          process.env.ACCESS_TOKEN_SECRET,
          {
          
            expiresIn: "1h",
          }
        );

        // TODO: do we need email?
        const refreshToken = jwt.sign(
          {
            email: dbUser.email,
          },
          process.env.REFRESH_TOKEN_SECRET,
          {
            expiresIn: "30d",
          }
        );

        res.send({
          accessToken,
          refreshToken,
        });
      } else {
        res.status(HTTPCodes.UNAUTHORIZED).send({});
      }
    } else {
      res.status(404).send("Email does not exist");
    }
    console.log(dbUser);
  } catch (e) {}
}

async function registerUser(req, res) {
  const { email, password, name } = req.body;
  const errorMessages = [];
  if (!email) {
    errorMessages.push("Parameter 'email' is required");
  } else if (!IsEmail(email)) {
    errorMessages.push("Invalid 'email' format");
  }

  if (!password) {
    errorMessages.push("Parameter 'password' is required");
  }
  if (!IsPassword(password)) {
    errorMessages.push("Invalid 'password' format");
  }

  if (!name) {
    errorMessages.push("Parameter 'name' is required");
  }
  if (typeof name !== "string") {
    errorMessages.push("Invalid 'name' type");
  }

  if (errorMessages.length) {
    res.status(HTTPCodes.BAD_REQUEST).send(badRequestResponse(errorMessages));
  } else {
    const { salt, encryptedPassword } = encryptPassword(password);

    const user2 = {
      ...req.body,
      salt,
      encryptedPassword,
    };

    const userId = userService.register(user2);
    res.send(successResponse(userId));
  }
}

function encryptPassword(
  password,
  salt = crypto.randomBytes(128).toString("base64")
) {
  const encryptedPassword = crypto
    .pbkdf2Sync(
      password,
      salt,
      parseInt(process.env.HASH_ITERATIONS),
      parseInt(process.env.KEY_LENGTH),
      "sha256"
    )
    .toString("base64");

  return {
    salt,
    encryptedPassword,
  };
}
async function getU(_, res) {
  const students = await userService.getUser();
  res.send(students);
}

async function update(req, res) {
  //parametros7tr
  try {
    const { id } = req.query;
    const { user, addresses } = req.body;
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
  loginUser,
  registerUser,
  update,
  getU,
};
