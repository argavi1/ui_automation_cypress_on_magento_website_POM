describe('Login Test', () => {
    it('Successfull login', () => {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/login');
  
      cy.get('#email').type('testerjago@gmail.com');
      cy.get('#pass').type('Password123');
  
      cy.get('#send2').click();
  
      cy.contains('Welcome, tester jago!').should('be.visible');
    });
  });
  