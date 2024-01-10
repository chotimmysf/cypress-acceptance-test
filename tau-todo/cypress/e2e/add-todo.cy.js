describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://todomvc.com/examples/react/#/');

    cy.get("[data-testid=todo-input").type("first todo item");

    cy.get("[data-testid=todo-input").should('have.value)', "first todo item")
  })
})