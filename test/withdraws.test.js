import {
  FAILED_WITHDRAW_INSUFFICIENT_FUNDS,FAILED_INACTIVE_ACCOUNT, SUCCESSFUL_WITHDRAW,
  VOUCHER_SUCCESSFUL_WITHDRAW,
} from "../src/mocks/testData.js";
import { withdrawMoney } from "../src/api/bank.js";

describe("Withdraws testing", ()=>{
    
    it("EB08 - Withdraw money: Successful transaction", async () => {
      const res = await withdrawMoney(SUCCESSFUL_WITHDRAW);
      const voucher = await res.json();
      expect(res.status).to.equal(200);
      expect(voucher.balance).to.equal(VOUCHER_SUCCESSFUL_WITHDRAW.balance);
      expect(voucher.amount).to.equal(VOUCHER_SUCCESSFUL_WITHDRAW.amount);
      expect(voucher.account).to.equal(VOUCHER_SUCCESSFUL_WITHDRAW.account);
      expect(voucher).to.have.property("timestamp")
    });

    it("EB09 - Withdraw money: Insufficient funds", async () => {
      const res = await withdrawMoney(FAILED_WITHDRAW_INSUFFICIENT_FUNDS);
      expect(res.status).to.equal(409);
    });

    it("EB10 - Withdraw money: Inactive Account", async () => {
      const res = await withdrawMoney(FAILED_INACTIVE_ACCOUNT);
      expect(res.status).to.equal(409);
    });
})