import { custumAxios } from "../configs/axios.config"

export const FoodUtils = {
    getFood: async () => {
        const {data} = await custumAxios.get('food/find/all', {
            headers: {
                'accept-language': localStorage.getItem('language') || 'uz'
            }
        })
        return data
    },
    addFood: async ({name, description, price, category_id, restourant_id}) =>  {
        const {data} = await custumAxios.post('food/add', {
            name,
            price, 
            category_id,
            restourant_id,
            description
        })
        return data
    },
    editFood: async ({name, description, price, id}) => {
        const {data} = await custumAxios.patch(`food/edit/${id}`, {
            name,
            price, 
            description
        })
        return data
    },
    deleteFood: async (id) => {
        const {data} = custumAxios.delete(`food/delete/${id}`)
        return data
    }
}