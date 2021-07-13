import { ValidationError } from "express-validator";

abstract class CustomError extends Error {
  abstract statusCode: number;

  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeErrors(): { message: string; field?: string }[];
}

class BadRequestError extends CustomError {
  statusCode = 400;
  constructor(message = "Bad Request") {
    super(message);
    this.message = message;
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}

class NotFoundError extends CustomError {
  statusCode = 404;
  constructor() {
    super("Not Found");
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
  serializeErrors() {
    return [{ message: "Not Found" }];
  }
}

class RequestValidationError extends CustomError {
  statusCode = 400;
  constructor(public errors: ValidationError) {
    super("Request Parameters invalid");
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
  serializeErrors() {
    return this.errors.map((err: { msg: string; param: string }) => {
      return { message: err.msg, field: err.param };
    });
  }
}

export { CustomError, RequestValidationError, BadRequestError, NotFoundError };
