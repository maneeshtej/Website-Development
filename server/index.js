import express from "express";
import cors from "cors";
import { adminRouter } from "./routes/AdminRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", adminRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
