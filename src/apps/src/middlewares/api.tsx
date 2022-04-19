import axios from "axios";
axios.defaults.baseURL = "http://jsonplaceholder.typicode.com";

class API {
  public static getHeader(): any {
    return {
      // Authorization: "Bearer " + window.localStorage.getItem("token"),
    };
  }

  public static setHeader(accessToken: string): boolean {
    window.localStorage.setItem("token", accessToken);
    return true;
  }

  public static get(url: string) {
    const xhr = axios({
      method: "GET",
      headers: API.getHeader(),
      url,
    }).then((res) => res.data);
    return xhr;
  }

  public static post(url: string, data: any) {
    const xhr = axios({
      method: "GET",
      headers: API.getHeader(),
      url,
      data,
    }).then((res) => res.data);
    return xhr;
  }
}
export default API;
