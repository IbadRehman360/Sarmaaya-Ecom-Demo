import axios from 'axios';

const fakeApi = axios.create({
    baseURL: 'https://fakestoreapi.com'
});

export const getFakeProducts = async (id, name) => {
    try {
        let response;
        if (id) {
            response = await fakeApi.get(`/products/${id}`);
        } else if (name) {
            console.log(name)
            response = await fakeApi.get(`/products/category/${name}`);
            console.log(response)
        } else {
            response = await fakeApi.get('/products');
        }

        return response.data;
    } catch (error) {
        console.error('Error fetching fake products:', error);
        throw error;
    }
};
