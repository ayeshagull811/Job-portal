// jobService.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/jobs';

export const getJobs = () => axios.get(API_URL);

export const getJobById = (id) => axios.get(`${API_URL}/${id}`);

export const applyToJob = (jobId, userData) =>
  axios.post(`${API_URL}/${jobId}/apply`, userData);

export const deleteJob = (jobId) =>
  axios.delete(`${API_URL}/${jobId}`);
export const updateJob = (id, updatedData) => {
  return axios.put(`${API_URL}/${id}`, updatedData)}
