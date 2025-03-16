import axios from "axios";
import { initialValuesType } from "../models/types";
// TODO: Перенести в features/login/api/login-api.ts
export const loginApi = async (values: initialValuesType, actions: any) => {
    try {
        const response = await axios.post(
          'https://admin-dashboard-enfo.onrender.com/api/user/login',
          values
        );
        return response.data;
      } catch (error: any) {
        console.error('Login failed:', error.response?.data || error.message);
      } finally {
        actions.setSubmitting(false);
      }
}