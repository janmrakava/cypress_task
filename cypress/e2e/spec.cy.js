describe('visit-web-page', () => {
  it('passes', () => {
    cy.visit('https://en.wikipedia.org/wiki/Main_Page')
    cy.get('.vector-search-box-form').type('Schwarzenegger').submit()   
  })
  describe('verify-title', () => {
    it('verify title', () => {
      cy.get('title').contains('Arnold Schwarzenegger')     
    })
  })
  describe('verify-chapter', () => {
    it('verify chapter', () => {      
      cy.get('.toc').contains('Personal life')
    })
  })
  describe('verify-dowload-pdf', () => {
    it('verify pdf', () => {
      cy.get('#coll-download-as-rl').contains('Download as PDF')      
    })
  })

  describe('verify-spanish', () => {
    it('verify spanish', () => {
      cy.visit('https://es.wikipedia.org/wiki/Arnold_Schwarzenegger')
      cy.get('title').contains('Arnold Schwarzenegger')
      
    })
  })
  describe('verify-german', () => {
    it('verify german', () => {
      cy.visit('https://de.wikipedia.org/wiki/Arnold_Schwarzenegger')
      cy.get('title').contains('Arnold Schwarzenegger')
    })
  })
  describe('verify-english', () => {
    it('verify english', () => {
      cy.visit('https://en.wikipedia.org/wiki/Arnold_Schwarzenegger')
      cy.get('title').contains('Arnold Schwarzenegger')
      
    })
  })
}) 

