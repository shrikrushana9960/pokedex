const supertest = require("supertest");
const { app, server } = require("../server");
const request = supertest(app);

const { connectDB, disconnectDB } = require("./helpers/basicSetup");

describe("API test", () => {
  beforeAll(async () => {
    await connectDB();
  });

  afterAll(() => {
    disconnectDB();
    server.close();
  });

  describe("POST /api/addFav/", () => {
    it("Should get all states", async () => {
      const favouriteDetails = {
        name: "Test",
        email: "test@gmail.com",
        url: "https://dummy.com/test",
      };
      const res = await request.post("/api/addFav/").send(favouriteDetails);
      console.log("response is : " + JSON.stringify(res));
      expect(res.status).toBe(200);
    });
  });
});
