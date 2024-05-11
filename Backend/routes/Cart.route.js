import { Router } from "express";
import isAuthenticatedUser from "../middlewares/auth.js";
import {
  addToCart,
  fetchCartProduct,
  productRemovefromCart,
  upgradeProductCart,
} from "../controllers/Cart.controllers.js";

const router = Router();

router
  .get("/", isAuthenticatedUser, fetchCartProduct)
  .post("/addtocart", isAuthenticatedUser, addToCart)
  .delete("/:id", isAuthenticatedUser, productRemovefromCart)
  .put("/upgradeCart/:id",isAuthenticatedUser,upgradeProductCart)

export default router;
