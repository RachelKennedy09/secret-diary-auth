// this is where login, logout, and the protected /diary page will live.

import express from "express";
import passport from "passport";

const router = express.Router();

//Middleware to protect routes
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
}
//Home page
router.get("/", (req, res) => {
  res.render("home", { user: req.user });
});

//start Auth0 Login process
router.get(
  "/login",
  passport.authenticate("auth0", {
    scope: "openid email profile",
  })
);

//Callback from Auth0 redirects
router.get(
  "/callback",
  passport.authenticate("auth0", {
    failureRedirect: "/",
  }),
  (req, res) => {
    res.redirect("/diary");
  }
);

//Logout Route and ends the session

router.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/");
  });
});

//Protected diary page, only logged in users can see this page
router.get("/diary", isLoggedIn, (req, res) => {
  const userData = {
    name: req.user.displayName,
    email: req.user.emails?.[0]?.value,
    entires: [
      `Welcome back, ${req.user.displayName}. This is your secret diary page!`,
    ],
  };
  res.render("diary", { userData });
});

export default router;
