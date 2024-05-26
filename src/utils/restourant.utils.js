import { custumAxios } from "../configs/axios.config";

export const RestourantUtils = {
  getRestourant: async () => {
    const { data } = await custumAxios.get("restourant/find/all", {
      headers: {
        "accept-language": localStorage.getItem("language") || "uz",
      },
    });
    return data;
  },
};
