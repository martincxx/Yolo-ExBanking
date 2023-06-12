import { makeDeposit } from "../src/api/bank.js";
import {VOUCHER_SUCCESSFUL_DEPOSIT,
  SUCCESSFUL_DEPOSIT,
  FAILED_INACTIVE_ACCOUNT,
} from "../src/mocks/testData.js";

describe("Deposit testing", ()=> {
    it("EB06 - Make a Deposit: Successful transaction", async () => {
        const res = await makeDeposit(SUCCESSFUL_DEPOSIT);
        const voucher = await res.json();
        expect(res.status).to.equal(200)
        expect(voucher.balance).to.equal(VOUCHER_SUCCESSFUL_DEPOSIT.balance);
        expect(voucher.amount).to.equal(VOUCHER_SUCCESSFUL_DEPOSIT.amount);
        expect(voucher.account).to.equal(VOUCHER_SUCCESSFUL_DEPOSIT.account)
    });


    it("EB07 - Make a Deposit: Transaction not completed. Inactive account", async () => {
      const res = await makeDeposit(FAILED_INACTIVE_ACCOUNT);
      expect(res.status).to.equal(409);
    });
})