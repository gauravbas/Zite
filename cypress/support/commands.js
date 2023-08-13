Cypress.Commands.add("visitMainPage", () => {
    cy.visit(Cypress.env("CYPRESS_APP_BASE_URL"));
  
    return this;
  });

  Cypress.Commands.add("visitSignUpPage", () => {
    cy.visit(Cypress.env("CYPRESS_APP_SIGNUP_URL"));
  
    return this;
  });

  Cypress.Commands.add("verifyValidationError", (error) => {
    cy.get("div strong").should("have.text",error)
  
    return this;
  });

  Cypress.Commands.add("preserveAppCookie", () => {
    Cypress.Cookies.preserveOnce("csrftoken", "app_cookie");
});
 
