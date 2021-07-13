import { Request, Response, NextFunction } from "express";
import { CustomError } from "../utility/api_error";

export default (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    // Send the error resposne
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  return res.status(400).send({
    errors: [{ message: "Something went wrong" }],
  });
};
