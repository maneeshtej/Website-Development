import express from "express";

const router = express.Router();

router.post("/adminlogin", (req, res) => {
  console.log(req.body);
  // Respond to the client to complete the request
  res.status(200).json({ message: "Login request received" });
});

export { router as adminRouter };
