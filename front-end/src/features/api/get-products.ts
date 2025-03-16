import axios from "axios";

export const getProducts = async () => {
  const token = localStorage.getItem('accessToken');

  if (!token) {
    throw new Error('No token found');
  }

  const response = await axios.get('https://admin-dashboard-enfo.onrender.com/api/products', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return response.data;
};

