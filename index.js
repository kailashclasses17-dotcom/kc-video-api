const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('KC Video API is Running!');
});

app.post('/render', (req, res) => {
  console.log("Render request received");
  res.json({
    success: true,
    message: "Video creation started",
    url: "https://www.w3schools.com/html/mov_bbb.mp4"
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
