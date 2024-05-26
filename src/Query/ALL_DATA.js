import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "./QUERY_KEY";
import { TranslateUtils } from "../utils/translate.utils";
import { FoodUtils } from "../utils/food.utils";
import { RestourantUtils } from "../utils/restourant.utils";
import { CategoryUtils } from "../utils/category.utils";
import { LanguageUtils } from "../utils/language.utils";
import { custumAxios } from "../configs/axios.config";
import { UserUtils } from "../utils/user.utils";

export const ALL_DATA = {
  useLanguage: () =>
    useQuery({
      queryKey: [QUERY_KEY.language],
      queryFn: LanguageUtils.getLanguage,
    }),

  useTranslate: () =>
    useQuery({
      queryKey: [QUERY_KEY.translate],
      queryFn: TranslateUtils.getTranslate,
    }),

  useRestourant: () =>
    useQuery({
      queryKey: [QUERY_KEY.restaurant],
      queryFn: RestourantUtils.getRestourant,
    }),

  useFood: () =>
    useQuery({
      queryKey: [QUERY_KEY.food],
      queryFn: FoodUtils.getFood,
    }),

  useCategory: (id) =>
    useQuery({
      queryKey: [QUERY_KEY.category],
      queryFn: async () =>
        await custumAxios.get(`category/find/by/restaurant/${id}`, {
          headers: {
            "accept-language": localStorage.getItem("language"),
          },
        }),
    }),

  useCategoryAll: () =>
    useQuery({
      queryKey: [QUERY_KEY.category],
      queryFn: CategoryUtils.getCategoryAll,
    }),

  useUsers: () =>
    useQuery({
      queryKey: [QUERY_KEY.user],
      queryFn: UserUtils.getUsers,
    }),
};
