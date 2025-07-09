import { Strategy as Auth0Strategy } from "passport-auth0";
import dotenv from "dotenv";

dotenv.config();

export default function setupAuth(passport) {
  // passport.use defines the strategy for how users log in
  passport.use(
    new Auth0Strategy(
      {
        domain: process.env.AUTH0_DOMAIN,
        clientID: process.env.AUTH0_CLIENT_ID,
        clientSecret: process.env.AUTH0_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/callback",
      },
      function (accessToken, refreshToken, extraParams, profile, done) {
        //The 'profile' contains the user information
        return done(null, profile);
      }
    )
  );

  //Serialize user info into session //Stores user data in the session
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  //Deserialize user info from session //Retrieves user data from the session on future requests
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
}
