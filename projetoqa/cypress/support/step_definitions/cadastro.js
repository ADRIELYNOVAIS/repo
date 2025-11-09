import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { gerarUsuario, senhaSegura } from '../utils/fakeData';

const usuario = gerarUsuario();
const senha = senhaSegura();

Given('o usuário está na página de cadastro', () => {
  cy.visit('/cadastro/');
});

When('o usuário preenche o nome civil ou social', () => {
  cy.get('#first_name').type(usuario.nome);
});

When('preencher o sobrenome', () => {
  cy.get('#last_name').type(usuario.sobrenome);
});

When('preenche o e-mail', () => {
  cy.get('#email').type(usuario.email);
});

When('confirma o e-mail', () => {
  cy.get('#email2').type(usuario.email);
});

When('cria uma senha', () => {
  cy.get('#password1').type(senha);
});

When('confirma a senha', () => {
  cy.get('#password2').type(senha);
});

When('marca que concorda com os termos de uso', () => {
  cy.get('input[name="accepted_privacy_document"]').check({ force: true });
});

When('marca que leu a política de privacidade', () => {
  cy.get('input[name="is_18_years_old_or_more"]').check({ force: true });
});

Then('o botão {string} ficará habilitado', (textoBotao) => {
  cy.contains('button', textoBotao).should('be.enabled');
});
