const server = require('./server');
const DB_PORT = process.env.DB_PORT || 3308;
const { initializeDB } = require('./config');

const startServer = () => {
  server.listen(DB_PORT, async () => {
    await initializeDB();
    console.log(
      `Server Runing on port: ${DB_PORT}`
    );
  });
};

startServer();
