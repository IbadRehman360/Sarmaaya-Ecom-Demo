import axios from 'axios';

const fakeApi = axios.create({
    baseURL: 'https://fakestoreapi.com'
});

export const getFakeProducts = async () => {
    try {
        const response = await fakeApi.get('/products');
        return response.data;
    } catch (error) {
        console.error('Error fetching fake products:', error);
        throw error;
    }
};
