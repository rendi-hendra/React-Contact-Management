import axios from "axios";

const endpoint = import.meta.env.VITE_API_PATH;

export const userRegister = async ({ username, password, name }) => {
  return await axios({
    method: "post",
    url: `${endpoint}/users`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: {
      username,
      password,
      name,
    },
  });
};

export const userLogin = async ({ username, password }) => {
  return await axios({
    method: "post",
    url: `${endpoint}/users/login`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: {
      username,
      password,
    },
  });
};

export const userUpdateProfile = async (token, { name }) => {
  return await axios({
    method: "patch",
    url: `${endpoint}/users/current`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-API-TOKEN": token,
    },
    data: {
      name,
    },
  });
};

export const userUpdatePassword = async (token, { password }) => {
  return await axios({
    method: "patch",
    url: `${endpoint}/users/current`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-API-TOKEN": token,
    },
    data: {
      password,
    },
  });
};

export const userDetail = async (token) => {
  return await axios({
    method: "get",
    url: `${endpoint}/users/current`,
    headers: {
      Accept: "application/json",
      "X-API-TOKEN": token,
    },
  });
};
