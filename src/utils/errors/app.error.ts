import { HttpStatusCode } from "../types";

export interface GlobalError extends Error {
  statusCode: number;
}

export class InternalServerError implements GlobalError {
  message: string;
  statusCode: number;
  name: string;

  constructor(message: string) {
    this.message = message;
    this.statusCode = HttpStatusCode?.INTERNAL_SERVER_ERROR;
    this.name = "InternalServerError";
  }
}

export class BadRequestError implements GlobalError {
  message: string;
  statusCode: number;
  name: string;

  constructor(message: string) {
    this.message = message;
    this.statusCode = HttpStatusCode?.BAD_REQUEST;
    this.name = "BadRequestError";
  }
}

export class NotFoundError implements GlobalError {
  message: string;
  statusCode: number;
  name: string;

  constructor(message: string) {
    this.message = message;
    this.statusCode = HttpStatusCode?.NOT_FOUND;
    this.name = "NotFoundError";
  }
}

export class UnauthorizedError implements GlobalError {
  message: string;
  statusCode: number;
  name: string;

  constructor(message: string) {
    this.message = message;
    this.statusCode = HttpStatusCode?.UNAUTHORIZED;
    this.name = "UnauthorizedError";
  }
}

export class ForbiddenError implements GlobalError {
  message: string;
  statusCode: number;
  name: string;

  constructor(message: string) {
    this.message = message;
    this.statusCode = HttpStatusCode?.FORBIDDEN;
    this.name = "ForbiddenError";
  }
}

export class ConflictError implements GlobalError {
  message: string;
  statusCode: number;
  name: string;

  constructor(message: string) {
    this.message = message;
    this.statusCode = HttpStatusCode?.CONFLICT;
    this.name = "ConflictError";
  }
}