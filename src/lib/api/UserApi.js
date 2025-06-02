import axios from "axios";

const endpoint = import.meta.env.VITE_API_PATH;

// export const userRegister = async ({ username, password, name }) => {
//   return await fetch(`${endpoint}/users`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify({ username, password, name }),
//   });
// };

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
