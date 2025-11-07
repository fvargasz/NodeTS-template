import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

const startServer = async () => {
    try {
        // Then start server
        app.listen(port, () => {
            console.log(`🚀 Server running on http://localhost:${port}`);
            console.log(`📚 API endpoint: http://localhost:${port}/api`);
        });
    } catch (error) {
        console.log('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();