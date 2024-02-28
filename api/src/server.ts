// server.ts
import express from 'express';
import routes from './routes';
import dotenv from 'dotenv';
import {handle_http_errors} from './errors';

dotenv.config({ path: 'config.env' });

const app = express();
const PORT = process.env.API_MACHINE_PORT;

// api endpoint route configuration
app.use('/api', routes);

// api http error handling route
app.use(handle_http_errors);

app.listen(PORT, () => {
  console.log('\nserver has started on port ', PORT);
});
