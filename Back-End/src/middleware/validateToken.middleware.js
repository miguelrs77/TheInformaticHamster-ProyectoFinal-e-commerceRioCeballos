const jwt = require('jsonwebtoken');
require('dotenv').config()

const validateToken = (req, res, next) => {
  const headerToken = req.headers['authorization']

  if (headerToken != undefined && headerToken.startsWith('Bearer ')) {
    // tiene Token
    try {
      const bearerToken = headerToken.slice(7);
      jwt.verify(bearerToken, process.env.SECRET_KEY || 'secret');
      next();
    } catch (err) { 
      res.status(401).json({    
        msg: 'Invalid token'
      })
    }
  } else {
    res.status(401).json({
      msg: 'Access denied'
    })
  };
};

module.exports = validateToken;
