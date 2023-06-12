import fetch from "node-fetch";

export const BASE_URL = "https://exbank.com";
const usersEndpoint = `${BASE_URL}/users`;

export const getAllUsers = async () => {
  const response = await fetch(usersEndpoint);
  if (response.ok){
    return response
  } else {
    throw new Error("Something went wrong!")
  }
};
