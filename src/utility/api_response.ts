import httpStatus from "http-status";

class ApiResponse {
  constructor(
    public statusCode: any,
    public status: any,
    public message: any,
    public error: any
  ) {
    this.statusCode = statusCode;
    this.status = status;
    this.message = message;
  }

  send(res: any) {
    return this.prepare(res, this);
  }

  prepare(res: any, current: any) {
    return {};
  }
}

class SuccessResponse extends ApiResponse {
  constructor(message: string, data: Object | undefined | null) {
    super(httpStatus.OK, httpStatus[200], message, data);
  }
  sendResponse(res: any) {
    return this.prepareResponse(res, this);
  }
  prepareResponse(res: any, current: any) {
    return {};
  }
}

export { ApiResponse, SuccessResponse };
