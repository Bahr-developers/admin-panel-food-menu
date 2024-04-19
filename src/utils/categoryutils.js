import { custumAxios } from "../configs/axios.config";

export const CategoryUtils = {
    getCategory: async () => {
        const {data} = await custumAxios.get('category/find/all', {
            headers: {
                'accept-language': localStorage.getItem('language') || 'uz'
            }
        })
        return data
    },
    addCategory: async ({name, image, category_id, restaurant_id}) => {
        const formData = new FormData()
        formData.append("name",name)
        formData.append("image",image)
        formData.append("category_id",category_id)
        formData.append("restaurant_id",restaurant_id)
        const {data} = await custumAxios.post('/category/add', formData)
        return data
    },
    editCAtegory: async ({id, name, category_id}) => {
        const {data} = await custumAxios.post(`/category/edit/${id}`, {
            name,
            category_id
        })
        return data
    },
    deleteCatefory: async (id) => {
        const {data} = await custumAxios.post(`/category/delete/${id}`)
        return data
    }
}
