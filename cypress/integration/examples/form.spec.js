describe("Form test", () => {
    it("Can fill the form", () => {
        cy.visit("/");
        cy.get("form");

        cy.get('input[name="name"]')
            .type("Dan")
            .should("have.value", "Dan");

        cy.get('input[name="email"]')
            .type("dan@smith.ninja")
            .should("have.value", "dan@smith.ninja");

        cy.get("textarea")
            .type("Hello World")
            .should("have.value", "Hello World");
    });
});//end test