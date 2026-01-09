import { Router } from "express";
import healthRoutes from "./routes/health.check.routes";

const router = Router();

// Mount health check routes
router.use("/api/v1", healthRoutes);

export default router;