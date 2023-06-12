import { expect } from "chai";
import { describe } from "mocha";
import { makeDeposit } from "../src/api/bank.js";
import {
  WRONG_ACCOUNT, SUCCESSFUL_DEPOSIT,
  FAILED_DEPOSIT,
} from "../src/mocks/new.js";

describe("Deposit testing", ()=> {
    it("EB06 - Make a Deposit: Successful transaction", async () => {
        const res = await makeDeposit(SUCCESSFUL_DEPOSIT);
        expect(res.status).to.equal(200)
    });


    it("EB07 - Make a Deposit: Transaction not completed. Inactive account", async () => {
      const res = await makeDeposit(FAILED_DEPOSIT);
      expect(res.status).to.equal(409);
    });
})