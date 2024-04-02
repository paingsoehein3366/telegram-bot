const express = require('express');
const { handler } = require('./controller');
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.post('*', async (req, res) => {
      console.log(req.body.message);
      res.send(await handler(req));
});

app.get('/myancare', async (req, res) => {
      res.send("MyanCare!")
})

app.get('*', (req, res) => {
      console.log("get",req.body);
      res.send("get het!");
});

app.listen(PORT, () => {
      console.log(`server running port: ${PORT}`);
});

// `https://api.telegram.org/bots${MY_Token}/${method}`;