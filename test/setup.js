import { server } from "../src/mocks/server.js";
import { expect } from "chai";
import { describe } from "mocha";
// Establish API mocking before all tests.
before(() => {
    global.expect = expect;
    global.describe = describe;
    server.listen()});

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
after(() => server.close());
