const Employee = require("../lib/Employee");

test("Creates an Employee object", () => {
    const employee = new Employee("Greg", 46, "greg@gmail.com");

    expect(employee.name).toBe("greg");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining("greg@gmail.com"));
})

test("returns employee name, email, id, and role", () => {
    const employee = new Employee("Greg", 46, "greg@gmail.com");

    expect(employee.getName()).toBe("Greg");
    expect(employee.getId()).toBe(46);
    expect(employee.getEmail()).toBe("greg@gmail.com");
    expect(employee.getRole()).toBe("Employee");
})
