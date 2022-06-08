const Intern = require("../lib/intern");

describe("Intern", () => {

    test("Should create an Intern Object", () => {
        const x = new Intern();
        expect(typeof(x)).toBe("object");
    });

    test("Should create an Intern Object with all the parameters", () => {
        const x = new Intern("Paul Brown", 313, "paulbrown@email.com", "County Tech Institute");
        expect(typeof(x.name)).toBe("string");
        expect(typeof(x.id)).toBe("number");
        expect(typeof(x.email)).toBe("string");
        expect(typeof(x.school)).toBe("string");
    });

    test("Should create name using the constructor", () => {
        const name = "Paul Brown";
        const x = new Intern(name);
        expect(x.name).toEqual("Paul Brown");
    });

    test("Should create id using the constructor", () => {
        const id = 313;
        const x = new Intern("Paul Brown", id, "paulbrown@email.com", "County Tech Institute");
        expect(x.id).toBe(id);
    });

    test("Should create email using the constructor", () => {
        const email = "gam3@fac3.com";
        const x = new Intern("Paul Brown", 313, email, "County Tech Institute");
        expect(x.email).toBe(email);
    });

    test("Should create school using the constructor", () => {
        const school = "gam3@fac3.com";
        const x = new Intern("Paul Brown", 313, "paulbrown@email.com", school);
        expect(x.school).toBe(school);
    });

    test("Should get the role of Intern", () => {
        const x = new Intern("Paul Brown", 313, "paulbrown@email.com", "County Tech Institute");
        expect(x.getRole()).toBe("Intern");
    });

    test("Should get the school using getSchool()", () => {
        const x = new Intern("Paul Brown", 313, "paulbrown@email.com", "County Tech Institute");
        expect(x.getSchool()).toBe("County Tech Institute");
    });
});