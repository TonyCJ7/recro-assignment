type MethodType = "GET" | "PUT" | "POST" | "DELETE" | "PATCH";

type ReqOptions = {
  endpoint: string;
} & RequestInit;

export class ResponseError extends Error {
  public response: Response;

  constructor(response: Response) {
    super(response.statusText);
    this.response = response;
  }
}

function request(
  method: MethodType,
  reqOptions: ReqOptions
): Promise<Response> {
  const { endpoint, ...options } = reqOptions;
  const url = `${BASE_URL}${endpoint}`;
  return fetch(url, { method, ...options }).then((res) => res.json());
}

export default {
  GET: (req: ReqOptions): Promise<Response> => request("GET", req)
};
