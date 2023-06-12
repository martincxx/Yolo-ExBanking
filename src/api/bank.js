import fetch from "node-fetch";

export const BASE_URL = "https://exbank.com";
const usersEndpoint = `${BASE_URL}/users`;
const depositsEndpoint = `${BASE_URL}/deposits`;
const withdrawsEndpoint = `${BASE_URL}/withdraws`;

export const allUsers = async () => {
  const response = await fetch(usersEndpoint);
  if (response.ok){
    return response
  } else {
    throw new Error("Something went wrong!")
  }
};

export const getUserByCI = async (userCI) =>{
  const response = await fetch(`${usersEndpoint}/${userCI}`)
  if (response) {
    return response;
  } else {
    throw new Error("Something went wrong!");
  }
}

export const newUser = async(user)=>{
  const response = await fetch(usersEndpoint, {
    method:"POST", body:JSON.stringify(user)});
  if (response) {
    return response;
  } else {
    throw new Error("Something went wrong!");
  }
}

export const makeDeposit = async(transaction)=>{
  const response = await fetch(depositsEndpoint, {
    method: "POST",
    body: JSON.stringify(transaction),
  });
  if (response) {
    return response;
  } else {
    throw new Error("Something went wrong!");
  }
}

export const withdrawMoney = async(transaction)=> {
  const response = await fetch(withdrawsEndpoint, {
    method:"POST",
    body: JSON.stringify(transaction),
  });
  if (response) {
    return response;
  } else {
    throw new Error("Something went wrong!");
  }
}