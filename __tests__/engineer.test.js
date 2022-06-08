const Engineer = require("../lib/Engineer");

test("Creates an manager object", () => {
    const engineer = new Engineer("Prince", 44, "prince@gmail.com", "Prince Green");

    expect(engineer.name).toBe("Prince");
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.stringContaining("prince@gmail.com"));
    expect(engineer.github).toBe("Prince Green");
})

test("returns manager name, email, id, and role", () => {
    const engineer = new Engineer("Prince", 44, "prince@gmail.com", "Prince Green");

    expect(engineer.getName()).toBe("Prince");
    expect(engineer.getId()).toBe(44);
    expect(engineer.getEmail()).toBe("prince@gmail.com");
    expect(engineer.getGithub()).toBe("Prince Green");
    expect(engineer.getRole()).toBe("Engineer");
})
