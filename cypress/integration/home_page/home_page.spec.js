describe('Psonrie home page loading', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8100')
      });

    it('Home page opened',() => {
        cy.contains('Hola Mundo')
    });

    //test error
    it('Home page opened',() => {
        cy.contains('Ready to create two app?')
    });
})