const Manager = require("../lib/manager");

test("Creates an manager object", () => {
    const manager = new Manager("Fantasia", 40, "fantasia@gmail.com", 717);

    expect(manager.name).toBe("Fantasia");
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.stringContaining("fantasia@gmail.com"));
    expect(manager.officeNumber).toEqual(expect.any(Number));
})

test("returns manager name, email, id, and role", () => {
    const manager = new Manager("Forest", 40, "fantasia@gmail.com", 717);

    expect(manager.getName()).toBe("Fantasia");
    expect(manager.getId()).toBe(40);
    expect(manager.getEmail()).toBe("fantasia@gmail.com");
    expect(manager.getOfficeNumber()).toBe(717);
    expect(manager.getRole()).toBe("Manager");
})
