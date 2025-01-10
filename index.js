const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/', async (req, res) => {
  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', 
      req.body,
      {
        headers: {
          'Authorization': req.headers.authorization,
          'Content-Type': 'application/json'
        }
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json(error.response.data);
  }
});

app.listen(process.env.PORT || 3000);
