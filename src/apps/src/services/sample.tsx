import api from "../middlewares/api";
class SampleService {
  get = async (url: any) => {
    const resp = await api.get(`${url}`);
    console.log("resp", resp);
    return resp;
  };
}

export default SampleService;
