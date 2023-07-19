const { verify } = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const token = req.header("accessToken");

  if (!token) return res.json({ error: "User is not valid" });

  try {
    const validToken = verify(token, "importantsecret");
    req.user = validToken;
    if (validToken) {
      return next();
    }
  } catch (error) {
    return res.json({ error: error });
  }
};

module.exports = { validateToken };
