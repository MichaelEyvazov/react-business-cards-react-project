const { handleError } = require("../utils/handleErrors");
const { verifyToken } = require("./Providers/jwt");
const config = require("config");

const tokenGenerator = config.get("מ");

const auth = (req, res, next) => {
  if (tokenGenerator === "jwt") {
    try {
      const clientToken = req.header("x-auth-token");
      if (!clientToken)
        throw new Error("Please Login");

      const userInfo = verifyToken(clientToken);
      if (!userInfo) throw new Error("Unauthorize user");

      req.user = userInfo;
      return next();
    } catch (error) {
      return handleError(res, 401, error.message);
    }
  }
  return handleError(res, 500, "You did not use jwt!");
};

module.exports = auth;
