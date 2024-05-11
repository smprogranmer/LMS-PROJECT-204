import { Router } from "express";
import {
  getAllUsers,
  registerUsers,
  loginUsers,
  logOutUsers,
  chengePassword, 
  upgradeProfile,
  getSingleUser,
  deleteUsers,
  // verifyUser,
  // sendEmailOtp,
} from "../controllers/Users.controllers.js"
import isAuthenticatedUser from "../middlewares/auth.js"
// import passport from "passport";
// import { sendVerificationCodeLimiter } from "../middlewares/perMinit.js";

const router = Router();

// router.get("/auth/google",passport.authenticate("google",{ scope:["profile","email"]}))
// router.get('/auth/google/callback', 
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   });
router.get("/admin", getAllUsers);
router.get("/me", isAuthenticatedUser, getSingleUser);
router.post("/users/register", registerUsers);
// router.post("/users/sendotp", sendEmailOtp);
// router.post("/users/verify", verifyUser);
router.post("/users/login", loginUsers);
router.post("/users/logOut", logOutUsers);
router.delete("/admin/:id", isAuthenticatedUser, deleteUsers);
router.put("/me/chengePassword", isAuthenticatedUser, chengePassword);
router.put("/me/upgradeProfile", isAuthenticatedUser, upgradeProfile);

export default router;
