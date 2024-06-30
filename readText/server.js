const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fs = require("fs").promises;

const app = express();
const HOST = 5000;

const allowedOrigins = ["http://127.0.0.1:5500"];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);
app.use(cookieParser());
const getText = async () => {
  try {
    const data = await fs.readFile("./files/file.txt");
    return data.toString();
  } catch (error) {
    console.error("Error reading file:", error);
    return "";
  }
};

app.get("/setCookie", async (req, res) => {
  try {
    let text = await getText();
    res.cookie("text", text, { httpOnly: true });
    res.send("Cookie set succesfully");
  } catch (error) {
    res.status(500).send("Error occured while setting cookie");
  }
});

app.listen(HOST, () => {
  console.log(`${HOST} works`);
});
