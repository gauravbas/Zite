class Profile_PO {
    typeFirstName(firstName) {
        cy.get("#first_name").type(firstName);
    
        return this;
      }

      typeMiddleName(middleName) {
        cy.get("#middle_name").type(middleName);
    
        return this;
      }

      typeLastName(lastName) {
        cy.get("#last_name").type(lastName);
    
        return this;
      }

      selectGender() {
        cy.get("#Male").click();
    
        return this;
      }

      typePhone(phone) {
        cy.get("#phone").type(phone);
        
        return this;
      }

      typeSkype(skypeId) {
        cy.get("#skype").type(skypeId);

        return this;
      }
    
      typeAddress(address) {
      cy.get("#address").type(address);

      return this;
      }

      clickOnSaveButton() {
      cy.get(".common-button").click();

      return this;
      }

      verifySuccessMessage() {
        cy.get(".is-success").should("be.visible")
        cy.get(".is-success div h6").should("have.text","success");
        cy.get(".is-success p").should("have.text","Profile Updated");

        return this;
      }     
    }

    export default new Profile_PO();
    