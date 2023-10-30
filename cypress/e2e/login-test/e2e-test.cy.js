describe("Authentication Tests", () => {
  const validUsername = "validUsername";
  const validPassword = "validPassword";
  const invalidUsername = "invalidUsername";
  const invalidPassword = "invalidPassword";

  beforeEach(() => {
    cy.visit("/");
  });

  it("should log in with valid credentials", () => {
    cy.get('input[name="username"]').should("be.visible").type(validUsername);
    cy.get('input[name="password"]').should("be.visible").type(validPassword);
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "profile");
  });

  it("should show an error message for invalid credentials", () => {
    cy.get('input[name="username"]').should("be.visible").type(invalidUsername);
    cy.get('input[name="password"]').should("be.visible").type(invalidPassword);
    cy.get('button[type="submit"]').click();
    cy.get(".error-message").should("be.visible");
  });

  it("should log out successfully", () => {
    // Perform login here
    cy.get('input[name="username"]').should("be.visible").type(validUsername);
    cy.get('input[name="password"]').should("be.visible").type(validPassword);
    cy.get('button[type="submit"]').click();

    // Log out
    cy.get(".logout-button").should("be.visible").click();
    cy.url().should("include", "/login");
  });
});
