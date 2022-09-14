require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  test('testa se é função', () => {
    expect.assertions(1);
    expect(typeof fetchProducts).toBe('function');
  });

  test('Execute a função fetchProducts com o argumento computador e teste se fetch foi chamada',async () => {
    expect.assertions(1);
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalled();
  });
  test('Teste se o retorno da função fetchProducts com o argumento computador é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo',async () => {
    expect.assertions(1);
    const correctUrl = `https://api.mercadolibre.com/sites/MLB/search?q=computador`;
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalledWith(correctUrl)
  });

  test('Teste se o retorno da função fetchProducts com o argumento computador é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo',async () => {
    expect.assertions(1);
    const expected = await fetchProducts('computador')
    expect(expected).toEqual(computadorSearch);

  });
  
  test('Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url',async () => {
    expect.assertions(1);
    const expected = await fetchProducts();
    expect(expected).toEqual(new Error('You must provide an url'));

  });

  test('Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url',async () => {
    expect.assertions(1);
    const expected = await fetchProducts();
    expect(expected).toEqual(new Error('You must provide an url'));

  });
    
});
