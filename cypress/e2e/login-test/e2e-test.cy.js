describe("Login/logout functionality and authentication", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearLocalStorage();
  });

  // Checks if a user can successfully log in
  it("Can user login", () => {
    cy.visit("/");
    cy.wait(1000);

    cy.get(".btn-close:visible").click({ force: true });
    cy.get("button[data-auth='login']:visible").click({ force: true });
    cy.wait(1500);

    cy.get("input[type='email']:visible")
      .should("exist")
      .type("cytest@stud.noroff.no");
    cy.get("input[type='password']:visible").should("exist").type("12345678");
    cy.get(".btn-success:visible").click({ force: true });
    cy.wait(3000);

    cy.url().should("include", "view=profile");
  });

  // Verifies the input of invalid email credentials and checks for an error message
  it("Validates email input", () => {
    cy.visit("/");
    cy.wait(1000);

    cy.get(".btn-close:visible").click({ force: true });
    cy.get("button[data-auth='login']:visible").click({ force: true });
    cy.wait(1500);

    cy.get("input[type='email']:visible")
      .should("exist")
      .type("notvalid@email.com");
    cy.get("input[type='password']:visible").should("exist").type("123");
    cy.get(".btn-success:visible").click({ force: true });
    cy.wait(3000);

    cy.url().should("not.include", "profile");
  });

  // Verifies the input of invalid password credentials and checks for an error message
  it("Validates password", () => {
    cy.visit("/");
    cy.wait(1000);

    cy.get(".btn-close:visible").click({ force: true });
    cy.get("button[data-auth='login']:visible").click({ force: true });
    cy.wait(1500);

    cy.get("input[type='email']:visible")
      .should("exist")
      .type("test@stud.noroff.no");
    cy.get("input[type='password']:visible").should("exist").type("123");
    cy.get(".btn-success:visible").click({ force: true });
    cy.wait(3000);

    cy.url().should("not.include", "view=profile");
  });

  it("User can log out", () => {
    cy.visit("/");
    cy.wait(1000);

    cy.get(".btn-close:visible").click({ force: true });
    cy.get("button[data-auth='login']:visible").click({ force: true });
    cy.wait(1500);

    cy.get("input[type='email']:visible")
      .should("exist")
      .type("cytest@stud.noroff.no");
    cy.get("input[type='password']:visible").should("exist").type("12345678");
    cy.get(".btn-success:visible").click({ force: true });
    cy.wait(3000);

    cy.url().should("include", "view=profile");
    cy.wait(1000);

    cy.get("button[data-auth='logout']")
      .should("be.visible")
      .click({ force: true });
    cy.then(() => {
      expect(window.localStorage.getItem("token")).to.be.null;
    });
  });
});
