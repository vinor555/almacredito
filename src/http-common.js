import axios from "axios";

export default axios.create({
  baseURL: "https://PRO-014-GDT-004.chncentral.chn.com.gt:9443/middleware",
  headers: {
    "Content-type": "application/json"
  }
});

export const individual = axios.create({
    baseURL: "https://PRO-014-GDT-004.chncentral.chn.com.gt:8443/middleware",
    headers: {
      "Content-type": "application/json"
    }
  });