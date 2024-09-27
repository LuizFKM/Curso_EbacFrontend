/// <reference types="cypress" />

describe('Testes para funcionalidades da agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve preencher o formulário e adicionar o contato', () => {
        cy.get('[type="text"]').type('Luiz Francisco')
        cy.get('[type="email"]').type('luiz@teste.com')
        cy.get('[type="tel"]').type('(66) 98765467')
        cy.get('.adicionar').click()
        cy.wait(1000)
    })

    it('Deve editar e salvar o contato', () => {
        cy.get('.edit').first().click()
        cy.get('[type="email"]').clear()
        cy.get('[type="email"]').type('luiz@editado.com')
        cy.get('.alterar').click()
        cy.wait(1000)
    })

    it('Deve remover o contato', () => {
        cy.get('.delete').click({ multiple: true })
    })
})
