describe('Check if Home page renders correct data', () => {
  beforeEach(() => {
    cy.login('tester@cypress.com', '@DNCTester123#')
    cy.visit('http://localhost:5173/home')
  })

  it('should display total sales', () => {
    cy.get('#total-sales').should('be.visible')
  })

  it('should display month goals', () => {
    cy.get('#month-goal').should('be.visible')
  })

  it('should display total leads', () => {
    cy.get('#total-leads').should('be.visible')
  })

  it('should display month sales chart', () => {
    cy.get('#month-sales-chart').should('be.visible')
  })

  it('should display sales stars', () => {
    cy.get('#sales-stars').should('be.visible')
  })

  it('should display news area', () => {
    cy.get('#news').should('be.visible')
  })

  it('should display year sales chart', () => {
    cy.get('#year-sales-chart').should('be.visible')
  })
})
