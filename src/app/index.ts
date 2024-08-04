import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { routes } from '../routers';

const app = express();
const PORT = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(
  cors({
    origin: '*',
    methods: '*',
    allowedHeaders: '*',
    credentials: true,
  }),
);

app.listen();

routes(app);

app.listen(PORT, () => `Listen the server in port ${PORT}`);
