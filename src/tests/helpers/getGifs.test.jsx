import getGifs from '../../Helpers/getGifs';

describe('Pruebas en el helper "getGifs"', () => {
  test("Al no enviar una categoría deberia recibir un arreglo vacio", async () => {
    const gifs = await getGifs('');

    expect(gifs.length).toBe( 0 );
  });

  test("Debe traer 10 elementos", async () => {
    const gifs = await getGifs("Dragon Ball");

    expect(gifs.length).toBe(4);
  });
});