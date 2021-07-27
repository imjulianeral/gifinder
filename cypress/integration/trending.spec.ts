context('Trending page', () => {
  beforeEach(() => {
    cy.visit('/trending')
  })

  it('should find the title', () => {
    cy.get('h1').contains('Trending')
  })
  it('should find the gif list', () => {
    cy.get('a img').each(item => {
      cy.wrap(item).should('have.attr', 'alt')
    })
  })
})

export {}
