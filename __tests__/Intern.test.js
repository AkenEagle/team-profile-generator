const Intern = require("../src/lib/Intern");

let bob = new Intern("bob", 1, "bob@gmail.com", "UoB");

describe("Intern", () => {
  test("should be instance of Intern", () => {
    expect(bob).toBeInstanceOf(Intern);
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

  test("should return the expected school", () => {
    expect(bob.getSchool()).toBe("UoB");
  });

  test("should return the expected role", () => {
    expect(bob.getRole()).toBe("Intern");
  });
});
