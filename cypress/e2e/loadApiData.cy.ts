const superagent = require("superagent");
// const mockServer = require("mockttp").getLocal();
const mockServer = require("mockttp").getLocal({ cors: true, debug: true });

describe("Mockttp", () => {
  // Start your mock server
  beforeEach(async () => {
    await mockServer.start(3030);
  });
  afterEach(async () => {
    mockServer.stop();
  });

  it("lets you mock requests, and assert on the results", async () => {
    // Mock your endpoints
    await mockServer.forGet("/mocked-path").thenReply(200, "A mocked response");

    // Make a request
    const response = await superagent.get("http://localhost:3030/mocked-path");

    // Assert on the results
    expect(response.text).to.equal("A mocked response");
  });
});
