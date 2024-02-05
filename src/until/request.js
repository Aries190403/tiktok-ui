import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (url, options = {}) => {
    const rep = await request.get(url, options);
    return rep.data;
};
export default request;