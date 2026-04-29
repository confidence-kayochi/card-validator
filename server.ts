import dotenv from 'dotenv';

process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION... Shutting down');

  if (err instanceof Error) {
    console.log(err.name, err.message);
  } else {
    console.log('Unknown error:', err);
  }
  process.exit(1);
});

dotenv.config({ path: './config.env' });
import app from './src/app';

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

process.on('unhandledRejection', (err) => {
  console.error('UNHANDLED REJECTION... Shutting down');

  if (err instanceof Error) {
    console.error(`${err.name}: ${err.message}`);
  } else {
    console.log('Unknwn rejection:', err);
  }

  server.close(() => {
    process.exit(1);
  });
});
