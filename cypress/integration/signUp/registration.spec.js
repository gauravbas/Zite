import login from "../../support/pageObjectModel/Login_PO";
import profile from "../../support/pageObjectModel/Profile_PO";
import registration from "./../../support/pageObjectModel/Registration_PO";
import  faker  from 'faker';

describe("Test for Registration", function () {
    const password ="#NaxaQA" + faker.random.number({ min: 2000, max: 3000 });

  before(() => {
    cy.visitSignUpPage();   
   
  });

  beforeEach(() => {
    const email = "gaurabbastola+" + faker.random.number({ min: 1000, max: 9999 }) + "@gmail.com";
    cy.wrap(email).as("email");

    cy.preserveAppCookie();
   
   
  });

  it("should verify invalid username", function () {
    const invalidValidationError = "Username: Username must not contain dot."

    registration.fillFormFields(
      this.email,
      this.email,
      password,
      password
    ).clickOnSignUpButton();

    cy.verifyValidationError(invalidValidationError);
  });

  it("should sign up and sign in with valid credentials", function () {  
    const firstName = faker.name.firstName();
    const middleName = faker.name.middleName();
    const lastName = faker.name.lastName();
    const userName = "automation_Gaurav" +`${lastName}`;
    const phone = faker.phone.phoneNumber();
    const skypeId = "live" + faker.name.firstName();
    const address = faker.address.city();

    registration.fillFormFields(userName, this.email, password, password).selectCheckBox().clickOnSignUpButton();

    cy.pause();

    cy.get(".hover-underline").click();

    login.typeUserName(userName).typePassword(password).clickOnLogInButton();

    profile.typeFirstName(firstName).typeMiddleName(middleName).typeLastName(lastName).selectGender().typePhone(phone).typeSkype(skypeId).typeAddress(address).clickOnSaveButton().verifySuccessMessage();
       
  });
});

  //validating empty registration code.This code fails on executing as validation error disappearing from DOM 

  // it("should validate empty registration", () => {
  //   const emptyValidationError =
  //     "Please fill out this field."

  //   registration.emptyCredential(email).clickOnSignUpButton();

  //   cy.verifyValidationError(emptyValidationError);
  // });


