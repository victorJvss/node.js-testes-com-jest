/* eslint-disable import/no-extraneous-dependencies */
import { describe, expect, it } from '@jest/globals';
import Item from '../item';

describe('Testes de parametros', () => {
  it('tres parametros: nome, valor e quantidade!', () => {
    const item = new Item('Batata', 0.3, 10);

    expect(item.nome).toBe('Batata');
    expect(item.valor).toBe(0.3);
    expect(item.quantidade).toBe(10);
  });

  it('Deve ser o preço calculado de acordo com a quantidade.', () => {
    const item = new Item('Beterraba', 0.1, 3);

    expect(item.pegaValorTotalItem()).toBeCloseTo(0.3);
  });
});
