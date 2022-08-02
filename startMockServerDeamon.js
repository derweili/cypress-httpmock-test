const adminServer = require("mockttp").getAdminServer();

adminServer.start().then(() => {
  console.log("Mock server started");
});
