const Manager = require("./Manager");

let bob = new Manager("bob", 1, "bob@gmail.com", 24);

describe("Manager", () => {
  test("should be an instance of Manager", () => {
    expect(bob).toBeInstanceOf(Manager);
  });

  test("should return the expected name", () => {
    expect(bob.getName()).toBe("bob");
  });

  test("should return the expected id", () => {
    expect(bob.getId()).toBe(1);
  });

  test("should return the expected email", () => {
    expect(bob.getEmail()).toBe("bob@gmail.com");
  });

  test("should return the expected office number", () => {
    expect(bob.getOfficeNumber()).toBe(24);
  });

  test("should return the expected role", () => {
    expect(bob.getRole()).toBe("Manager");
  });
});
