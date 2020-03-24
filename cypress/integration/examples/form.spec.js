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

        //Stubbing: Cypress is intercepting AJAX requests
        cy.server();
        cy.route({
            url: "/users/**",
            method: "POST",
            response: { status: "Form Is Saved!", code: 201 }
        });

        cy.get("form").submit();

        cy.contains("Form Is Saved!");
    });
});//end test