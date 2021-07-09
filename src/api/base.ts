import { join } from "path";

export interface BaseResponse<T> {
  Data: T;
  Msg: string | null;
  Success: boolean;
}

export function API(path: string) {
  const url = new URL("./" + join(path), String(import.meta.env.VITE_URL));

  return new Request(String(url));
}

function status(response: Response) {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return Promise.resolve(response);
}

function json(response: Response) {
  return response.json().then((body) => {
    if (body.code === 500) {
      throw new Error(body.message);
    }

    return Promise.resolve(body);
  });
}

function error(err: Error) {
  console.error(err);

  throw err;
}

export function get<T>(req: RequestInfo, headers = {}): Promise<T> {
  return fetch(
    new Request(req, {
      headers: new Headers(headers),
    }),
  )
    .then(status)
    .then(json)
    .catch(error);
}

export function post<T>(
  req: RequestInfo,
  body: object,
  headers = {},
): Promise<T> {
  return fetch(
    new Request(req, {
      method: "POST",
      body: JSON.stringify(body),
      headers: new Headers({
        accept: "text/plain",
        "Content-Type": "application/json-patch+json",
        ...headers,
      }),
    }),
  )
    .then(status)
    .then(json)
    .catch(error);
}
