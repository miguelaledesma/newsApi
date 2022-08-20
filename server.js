const express = require("express");
const axios = require("axios");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const app = express();
const path = require("path");

// app.use(express.static("build"));

app.get("/news", cors(), async (req, res) => {
  try {
    const articles = await axios.get(
      `https://newsapi.org/v2/everything?q=crypto&sortBy=popularity&apiKey=644b946eec0b49f4ba12589738e0877f`
    );

    res.send({ articles: articles.data.articles });
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => {
  console.log("server started ");
});
