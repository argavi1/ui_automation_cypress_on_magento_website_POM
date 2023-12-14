import * as element from '@helpers/elements';
import * as route from '@helpers/route';
import {ROUTES} from '@tests/const/routes';
import * as loginPage from '@tests/pages/login.page';
import * as homePage from '@tests/pages/home.page'
import * as profilePage from '@tests/pages/profile.page'
import * as login from '@tests/data/login.data'
import * as assert from '@helpers/asserts';

describe('Search product', function(){
    beforeEach(() => {
        route.visit(ROUTES.login);
    });

it('Search product', () => {
    // login successfully
    element.fillField(loginPage.emailField, 'testerjago@gmail.com');
    element.fillField(loginPage.passwordField, 'Password123');
    element.click(loginPage.signinBtn);

    // go to home page, input keywords & search product
    element.click(profilePage.lumaIcon)
    element.fillFieldAndEnter(homePage.searchBar, 'Tee');

    assert.containText(`Search results for: 'Tee'`);

    });
})