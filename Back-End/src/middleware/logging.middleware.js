const reqMessage = (req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  res.setHeader("Content-Type","Application/json");
  console.log(`Authorization: ${req.get("Authorization")}`);
  next();
};

module.exports = reqMessage;
