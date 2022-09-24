import { And, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor"
import RegisterNewUser from './PageObjects/RegisterNewUser.spec'
const r = new RegisterNewUser();
let i = 0;
describe('Register', () => {

    Given('User launches the Adactin webpage', () => {
        cy.visit('https://adactinhotelapp.com/')
    })
    When('User clicks New User Register Here option', () => {
        r.registerHere().click()
    })
    And('User enters Username,Password,Confirm Password,Full Name,Email Address', () => {
        cy.fixture('xlsxData').then((data) => {
            r.userName().type(data.rows[i].username)
            r.password().type(data.rows[i].password)
            r.confirmPassword().type(data.rows[i].password)
            r.fullName().type(data.rows[i].username)
            r.emailAddress().type(data.rows[i].Email_Address)
        })
    })
    Then('User clicks check box', () => {
        r.agreeCheckbox().check()
    })
    Then('User clicks Register Button', () => {
        // r.registerBtn().click()
    })

})
