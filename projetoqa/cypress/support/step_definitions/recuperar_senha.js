import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que o usuário está na página de login", () => {
  cy.visit('/');
});

When("ele clicar em {string}", (texto) => {
  cy.contains("a", texto).click();
});

When("digitar o e-mail {string}", (email) => {
  cy.get("#email").type(email);
});

Then("o botão {string} deve estar habilitado", (textoBotao) => {
  cy.contains("button", textoBotao).should("be.enabled");
});
