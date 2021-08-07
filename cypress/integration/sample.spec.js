/// <reference types="cypress" />

describe('User melakukan proses login pada SIAKAD Polinema', () => {
  it('User memasukkan username berupa NIM dan password yang terdaftar', () => {
    cy.visit('http://siakad.polinema.ac.id/')
    cy.get('#username').type('1831710142')
    cy.get('#password').type('samsungj32016')
    cy.get('.btn-success').click()
  })

  it('User memasukkan username berupa NIM dan password yang tidak terdaftar', () => {
    cy.visit('http://siakad.polinema.ac.id/')
    cy.get('#username').type('cahya')
    cy.get('#password').type('cahya')
    cy.get('.btn-success').click()
    cy.contains('Username / Password Salah')
  })

  it('User memasukkan nim dan tidak mengisi password', () => {
    cy.visit('http://siakad.polinema.ac.id/')
    cy.get('#username').type('1831710142')
    cy.get('.btn-success').click()
  })

  it('User memasukkan password dan tidak mengisi nim', () => {
    cy.visit('http://siakad.polinema.ac.id/')
    cy.get('#password').type('1831710142')
    cy.get('.btn-success').click()
  })


  it('User mengklik tombol lupa password', () => {
    cy.visit('http://siakad.polinema.ac.id/')
    
    cy.contains('Lupa Password?').click()
    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', 'https://helpakademik.polinema.ac.id/ajukan-pertanyaan')

  })

  // id lupa password
  // forget-password
  
  // it('Gets, types and asserts', () => {
  //   cy.visit('https://example.cypress.io')

  //   cy.contains('type').click()

  //   // Should be on a new URL which includes '/commands/actions'
  //   cy.url().should('include', '/commands/actions')

  //   // Get an input, type into it and verify that the value has been updated
  //   cy.get('.action-email')
  //     .type('fake@email.com')
  //     .should('have.value', 'fake@email.com')
  // })






  

})