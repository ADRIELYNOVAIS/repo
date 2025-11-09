import { faker } from '@faker-js/faker';

export const gerarUsuario = () => {
  const nome = faker.person.firstName();
  const sobrenome = faker.person.lastName();
  const email = faker.internet.email(nome, sobrenome);
  const senha = faker.internet.password({ length: 10, memorable: true });
  const telefone = faker.phone.number('## 9####-####');

  return {
    nome,
    sobrenome,
    email,
    senha,
    telefone
  };
};

export const senhaSegura = () => {
  senha = "123Teste@"
  return senha;
};
