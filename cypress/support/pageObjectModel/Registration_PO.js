class Registration_PO {
    elements = {
      userNameSelector: () => cy.get("input[name='username']"),
      emailSelector: () => cy.get("input[name='email']"),
      passwordSelector: () => cy.get("#new-Password"),
      confirmPasswordSelector: () => cy.get("#confirm-Password"),
    };
  
    emptyCredential(emailAddress) {
      this.elements.userNameSelector().type(emailAddress).clear();
      this.elements.emailSelector().type(emailAddress).clear();
      this.elements.passwordSelector().type(emailAddress).clear();
      this.elements.confirmPasswordSelector().type(emailAddress).clear();
  
      return this;
    }
  
    fillFormFields(userName, email, password) {
      this.elements.userNameSelector().clear().type(userName);
      this.elements.emailSelector().clear().type(email);
      this.elements.passwordSelector().clear().type(password);
      this.elements.confirmPasswordSelector().clear().type(password);
  
      return this;
    }

    clickOnSignUpButton() {
      cy.get(".hover-bg-_37A541").click();

      return this;
    }

    selectCheckBox() {
      cy.get("[type='checkbox']").check();

      return this;

    }
  }
  
  export default new Registration_PO();