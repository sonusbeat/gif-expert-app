import { getGifs } from '../../helpers/getGifs';

describe("Probando el helper getGifs fetch", () => {
  test("Debe de tener una categoría", async () => {
    const category = "Dragon Ball";

    const gifs = await getGifs(category);

    expect(gifs.length).not.toBe(0);
  });

  test("Debe de objetener 10 elementos", async () => {
    const category = "Dragon Ball";

    const gifs = await getGifs(category);

    expect(gifs.length).toBe(10);
  });
});