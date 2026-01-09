import request from "supertest";
import app from "../src/app";

describe("GET /api/v1/portfolio/performance", () => {
    it("should return correct performance data for valid inputs", async () => {
        // Arrange
        const initialInvestment = 10000;
        const currentValue = 13000;

        // Act
        const response = await request(app)
            .get("/api/v1/portfolio/performance")
            .query({ initialInvestment, currentValue });

        // Assert
        expect(response.status).toBe(200);
        expect(response.body.initialInvestment).toBe(initialInvestment);
        expect(response.body.currentValue).toBe(currentValue);
        expect(response.body.profitOrLoss).toBe(3000);
        expect(response.body.percentageChange).toBe(30);
        expect(response.body.performanceSummary).toBe(
            "Excellent performance! Your investments are doing great."
        );
    });

    it("should return 400 for missing or invalid query parameters", async () => {
        // Arrange & Act
        const response = await request(app)
            .get("/api/v1/portfolio/performance")
            .query({ initialInvestment: "abc", currentValue: 10000 });

        // Assert
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty("error");
    });
});