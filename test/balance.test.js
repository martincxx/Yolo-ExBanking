import { getAccountBalance } from "../src/api/bank.js";
import { EXISTING_ACCOUNT } from "../src/mocks/testData.js";

describe("Account Balance", ()=>{
    it("EB10 - Get Balance: Success", async () => {
      const res = await getAccountBalance(EXISTING_ACCOUNT.account_number);
      const user = await res.json();
      expect(res.status).to.equal(200);
      expect(user.balance).to.equal(EXISTING_ACCOUNT.balance);
      expect(user.account_number).to.equal(EXISTING_ACCOUNT.account_number);
    });
})