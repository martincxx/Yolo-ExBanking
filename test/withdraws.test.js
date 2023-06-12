import { expect } from "chai";
import { describe } from "mocha";
import { SUCCESSFUL_WITHDRAW, VOUCHER_SUCCESSFUL_WITHDRAW } from "../src/mocks/testData.js";
import { withdrawMoney } from "../src/api/bank.js";

describe("Withdraws testing", ()=>{
    it("EB08 - Withdraw money: Successful transaction", async () => {
      const res = await withdrawMoney(SUCCESSFUL_WITHDRAW);
      const voucher = await res.json();
      expect(res.status).to.equal(200);
      expect(voucher.balance).to.equal(VOUCHER_SUCCESSFUL_WITHDRAW.balance);
      expect(voucher.amount).to.equal(VOUCHER_SUCCESSFUL_WITHDRAW.amount);
      expect(voucher.account).to.equal(VOUCHER_SUCCESSFUL_WITHDRAW.account);
    });

})