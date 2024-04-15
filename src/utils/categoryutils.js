import { custumAxios } from "../configs/axios.config"

export const CategoryUtils = {
    getCategory: async () => {
        const {data} = await custumAxios.get('category/find/all', {
            headers: {
                'accept-language': localStorage.getItem('language') || 'uz'
            }
        })
        return data
    },
    addCategory: async ({name}) => {
        const {data} = await custumAxios.post('/category/add', {
            name
        })
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