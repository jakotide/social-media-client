import { login } from "./login.js";

const localStorageMock = {
  setItem: jest.fn((key, value) => (localStorage[key] = value)),
  getItem: jest.fn((key) => localStorage[key] || null),
  removeItem: jest.fn((key) => delete localStorage[key]),
  clear: jest.fn(() =>
    Object.keys(localStorage).forEach((key) => delete localStorage[key]),
  ),
};

const USER_DATA = {
  id: 1,
  email: "test@test.com",
  password: "123456789",
  accessToken: "mockToken",
};

const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue(USER_DATA),
});

beforeAll(() => {
  globalThis.localStorage = localStorageMock;
  globalThis.fetch = mockFetchSuccess;
});

describe("login", () => {
  it("returns a user object if the call is successful", async () => {
    const data = await login({});
    expect(data).toEqual(USER_DATA);
  });

  it("Adds an access token to local storage", async () => {
    await login({});
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "token",
      JSON.stringify(USER_DATA.accessToken),
    );
  });
});
