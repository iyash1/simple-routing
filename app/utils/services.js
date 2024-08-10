import axios from 'axios';
import { API } from '../config';

export const services = {
    getPosts: async () => {
        const postsResponse = await axios.get(API.getPosts);
        return postsResponse.data;
    },
    getPostById: async (id) => {
        const postIdResponse = await axios.get(`${API.getPosts}/${id}`);
        return postIdResponse.data;
    }
}