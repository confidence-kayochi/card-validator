import express from 'express';
import { validateCard } from './controllers/cardController';

const app = express();

app.use(express.json());
app.post('/api/v1/validate-card', validateCard);

export default app;
