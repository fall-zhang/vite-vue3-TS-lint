export interface BaseResponse {
  code: string;
  msg: string;
}
export interface ResponseData<T = any> extends BaseResponse {
  data: T
}
export enum ResponseCode {
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
  DOWNLOAD = 'DOWNLOAD'
}