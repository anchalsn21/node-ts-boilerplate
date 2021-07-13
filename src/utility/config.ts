import dotenv from "dotenv";

dotenv.config();

const db_creds = {
  dbUrl: process.env.DB_STRING || "",
};

const app_creds = {
  port: Number(process.env.PORT) || 7001,
};

const swaggerDefination = {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "Node Type Script Boiler Plate",
    description: "List of All Api's",
  },
  servers: [{ url: "http://localhost:3500", description: "Local server" }],
  consumes: ["application/json", "multipart/form-data"],
  produces: ["application/json"],
};

const swaggerOptions = {
  swaggerDefinition: swaggerDefination,
  apis: ["./src/routes/v1/*.routes.ts", "./src/models/*.model.ts"],
};

export { db_creds, app_creds, swaggerDefination, swaggerOptions };
