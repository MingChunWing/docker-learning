# Node.js RESTful Hello World with Docker

This project is a simple RESTful API built with Node.js and Express.

## Endpoints

- `GET /` -> Hello World response
- `GET /health` -> Health check

## Run locally

1. Install dependencies:
   - `npm install`
2. Start the server:
   - `npm start`
3. Test:
   - `http://localhost:3000/`
   - `http://localhost:3000/health`

## Run with Docker

1. Build image:
   - `docker build -t hello-api:1.0 .`
2. Run container:
   - `docker run --rm -p 3000:3000 hello-api:1.0`
3. Test:
   - `http://localhost:3000/`
   - `http://localhost:3000/health`

## Optional GitHub Actions CI

A basic workflow is included in `.github/workflows/ci.yml`.
It runs npm install, npm test, and docker build on push/pull request.
