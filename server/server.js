import express from 'express';
import cors from 'cors';
import connect from './database/mongodb.js';
import passport from 'passport';
import passportConfig from './config/passport.js';
import * as dotenv from 'dotenv';
import routes from './routes/index.js';

dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors({
  origin: 'https://mern-expense-tracker-one.vercel.app',
}));
app.use(express.json());
app.use(passport.initialize());
passportConfig(passport);

app.use('/', routes);

connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });
