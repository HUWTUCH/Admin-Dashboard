import axios from "axios";
// TODO: Перенести в features/get-suppliers/api/get-suppliers.ts
export const getSuppliers = async () => {
    const token = localStorage.getItem('accessToken');

    if (!token) {
        throw new Error('No token found');
    };

    const response = await axios.get('https://admin-dashboard-enfo.onrender.com/api/suppliers', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    return response.data;
};

