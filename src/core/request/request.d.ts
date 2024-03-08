export interface Result {
  code: string;
  msg: string;
}
export interface ResultData<T = any> extends Result {
  data: T
}
export enum ResultCode {
  SUCCESS = 200,
  ERROR = 500,
  OVERDUE = 401,
  NotFound = 404,
}
export enum RequestMethod {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  PUT = 'PUT',
  DELETE = 'DELETE',
  DOWNLOAD = 'DELETE'
}