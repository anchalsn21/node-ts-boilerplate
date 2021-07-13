import { app } from "./app";
import { app_creds } from "./src/utility/config";
let port: number = app_creds.port;
app.listen(port, () => {
  console.log("Running on port " + port);
});
