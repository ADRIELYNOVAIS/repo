Feature: Criar Conta
  Como um usuário novo
  Quero realizar cadastro
  Para ter credenciais de acessar o sistema

  Scenario: Cadastro com credenciais válidas
    Given o usuário está na página de cadastro
    When o usuário preenche o nome civil ou social
    And preencher o sobrenome
    And preenche o e-mail
    And confirma o e-mail
    And cria uma senha
    And confirma a senha
    And marca que concorda com os termos de uso
    And marca que leu a política de privacidade
    Then o botão "Cadastrar" ficará habilitado
