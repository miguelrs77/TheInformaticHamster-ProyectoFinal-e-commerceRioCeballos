require("dotenv").config();
const passport = require("passport");
const passportJwt = require("passport-jwt");
const JWTStrategy = passportJwt.Strategy;
const ExtractJWT = passportJwt.ExtractJwt;
const secret = process.env.SECRET_KEY;

// Config de estrategia de autenticacion con JWT-passport,
// verificamos y decodificamos el token JWT en el header y
// luego se lo asigna a la variable user, ya decodificado el token (jwtPayload).
passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(), //extraer el Bearer token del header
      secretOrKey: secret, // firma
    }, (jwtPayload, done) => {
      const user = jwtPayload;
      return done(null, user);
    }
  )
);

module.exports = secret;
