import express, { Request, Response, NextFunction } from "express";
import { router as authRoutes } from "./auth.routes";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { swaggerOptions } from "../../utility/config";
const router = express.Router();

/** */

const specs = swaggerJsdoc(swaggerOptions);

/*** @description - The route end Point for the api-docs */

router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

router.use("/auth", authRoutes);

export { router };
