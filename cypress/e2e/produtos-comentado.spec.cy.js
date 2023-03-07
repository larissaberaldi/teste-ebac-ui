/// <reference types="cypress" />

describe('Página de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
            //poderia ter escrito cy.get('[class="product-block grid"]').first().click() pois estaria escolhendo a classe que encontrei no código através do inspecionar
            //eq(n) para escolher qual item (primeiro, segundo..)
            //first se for clicado no primeiro item da lista
            //last para o último, para o 2/3/4.. eq(2)
            .contains('Ariel Roll Sleeve Sweatshirt')
            //para selecionar um produto específico eu escolho pelo nome dele desde que esse nome seja "clicável"
            .click() //coloco first pois será clicado no primeiro item da lista.
        //last para o último, para o 2/3/4.. eq(2)
    });

    it.only('Deve adicionar um produto ao carrinho', () => { //only pq quero rodar só esse cenário
        var quantidade = 9 //uso a var para não precisar ficar mudando o valor em vários lugares; posso usar let ao invés de var

        cy.get('.product-block').contains('Abominable Hoodie').click() //o contains é para escolher um item específico com certo nome
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quantidade).click() //o clear é pq eu preciso limpar para depois escrever (type) pois preciso selecionar o número de produtos que quero
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade) //para validar se foi feito o que eu queria deve contar 2 no carrinho
        cy.get('.woocommerce-message').should('contain' , quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.') //outra maneira de validar o teste
   
    });

})