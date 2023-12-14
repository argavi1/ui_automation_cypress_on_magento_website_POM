describe('Testing if the login form is displayed', () => {
    it('Verify that the text "Hello, Tester!" is visible', () => {
      cy.visit('https://barru.pythonanywhere.com/');
      cy.get('body').should('contain', 'Hello, Tester!');
   });
});