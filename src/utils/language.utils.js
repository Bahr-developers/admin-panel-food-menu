import { custumAxios } from "../configs/axios.config";

export const LanguageUtils = {
  getLanguage: async () => {
    const { data } = await custumAxios.get("language");
    return data;
  },
};
