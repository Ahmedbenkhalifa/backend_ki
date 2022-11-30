require("dotenv").config({ path: "./.env" });

const express = require("express");
const connectDB = require("./config/connectDB");
const authRouter = require("./routes/auth.routes");
const clientRouter = require("./routes/client.routes");
const publicationRouter = require("./routes/publication.routes");
const imagesRouter = require("./routes/images.routes");
const { verifyTransporter } = require("./utils/email");

const app = express();
const cors = require("cors");
app.use(cors());
app.use("/staticFiles", express.static(__dirname + "/assets"));

app.use(express.json());
app.use("/api/auth/", authRouter);
app.use("/api/client/", clientRouter);
app.use("/api/publication/", publicationRouter);
app.use("/api/images/", imagesRouter);
connectDB();
verifyTransporter();
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("the server is running on port 8080"));
