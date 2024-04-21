import { custumAxios } from "../configs/axios.config";

export const FoodUtils = {
  getFood: async () => {
    const { data } = await custumAxios.get("food/find/all", {
      headers: {
        "accept-language": localStorage.getItem("language") || "uz",
      },
    });
    return data;
  },
  addFood: async ({
    images,
    name,
    description,
    price,
    category_id,
    restourant_id,
  }) => {
    const formData = new FormData();
    for (let img of images) {
      formData.append("images", img);
    }
    console.log(formData.get("images"));
    formData.append("name", JSON.stringify(name));
    formData.append("description", JSON.stringify(description));
    formData.append("category_id", category_id);
    formData.append("price", price);
    formData.append("restourant_id", restourant_id);
    const { data } = await custumAxios.post("food/add", formData);
    return data;
  },
  editFood: async ({ name, description, price, id }) => {
    const { data } = await custumAxios.patch(`food/edit/${id}`, {
      name: String(name),
      price: price,
      description: String(description),
    });
    return data;
  },
  deleteFood: async (id) => {
    const { data } = custumAxios.delete(`food/delete/${id}`);
    return data;
  },
};
