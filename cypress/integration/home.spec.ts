context('Home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should find the GiFinder logo', () => {
    cy.get('.nav__logo').contains('GiFinder')
  })
  it('should find the search bar', () => {
    cy.get('.search-bar')
  })
  it('should search something and get the gif list', () => {
    cy.get('#search').click().type('the office')
    cy.get('button[type="submit"]').click()

    cy.get('a img').each(item => {
      cy.wrap(item).should('have.attr', 'alt')
    })
  })
  it('should visit the page with custom search parameter and find the requested images anyway', () => {
    cy.visit('/?search="sponge bob"')

    cy.get('a img').each(item => {
      cy.wrap(item).should('have.attr', 'alt')
    })
  })
})

export {}
