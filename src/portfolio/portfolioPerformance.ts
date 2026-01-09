import { PortfolioPerformance } from "./portfolioPerformance.types";

/**
 * Calculates the performance of a portfolio based on the initial investment and the current value
 * 
 * @param initialInvestment - The original amount invested
 * @param currentValue - The current value of the investment
 * @returns - An object containing profit/loss, percentage change, and performance summary
 */
export function calculatePortfolioPerformance(initialInvestment: number, currentValue: number): PortfolioPerformance {
    const profitOrLoss = currentValue - initialInvestment;
    const percentageChange = (profitOrLoss / initialInvestment) * 100;

    const performanceSummary =
        percentageChange >= 30
        ? "Excellent performance! Your investments are doing great."
        : percentageChange >= 10
        ? "Solid gain. Keep monitoring your investments"
        : percentageChange > 0
        ? "Modest gain. Your portfolio is growing slowly."
        : percentageChange === 0
        ? "No change. Your portfolio is holding steady."
        : percentageChange >= -10
        ? "Minor loss. Stay calm and review your options."
        : "Significant loss. Review your portfolio strategy.";

    return {
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary,
    };
}