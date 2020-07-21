const express = require('express');
const cors = require('cors');
const app = express();

env.config();
app.use(express.json());
app.use(cors());

app.use(express.static(__dirname + '/ui'));

const port = 80;

app.listen(port, () => console.log(`Listening on port ${port} ...`));
