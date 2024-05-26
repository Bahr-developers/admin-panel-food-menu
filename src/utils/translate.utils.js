import { custumAxios } from "../configs/axios.config";

export const TranslateUtils = {
  getTranslate: async () => {
    const { data } = await custumAxios.get("translate");
    return data;
  },
  getTranslateSingleCode: async (code) => {
    const { data } = await custumAxios.get(`translate/single/${code}`, {
      headers: {
        "accept-language": localStorage.getItem("language") || "uz",
      },
    });
    return data;
  },
  getTranslateUnused: async () => {
    const { data } = await custumAxios.get(`translate/unused`);
    return data;
  },
  getTranslateSingleId: async (id) => {
    const { data } = await custumAxios.get(`translate/single/${id}`, {
      headers: {
        "accept-language": localStorage.getItem("language") || "uz",
      },
    });
    return data;
  },
  postTranslate: async ({ code, type, definition }) => {
    const { data } = await custumAxios.post("translate/add", {
      code,
      type,
      definition,
    });
    return data;
  },
};
