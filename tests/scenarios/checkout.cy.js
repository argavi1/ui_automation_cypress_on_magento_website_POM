import * as element from '@helpers/elements';
import * as route from '@helpers/route';
import {ROUTES} from '@tests/const/routes';
import * as loginPage from '@tests/pages/login.page';
import * as homePage from '@tests/pages/home.page'
import * as profilePage from '@tests/pages/profile.page'
import * as productDetailPage from '@tests/pages/product.detail.page'
import * as shippingPage from '@tests/pages/shipping.page'
import * as reviewPaymentPage from '@tests/pages/review.payment.page'
import * as login from '@tests/data/login.data'
import * as assert from '@helpers/asserts';

describe('Checkout Process', function(){
    beforeEach(() => {
        route.visit(ROUTES.login);
    });

it('Successfull checkout', () => {
    // login as customer
    element.fillField(loginPage.emailField, 'testerjago@gmail.com');
    element.fillField(loginPage.passwordField, 'Password123');
    element.click(loginPage.signinBtn);

    // go to home page & click product indeks 0
    element.click(profilePage.lumaIcon)
    element.click(homePage.product_1)

    // select size, color & click add to chart button
    element.click(productDetailPage.sizeBox)
    element.wait(3000)
    element.click(productDetailPage.colorBox)
    element.wait(3000)
    element.click(productDetailPage.addtoCartBtn)
    element.wait(3000)

    // click cart icon & add
    element.click(productDetailPage.cartIcon)
    element.wait(3000)
    element.click(productDetailPage.proceedtoCheckoutBtn)

    // wait on shipping page, click shipping method & click next button
    // on shippingFixMethodRbtn, it is CSS selector syntax from cypress inspector
    element.wait(13000)
    element.forceClick(shippingPage.shippingFixMethodRbtn)
    element.forceClick(shippingPage.nextBtn)
    element.wait(8000)

    // apply discount on toggle, input discount code & click apply discount button
    element.forceClick(reviewPaymentPage.applyDiscountToggle)
    element.wait(2000)
    element.fillField(reviewPaymentPage.discountCodeField, 'discountcodetesting');
    element.forceClick(reviewPaymentPage.applyDiscountBtn)
    element.wait(1000)

    // verify the alert invalid discount code displayed
    assert.shouldExist(reviewPaymentPage.alertInvalidDiscountCode)

    // click place order button
    element.forceClick(reviewPaymentPage.placeOrderBtn)

    // verify successfull checkout
    assert.containText('Thank you for your purchase!')

    });
})