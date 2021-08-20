describe('home page loading', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200')
      });

    it('Home page opened',() => {
        cy.contains('Hola Mundo')
    });

    //test error
    it('Home page opened',() => {
        cy.contains('Ready to create one app?')
    });
})