import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";

export const createUserAccount = (userDetails) => {
  const user = { ...userDetails };
  user.account_number = faker.finance.accountNumber();
  user.balance = "15.00"
  user.user_id = uuidv4();
  user.status = "active";
  user.timestamp = new Date().toISOString();
  return user;
};

export const generateVoucherOfTransaction = (transactionDetails) =>{
  const voucher = { ...transactionDetails };
  voucher.tx_id = faker.string.numeric(15);
  voucher.status = "Successfull";
  voucher.timestamp = new Date().toISOString();
  return voucher;
}