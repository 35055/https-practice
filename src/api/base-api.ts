import { baseUrl } from "./base-url";

class BaseApi {
  private makeRequest = async (url: string, method: string, body?: unknown) => {
    const headers = {
      "Content-type": "application/json; charset=UTF-8",
    };

    const response = await fetch(`${baseUrl}${url}`, {
      method,
      body: body ? JSON.stringify(body) : undefined,
      headers,
    });

    if (response.status > 299 || response.status < 200) {
      throw Error(await response.text());
    }

    const data = await response.json();

    return data;
  };

  public get(url: string) {
    return this.makeRequest(url, "GET");
  }
  public post(url: string, body?: unknown) {
    return this.makeRequest(url, "POST", body);
  }
  public put(url: string, body?: unknown) {
    return this.makeRequest(url, "PUT", body);
  }

  public delete(url: string) {
    return this.makeRequest(url, "DELETE");
  }
}

export default new BaseApi();
