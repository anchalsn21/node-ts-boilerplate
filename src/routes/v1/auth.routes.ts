import express, { Request, Response } from "express";
import { AuthController } from "../../controllers/auth.controller";
const router = express.Router();

router.get("/status", (req: Request, res: Response) => {
  res.send("OK from auth route status");
});

/** @description-  */

/**
 * @swagger
 *
 * /v1/auth/signup:
 *   post:
 *     tags:
 *       - User Auth
 *     summary: User signup
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: email
 *               password:
 *                 type: string
 *                 example: password
 *     responses:
 *       '200':
 *         description: OK
 *       '400':
 *         description: Bad Request
 *       '401':
 *         description: Authorization Failure
 *       '422':
 *         description: Validation Error
 *       '500':
 *         description: Internal Server Error
 */

router.post("/signup", new AuthController().signUp);

/** @description-  */

/**
 * @swagger
 *
 * /v1/auth/login:
 *   post:
 *     tags:
 *       - User Auth
 *     summary: User Login
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: email
 *               password:
 *                 type: string
 *                 example: password
 *     responses:
 *       '200':
 *         description: OK
 *       '400':
 *         description: Bad Request
 *       '401':
 *         description: Authorization Failure
 *       '422':
 *         description: Validation Error
 *       '500':
 *         description: Internal Server Error
 *
 */

router.post("/login", new AuthController().login);

/** @description-  */

/**
 * @swagger
 *
 * /v1/auth/logout:
 *   post:
 *     tags:
 *       - User Auth
 *     summary: User Logout
 *     security:
 *       - bearerAuth: []
 *     responses :
 *        '200':
 *          description: Ok
 *        '400':
 *          description: Bad Reuest
 *        '401':
 *          description: Authorization Failure
 *        '422':
 *          description: Validation Error
 *        '500':
 *          description: Internal Server Error
 *
 */

router.post("/logout", new AuthController().logout);

/** @description-  */

/**
 * @swagger
 *
 * /v1/auth/current-user:
 *   get:
 *     tags:
 *       - User Auth
 *     summary: Get current user details
 *     security:
 *       - bearerAuth: []
 *     responses :
 *        '200':
 *          description: Ok
 *        '400':
 *          description: Bad Reuest
 *        '401':
 *          description: Authorization Failure
 *        '422':
 *          description: Validation Error
 *        '500':
 *          description: Internal Server Error
 *
 */

router.get("/current-user", new AuthController().getCurrentUser);

/** @description-  */

/**
 * @swagger
 *
 * /v1/auth/get-all-users:
 *   get:
 *     tags:
 *       - User Auth
 *     summary: Get all users details
 *     security:
 *       - bearerAuth: []
 *     responses :
 *        '200':
 *          description: Ok
 *        '400':
 *          description: Bad Reuest
 *        '401':
 *          description: Authorization Failure
 *        '422':
 *          description: Validation Error
 *        '500':
 *          description: Internal Server Error
 *
 */

router.get("/get-all-user", new AuthController().getAllUsers);

export { router };
