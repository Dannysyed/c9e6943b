import axios from "axios";

const API_BASE_URL = "https://aircall-backend.onrender.com";

export const getActivities = () => axios.get(`${API_BASE_URL}/activities`);
export const getActivity = (id) =>
  axios.get(`${API_BASE_URL}/activities/${id}`);
export const updateActivity = (id, data) =>
  axios.patch(`${API_BASE_URL}/activities/${id}`, data);
export const resetActivities = () => axios.patch(`${API_BASE_URL}/reset`);
