import express from 'express';
import { validateCard } from './controllers/cardController';
import globalErrorHandler from './controllers/errorController';

const app = express();

app.use(express.json());
app.post('/api/v1/validate-card', validateCard);

// global error handling middleware
app.use(globalErrorHandler);
export default app;
