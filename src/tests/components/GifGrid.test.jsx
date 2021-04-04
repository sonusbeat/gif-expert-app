import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import GifGrid from "../../components/GifGrid";
import useFetchGifs from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Pruebas en <GifGrid />", () => {
  const category = "Dragon Ball Super";

  test("Debe coincidir con el snapshot", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });

    const wrapper = shallow(<GifGrid category={ category } />);

    expect( wrapper ).toMatchSnapshot();
  })

  test("Debe de mostrar items cuando se cargan imagenes con useFetchGifs", () => {
    const gifs = [
      {
        id: "2568",
        url: "https://localhost/images/dragon-ball-super.jpg",
        title: "Dragon Ball Super"
      },
      {
        id: "9834",
        url: "https://localhost/images/ranma.jpg",
        title: "Ranma 1/2"
      }
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });

    const wrapper = shallow(<GifGrid category={ category } />);

    // Evalua si coincide con el snapshot (opcional)
    // expect( wrapper ).toMatchSnapshot();

    // Evalua si no existe el mensaje de cargando
    expect( wrapper.find("p").exists() ).toBe(false);

    // Evalua la cantidad de elementos renderizados
    expect( wrapper.find("GifGridItem").length ).toBe( gifs.length );

  })
});