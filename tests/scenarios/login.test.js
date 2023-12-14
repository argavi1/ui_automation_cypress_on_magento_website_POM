import * as element from '@helpers/elements';
import * as route from '@helpers/route';
import {ROUTES} from '@tests/const/routes';
import * as loginPage from '@tests/pages/login.page';
import * as login from '@tests/data/login.data'
import * as assert from '@helpers/asserts';

describe('Login Test', function(){
    beforeEach(() => {
        route.visit(ROUTES.login);
    });

it.only('Successfull login', () => {
    element.clearAndFillField(loginPage.emailField, 'testerjago@gmail.com');
    element.clearAndFillField(loginPage.passwordField, 'Password123');
    element.click(loginPage.signinBtn);

    assert.containText('Welcome, tester jago!');
    });

it('Failure login using invalid username', () => {
    element.fillField(loginPage.emailField, 'testerjago@gmail');
    element.fillField(loginPage.passwordField, 'Password123');
    element.click(loginPage.signinBtn);
    element.wait(3000)

    assert.shouldExist(loginPage.invalidEmailAlert);
});

it('Failure login using invalid password', () => {
    element.fillField(loginPage.emailField, 'testerjago@gmail.com');
    element.fillField(loginPage.passwordField, 'Password');
    element.click(loginPage.signinBtn);
    element.wait(3000)

    assert.shouldExist(loginPage.invalidEmailAlert);
});
})