import request from "supertest";
import { expect } from "chai";
import createServer from "src/server";
const app = createServer();

describe("server check", () => {
  it("server is created without error", (done) => {
    request(app).get("/").expect(200, done);
  });
});
