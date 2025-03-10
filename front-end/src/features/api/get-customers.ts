import axios from 'axios';
import { Customer } from '../../pages/all-customers/model/types';


export const getCustomers = async (): Promise<Customer[]> => {
    const token = localStorage.getItem('accessToken');

    if (!token) {
        throw new Error('No token found');
    };


    const response = await axios.get('https://admin-dashboard-enfo.onrender.com/api/customers', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return response.data;
};
