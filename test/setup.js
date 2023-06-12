import { server } from "../src/mocks/server.js";
// Establish API mocking before all tests.
before(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
after(() => server.close());
