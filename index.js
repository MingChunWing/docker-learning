const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello World from REST API",
    service: "docker-learning-api"
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok"
  });
});

// ⭐ 關鍵改動：只有直接執行時才 listen
// 被 require() 引入時（測試時）不會 listen
if (require.main === module) {
  app.listen(port, () => {
    console.log(`API is running on port ${port}`);
  });
}

// ⭐ 匯出 app，讓測試可以使用
module.exports = app;