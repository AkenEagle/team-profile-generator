const Employee = require("./Employee");

let bob = new Employee("bob", 1, "bob@gmail.com");

test("Employee name is bob", () => {
  expect(bob.getName()).toBe("bob");
});
