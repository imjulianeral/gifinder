context('Trending page', () => {
  beforeEach(() => {
    cy.visit('/gif/YNA87r1vvpGhusbqPO')
  })

  it('should find the user data', () => {
    cy.get('h2').should('exist')
    cy.get('img').should('exist')
  })
  it('should find the gif data', () => {
    cy.get('h1').should('exist')
    cy.get('video').should('exist')
    cy.get('[data-cy="dimensions"]').should('exist')
    cy.get('[data-cy="frames"]').should('exist')
  })
  it('clicks the share button', () => {
    cy.get('[data-cy="share-btn"]').should('exist').click()
    cy.contains('Copied to clipboard!')
  })
})

export {}
