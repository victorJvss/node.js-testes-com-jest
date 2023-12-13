/* eslint-disable import/no-extraneous-dependencies */
import { describe, expect, it } from '@jest/globals';
import Carrinho from '../carrinho';
import Item from '../item';

describe('teste carrinhos', () => {
  it('Teste para saber se o carrinho começa vazio', () => {
    const carrinho = new Carrinho();

    expect(carrinho.subtotal).toBeNull();
  });

  it('Teste para saber está adicionando corretamente no carrinho.', () => {
    const item = new Item('Batata', 2, 10);
    const item2 = new Item('Manga', 4, 0.5);

    const carrinho = new Carrinho();
    carrinho.adiciona(item);
    carrinho.adiciona(item2);

    expect(typeof carrinho).toBe('object');
    expect(carrinho.itens[0]).toBe(item);
    expect(carrinho.itens[1]).toBe(item2);

    expect(carrinho.itens).toContain(item);
    expect(carrinho.itens).toContain(item2);
  });

  it('Deve ter a propriedade "total" na inicialização.', () => {
    const carrinho = new Carrinho();

    expect(carrinho).toHaveProperty('total');
  });

  it('Deve lançar um erro se a compra for finalizada sem itens no carrinho', () => {
    function englobaErrosCarinhos() {
      const carrinho = new Carrinho();
      carrinho.finalizaCompra();
    }

    expect(englobaErrosCarinhos).toThrowError('Carrinho de compras vazio');
  });

  it('Deve testar o frete', () => {
    const carrinho = new Carrinho();
    carrinho.adicionaFrete(10);

    expect(carrinho.frete).toBe(10);
  });

  it('A compre deve ser finalizada com sucesso', () => {
    const item = new Item('Banana', 2, 5);
    const item2 = new Item('Mel', 1, 5);

    const carrinho = new Carrinho();
    carrinho.adiciona(item);
    carrinho.adiciona(item2);
    carrinho.adicionaFrete(10);

    expect(carrinho.finalizaCompra()).toStrictEqual({
      subtotal: 15,
      frete: 10,
      total: 25,
    });
  });
});
