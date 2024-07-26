import express from "express";
// TODO: import router from users.route

import productsRouter from "./products.routes.js";

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("working");
});

// TODO: use the imported router to handle all routes matching "/users"
// router.use("/users", userRouter);

router.use("/products", productsRouter);

export default router;
