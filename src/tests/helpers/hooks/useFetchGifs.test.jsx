import useFetchGifs from "../../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Pruebas en el hook useFetchGifs", () => {
  test("Debe retornar el estado inicial", async () => {
    const category = [];

    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs( category ));
    const { data, loading } = result.current;

    await waitForNextUpdate();


    expect( data ).toEqual([]);
    expect( loading ).toBe(true);
  });

  test('Debe retornar un arreglo de imagenes', async () => {
    const category = "Dragon Ball Super";
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs( category ));
    await waitForNextUpdate();

    const { data } = result.current;

    expect( data.length ).toEqual(4);
  });

  test('El loading debe retornar false', async () => {
    const category = "Dragon Ball Super";
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs( category ));
    await waitForNextUpdate();

    const { loading } = result.current;

    expect(loading).toBe(false);
  });
});