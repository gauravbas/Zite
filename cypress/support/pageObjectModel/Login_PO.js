import faker from 'faker';

class Login_PO {
  elements = {
    userNameSelector: () => cy.get("[name='email_or_username']"),
    passwordSelector: () => cy.get("#login-Password"),
    logInButtonSelector: () => cy.get(".hover-bg-_37A541"),
  };

  typeUserName(userName) {
    this.elements
      .userNameSelector()
      .clear()
      .type(userName)
      .should("have.value", userName);

    return this;
  }

  typePassword(password) {
    this.elements
      .passwordSelector()
      .clear()
      .type(password)
      .should("have.value", password);

    return this;
  }

  emptyCredential() {
    const userName = faker.name.findName();
    const password = faker.internet.password();

    this.elements.userNameSelector().type(userName).clear();
    this.elements.passwordSelector().type(password).clear();

    return this;
  }

  clickOnLogInButton() {
    this.elements.logInButtonSelector().click();

    return this;
  }

  validateSuccessfulLogin() {  
    cy.get("div[role='article'] >div >div >div").should("not.exist");
    cy.url().should("include", "/updateprofile");
    cy.get(".site-content").should("be.visible");

    return this;

  }

  validateDashboardUrl() {
    cy.url().should("include", "/dashboard");

    return this;

  }

  waitForProfilePage () {
    cy.intercept("GET", "https://app.zite.io/").as("ProfileData");

    return this;
  }
}

export default new Login_PO();

