import axios from "axios";

export class ApiService {
  baseURL;

  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  registerUser = (user) => {
    return axios.post(`${this.baseURL}/users/register`, user, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  getAllUsers = () => {
    return axios.get(`${this.baseURL}/users`);
  };

  getUserById = (userId) => {
    return axios.get(`${this.baseURL}/users/${userId}`);
  };

  updateUser = (userId, updatedUser) => {
    return axios.put(`${this.baseURL}/users/${userId}`, { ...updatedUser });
  };

  deleteUser = (userId) => {
    return axios.delete(`${this.baseURL}/users/${userId}`);
  };

  getAllJobs = () => {
    return axios.get(`${this.baseURL}/jobs`);
  };

  getJobById = (jobId) => {
    return axios.get(`${this.baseURL}/jobs/${jobId}`);
  };

  deleteJob = (jobId) => {
    return axios.delete(`${this.baseURL}/jobs/${jobId}`);
  };
  updateJob = (jobId, updatedJob) => {
    return axios.put(`${this.baseURL}/jobs/${jobId}`);
  };
}
