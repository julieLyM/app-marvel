const express = require('express');
const middlewares = require('./middlewares');
const routes = require('./routes');

const app = express();

middlewares(app);
routes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listen port marvel ${PORT}`));
