Feature: Recuperar senha

  Scenario: Usuário solicita recuperação de senha
    Given que o usuário está na página de login
    When ele clicar em "Esqueci minha senha"
    And digitar o e-mail "email@gmail.com"
    Then o botão "Enviar link" deve estar habilitado
