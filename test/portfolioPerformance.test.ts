import { calculatePortfolioPerformance } from "../src/portfolio/portfolioPerformance";

describe("calculatePortfolioPerformance", () => {
    // Test case for excellent gain >= 30%
    test("Excellent gain (>= 30%)", () => {
        const result = calculatePortfolioPerformance(10000, 16000);

        expect(result.profitOrLoss).toBe(6000);
        expect(result.percentageChange).toBe(60);
        expect(result.performanceSummary).toBe(
            "Excellent performance! Your investments are doing great."
        );
    });

    // Test case for solid gain between 10% and under 30%
    test("Solid gain (10% to < 30%)", () => {
        const result = calculatePortfolioPerformance(10000, 11000);

        expect(result.profitOrLoss).toBe(1000);
        expect(result.percentageChange).toBe(10);
        expect(result.performanceSummary).toBe(
            "Solid gain. Keep monitoring your investments"
        );
    });

    // Test case for modest gain between 0% and under 10%
    test("Modest gain (> 0% to < 10%)", () => {
        const result = calculatePortfolioPerformance(10000, 10999.9);

        expect(result.performanceSummary).toBe(
            "Modest gain. Your portfolio is growing slowly."
        );
    });

    // Test case for no change 0%
    test("No change (0%)", () => {
        const result = calculatePortfolioPerformance(10000, 10000);

        expect(result.profitOrLoss).toBe(0);
        expect(result.percentageChange).toBe(0);
        expect(result.performanceSummary).toBe(
            "No change. Your portfolio is holding steady."
        );
    });

    // Test case for minor loss between 0% to -10%
    test("Minor loss (0% to -10%)", () => {
        const result = calculatePortfolioPerformance(10000, 9000);

        expect(result.profitOrLoss).toBe(-1000);
        expect(result.percentageChange).toBe(-10);
        expect(result.performanceSummary).toBe(
            "Minor loss. Stay calm and review your options."
        );
    });

    test("Significant loss (< -10%)", () => {
        const result = calculatePortfolioPerformance(10000, 8999.9);

        expect(result.performanceSummary).toBe(
            "Significant loss. Review your portfolio strategy."
        );
    });
});