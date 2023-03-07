/// <reference types="cypress" />

context('funcionalidade Login', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  });
    
  afterEach(() => {
    cy.screenshot()
  });
  
  it('Deve fazer login com sucesso', () => {
      cy.get('#username').type('aluno_ebac@teste.com')
      cy.get('#password').type('teste@teste.com') 
      cy.get('.woocommerce-form > .button').click()

      cy.get('.page-title').should('contain' , 'Minha conta')
      cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá')
    
  })

  it('Deve exibir uma mensagem de erro ao inserir usuário inválido' , () => {
                cy.get('#username').type('aluno_ebac1@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li > :nth-child(1)').should('contain', 'Erro:')

  })

  it('Deve exibir uma mensagem de erro ao inserir senha inválida' , () => {
    
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error > li > a').should('contain','Perdeu')

})

})