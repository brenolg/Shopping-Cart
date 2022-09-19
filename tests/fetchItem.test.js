require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  test('testa se é função', () => {
    expect.assertions(1);
    expect(typeof fetchItem).toBe('function');
  });

  test('Execute a função fetchItem com o argumento MLB1615760527 e teste se fetch foi chamada',async () => {
    expect.assertions(1);
    await fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalled();
  });
  test('Teste se, ao chamar a função fetchItem com o argumento do item "MLB1615760527", a função fetch utiliza o endpoint',async () => {
    expect.assertions(1);
    const correctUrl = `https://api.mercadolibre.com/items/MLB1615760527`;
    await fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalledWith(correctUrl)
  });

  test('Teste se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item que já está importado no arquivo.',async () => {
    expect.assertions(1);
    const expected = await fetchItem('MLB1615760527')
    expect(expected).toEqual(item);

  });
  
  test('Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url',async () => {
    expect.assertions(1);
    const expected = await fetchItem();
    expect(expected).toEqual(new Error('You must provide an url'));

  });

  test('Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url',async () => {
    expect.assertions(1);
    const expected = await fetchItem();
    expect(expected).toEqual(new Error('You must provide an url'));

  });
});
