require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const app = express();

app.get("/news", cors(), async (req, res) => {
  try {
    const articles = await axios.get(
      `https://newsapi.org/v2/everything?q=crypto&language=en&sortBy=publishedAt&apiKey=${process.env.API_KEY_VALUE}`
    );

    res.send({ articles: articles.data.articles });
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => {
  console.log("server started ");
});
