import GifGridItem from "../../components/GifGridItem";
import { shallow } from "enzyme";

describe("Pruebas en <GifGridItem />", () => {
  const title = "Mi titulo";
  const url = "https://localhost/image.jpg";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);
  const figcaption = wrapper.find("figcaption").text().trim();

  test("Debe mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe tener las classes de animate css en la etiqueta <figure>", () => {
    const figure = wrapper.find("figure");
    const className = figure.prop("className");

    expect(className.includes("animate__animated")).toBe(true);
    expect(className.includes("animate__fadeIn")).toBe(true);
  });

  test("Debe de mostrar el <figcaption> de la imagen", () => {
    expect(figcaption).toBe(title);
  });

  test("Debe de mostrar los atributos url y alt correctamente", () => {
    const img = wrapper.find("img");

    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });
});
