import { Router } from "express";

const router = Router();

/**
 * GET /api/v1/health
 * 
 * Returns basic service health information including:
 * - status
 * - uptime
 * - timestamp
 * - version
 * 
 */
router.get("/health", (req, res) => {
    res.json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    });
});

export default router;