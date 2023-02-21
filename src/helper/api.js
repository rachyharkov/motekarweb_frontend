import axios from "axios";

export const getFaqs = () => {
  return axios.get(
    `${import.meta.env.VITE_API_URL}/faq`,
    {
      Accept: "application/json",
      // allow cors 
      mode: "cors",
    },
  )
};