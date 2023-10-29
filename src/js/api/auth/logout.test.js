import { logout } from "./logout";

const localStorageMock = {
  setItem: jest.fn((key, value) => (localStorage[key] = value)),
  getItem: jest.fn((key) => localStorage[key] || null),
  removeItem: jest.fn((key) => delete localStorage[key]),
  clear: jest.fn(() =>
    Object.keys(localStorage).forEach((key) => delete localStorage[key]),
  ),
};

globalThis.localStorage = localStorageMock;

describe("logout", () => {
  it("deletes the token from local storage", () => {
    logout();
    expect(localStorage.removeItem).toHaveBeenCalledWith("token");
  });
});
