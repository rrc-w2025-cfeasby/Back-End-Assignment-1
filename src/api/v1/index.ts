import { Router } from "express";
import healthRoutes from "./routes/health.check.routes";
import portfolioRoutes from "./routes/portfolio.routes";

const router = Router();

// Mount health check routes
router.use("/api/v1", healthRoutes);

// Mount portfolio performance routes
router.use("/api/v1", portfolioRoutes);

export default router;