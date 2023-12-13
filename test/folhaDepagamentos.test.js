import { salarioTotal, descontoSalario } from '../index';

describe('Teste da folha de pagamento', () => {
  it('Deve retorna o salário total do colaborador!!', () => {
    const esperado = 2500;
    const retornado = salarioTotal(2000, 500);

    expect(esperado).toBe(retornado);
  });

  it('Deve retornar o desconto no salário!', () => {
    const esperado = 2300;
    const retornado = descontoSalario(2500, 200);

    expect(esperado).toBe(retornado);
  });
});
