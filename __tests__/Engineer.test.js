const Engineer = require("../src/lib/Engineer");

let bob = new Engineer("bob", 1, "bob@gmail.com", "bob24");

describe("Engineer", () => {
  test("should be instance of Engineer", () => {
    expect(bob).toBeInstanceOf(Engineer);
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

  test("should return the expected github", () => {
    expect(bob.getGithub()).toBe("bob24");
  });

  test("should return the expected role", () => {
    expect(bob.getRole()).toBe("Engineer");
  });
});
