
import { expect } from "chai";
import { describe } from "mocha";
import { getAllUsers } from "../api/bank.js";

describe("User testing", () => {
    it("New User: Successful creation of a new  user", async()=>{
        
    })
  
    it("Get all registered users 200 Ok", async () => {
        const res = await getAllUsers()
        expect(res.status).to.equal(200);
    });
});
