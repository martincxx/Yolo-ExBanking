
import { expect } from "chai";
import { describe } from "mocha";
import { allUsers, newUser, getUserByCI } from "../src/api/bank.js";
import { quentin, existingUser } from "../src/mocks/new.js";

describe("User testing", () => {
    it("EB01 - New User: Successful creation of a new  user", async () => {
      const res = await newUser(quentin);
      expect(res.status).to.equal(201);
    });

    it("EB02 - New User: Cannot create an already existing user", async () => {
      const res = await newUser(existingUser);
      expect(res.status).to.equal(409);
    });
  
    it("EB03 - Get all registered users", async () => {
      const res = await allUsers();
      expect(res.status).to.equal(200);
    });

    it("EB04 - Get a user by CI", async () => {
      const res = await getUserByCI("YIVPMOR2");
      const user = await res.json();
      expect(res.status).to.equal(200);
      expect(user.firstname).to.equal("Broderick");
      expect(user.ci).to.equal("YIVPMOR2");
    });

    it("EB05: Get an error message when trying to fetch a non existing user", async () => {
      const res = await getUserByCI("YIVPOR2");
      expect(res.status).to.equal(404);
    });
});
