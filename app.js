const express = require("express");
const app = express();

const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

require("dotenv").config();

app.get("/", async (req, res) => {
  res.send("Hello World");
});

app.post("/api/upload", upload.single("file"), async (req, res) => {
  res.send(req.file);
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
