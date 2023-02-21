import axios from "axios";
import process from "process";

export const getFaqs = () => {
  return axios.get(`${import.meta.env.VITE_API_URL}/faqs`);
};