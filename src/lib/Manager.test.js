const Manager = require("./Manager");

let bob = new Manager("bob", 1, "a", 24);

describe("Manager", () => {
  test("should be an instance of Manager", () => {
    expect(bob).toBeInstanceOf(Manager);
  });

  test("should return the expected name", () => {});

  test("should return the expected id", () => {});

  test("should return the expected email", () => {});

  test("should return the expected office number", () => {});

  test("should return the expected role", () => {});
});
