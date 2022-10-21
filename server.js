require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const connectDB = require("./config/connectDB");
const authRouter = require("./routes/auth.routes");
const clientRouter = require("./routes/client.routes");
const publicationRouter = require("./routes/publication.routes");
const { verifyTransporter } = require("./utils/email");

const app = express();
app.use(express.json());
app.use("/api/auth/", authRouter);
app.use("/api/client/", clientRouter);
app.use("/api/publication/", publicationRouter);
connectDB();
verifyTransporter();
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("the server is running on port 8080"));
