const Employee = require("../src/lib/Employee");

let bob = new Employee("bob", 1, "bob@gmail.com");

describe("Employee", () => {
  test("should be instance of Employee", () => {
    expect(bob).toBeInstanceOf(Employee);
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

  test("should return the expected role", () => {
    expect(bob.getRole()).toBe("Employee");
  });
});
