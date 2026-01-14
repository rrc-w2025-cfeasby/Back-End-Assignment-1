### Portfolio Performance API

- A TypeScript-based Express API Project that calculates investment portfolio performance
- This provides a health check endpoint as well as a performance endpoint
- With the project comes automation including tests, GitHub Actions CI, and a API structure that follows best practices

## Features

- Versioned API structures (/api/v1)
- Portfolio performance calculation
- Health check endpoint
- Fully typed with TypeScript
- Automated Jest + Supertest test suite
- GitHub Actions workflow for CI
- Clean, modular Express architecture

## Project Structure

src/
 api/
   v1/
    routes/
     health.routes.ts
     portfolio.routes.ts
    index.ts
 portfolio/
  portfolioPerformance.ts
  portfolioPerformance.types.ts
 app.ts
 server.ts

test/
 portfolioPerformance.test.ts
 portfolioApi.test.ts
 health.test.ts

.github/
 workflows/
  ci.yml

package.json
tsconfig.json
README.md

## Running the Application

- npm start

## API will run at

- http://localhost:3000

## Running Tests

- npm test

# Tests Include

- 6 tests for the portfolio calculation function
- 1-2 tests for each API endpoint
- Supertest integration tests


## API Endpoints

- GET /api/v1/health
- GET /api/v1/performance?initialInvestment=10000%currentValue=13000

## Continuous Integration (GitHub Actions)

# Project includes a GitHub Actions workflow that:

- Installs dependencies
- Runs TypeScript checks
- Executes Jest tests
- Ensures code quality before merging

# Workflow runs automatically on

- Push
- Pull request

## Technologies Used

- Node.js
- Express
- TypeScript
- Jest
- Supertest
- GitHub Actions
- ts-node

## Portfolio Performance Logic

# API Calculates

- Profit or loss
- Percentage change

# Performance summary category:

- Excellent gain
- Solid gain
- Modest gain
- No change
- Minor loss
- Significant loss