import express, { Express } from "express";
import v1Router from "./api/v1";

// Initialize Express application
const app: Express = express();

// Use version 1 API routes
app.use(v1Router);

// Define a route
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

export default app;