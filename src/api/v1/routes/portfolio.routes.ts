import { Router } from "express";
import { calculatePortfolioPerformance } from "../../../portfolio/portfolioPerformance";

const router = Router();

router.get("/portfolio/performance", (req, res) => {
    const initialInvestment = parseFloat(req.query.initialInvestment as string);
    const currentValue = parseFloat(req.query.currentValue as string);

    if(isNaN(initialInvestment) || isNaN(currentValue)) {
        return res.status(400).json({ error: "Invalid query parameters" });
    }

    const result = calculatePortfolioPerformance(initialInvestment, currentValue);

    res.json(result);
});

export default router;