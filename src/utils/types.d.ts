import HttpStatus from "http-status-codes"

export enum HttpStatusCode {
  OK = HttpStatus.OK,
  CREATED = HttpStatus.CREATED,
  BAD_REQUEST = HttpStatus.BAD_REQUEST,
  UNAUTHORIZED = HttpStatus.UNAUTHORIZED,
  FORBIDDEN = HttpStatus.FORBIDDEN,
  NOT_FOUND = HttpStatus.NOT_FOUND,
  INTERNAL_SERVER_ERROR = HttpStatus.INTERNAL_SERVER_ERROR,
  CONFLICT = HttpStatus.CONFLICT
}