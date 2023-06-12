import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";

export const createUserAccount = (a) => {
  const user = { ...a };
  user.account_number = faker.finance.accountNumber();
  user.balance = "15.00"
  user.user_id = uuidv4();
  user.status = "active";
  user.timestamp = new Date().toISOString();
  return user;
};
