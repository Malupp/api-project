import test from "node:test"
import supertest from "supertest"

import app from "../src/app"

const request = supertest(app)

test("GET /planets", async () => {
    const res = await request
        .get("/planets")
        .expect(200)
        .expect("Content-Type", /application\/json/);

    expect(res.body).toEqual([
        {name: "Mercury"},
        {name: "Venus"}
    ]);
});
