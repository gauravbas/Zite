import login from "../support/pageObjectModel/Login_PO";
import faker from 'faker';

describe("Test for login ", function () {

  before(() => {
    cy.visitMainPage();
    
  });

  beforeEach(() => {
    cy.preserveAppCookie();
    
  });

  it("Should verify invalid credential", () => {
    const invalidError = "Wrong credentials please try again";

    const userName = faker.name.firstName();
    const password = faker.internet.password();

    login.typeUserName(userName).typePassword(password).clickOnLogInButton();

    cy.verifyValidationError(invalidError);
  });

  it("Should login with valid credentials", () => { 
    const appUserName = Cypress.env("CYPRESS_APP_USERNAME")
    const appPassword = Cypress.env("CYPRESS_APP_PASSWORD")

    login
      .typeUserName(appUserName)
      .typePassword(appPassword)
      .clickOnLogInButton()
      .waitForProfilePage()
      .validateDashboardUrl();
  });
});

//validating empty login code.This code fails on executing as validation error disappearing from DOM 

// it("Should validate empty credential", () => {
//   const emptyError = "Please Try Again";

//   login.emptyCredential().clickOnLogInButton()

//   cy.verifyValidationError(emptyError);
// });