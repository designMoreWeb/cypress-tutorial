describe("Form test", () => {
    it("Can fill the form", () => {
        cy.visit("/");
        cy.get("form");
    });
});//end test