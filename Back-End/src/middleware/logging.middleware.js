const mdwLogging = (req, res, next) => {
  console.log(`Se hizo peticion al URL: ${req.url}`);
  res.setHeader("Content-Type","Application/json");
  console.log(`Authorization: ${req.get("Authorization")}`);
  next();
};

module.exports = mdwLogging;
