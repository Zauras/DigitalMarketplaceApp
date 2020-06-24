import urlConfig from "./urlConfig";

// @ts-ignore
export const rootApiRoute = `${urlConfig[window.location.host]}`; //document.getElementsByTagName('base')[0].getAttribute('href') as string;

const commonHeaders = {
  Authorization: '',//`Bearer ${window.sessionStorage.getItem("outer-aut")}`,
  "Content-Type": "application/json",
}

export interface RequestDto {
  requestUrl: string,
  body?: object
}

enum HttpRequestMethod {
  GET="GET",
  POST="POST",
  PUT="PUT",
  PATCH="PATCH",
  DELETE="DELETE",
}

interface IRequestData {
  headers: { Authorization: string; "Content-Type": string },
  method: HttpRequestMethod,
}


// @ts-ignore
class RequestData implements IRequestData {
  private method: HttpRequestMethod;
  private headers: { Authorization: string; "Content-Type": string };
  
  constructor(
    method: HttpRequestMethod,
    headers = commonHeaders,
    body: object | undefined = undefined
  ) {
    this.method = method;
    this.headers = headers;
    // @ts-ignore
    if (body) { this['body'] = JSON.stringify(body); }
  }
}

class Request {
  private url: string;
  
  constructor(
    method: HttpRequestMethod,
    requestDto: RequestDto,
    headers = commonHeaders,
  ) {
    const { requestUrl, body } = requestDto;
    this.url = `${rootApiRoute}${requestUrl}`
    //this.url = `${requestUrl}`
    // @ts-ignore
    this["requestData"] =  new RequestData(method, headers, body) 
  }
}


// Out of class to make it private
const sendHttpRequest = async (request: Request) => {
  try {
    // @ts-ignore
    const { url, requestData } = request;
    const response = await fetch(url, requestData);
    return response.json();
    
  } catch (error) { return error }
}


class HttpRequestService {
  
  get = (requestDto: RequestDto, headersOverride?: any) => 
    sendHttpRequest(new Request(HttpRequestMethod.GET, requestDto, headersOverride))

  post = (requestDto: RequestDto, headersOverride?: any) =>
    sendHttpRequest(new Request(HttpRequestMethod.POST, requestDto, headersOverride))

  put = (requestDto: RequestDto, headersOverride?: any) =>
    sendHttpRequest(new Request(HttpRequestMethod.PUT, requestDto, headersOverride))

  patch = (requestDto: RequestDto, headersOverride?: any) =>
    sendHttpRequest(new Request(HttpRequestMethod.PATCH, requestDto, headersOverride))

  delete = (requestDto:RequestDto, headersOverride?: any) =>
    sendHttpRequest(new Request(HttpRequestMethod.DELETE, requestDto, headersOverride))
}

export default HttpRequestService;