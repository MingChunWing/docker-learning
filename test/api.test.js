const request = require("supertest");
const app = require("../index");

// 測試群組：GET /
describe("GET /", () => {
  test("應該回傳 200 狀態碼", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
  });

  test("應該回傳 JSON 格式", async () => {
    const res = await request(app).get("/");
    expect(res.headers["content-type"]).toMatch(/json/);
  });

  test("應該包含 message 欄位", async () => {
    const res = await request(app).get("/");
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toBe("Hello World from REST API");
  });

  test("應該包含 service 欄位", async () => {
    const res = await request(app).get("/");
    expect(res.body).toHaveProperty("service");
    expect(res.body.service).toBe("docker-learning-api");
  });
});

// 測試群組：GET /health
describe("GET /health", () => {
  test("應該回傳 200 狀態碼", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
  });

  test("應該回傳 status: ok", async () => {
    const res = await request(app).get("/health");
    expect(res.body).toHaveProperty("status");
    expect(res.body.status).toBe("ok");
  });
});

// 測試群組：不存在的路由
describe("不存在的路由", () => {
  test("GET /unknown 應該回傳 404", async () => {
    const res = await request(app).get("/unknown");
    expect(res.status).toBe(404);
  });
});