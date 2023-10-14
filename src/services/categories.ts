import { Category } from '../interfaces/category.interface';
import { api } from './axios.config';

export const getCategories = async ():Promise<Category[]> => {
    return (await api.get('/categories')).data;
}