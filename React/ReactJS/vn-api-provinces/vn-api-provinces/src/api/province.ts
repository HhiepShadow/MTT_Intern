import { AxiosError } from "axios";
import api from "./axios";

export const getAllProvince = async () => {
  try {
    const response = await api.get("/province/");
      const data = await response.data;
      return data;
  } catch (ex) {
    if (ex instanceof AxiosError) {
      if (ex.response) {
        console.log(ex.response?.data);
        console.log(ex.response?.headers);
        console.log(ex.response?.status);
      } else if (ex.request) {
          console.log(ex.request);
      } else {
          console.log(ex.message);
      }
    } else {
      console.log(ex);
    }
  }
};
