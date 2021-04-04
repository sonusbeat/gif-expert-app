import GifExpertApp from '../GifExpertApp';
import { shallow } from 'enzyme';
import "@testing-library/jest-dom";

describe("Pruebas en <GifExpertApp />", () => {
   test("Debe coincidir con el snapshot", () => {
    const wrapper = shallow( <GifExpertApp /> );
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe tener un titulo h1 con el nombre de la app", () => {
    const wrapper = shallow( <GifExpertApp /> );
    const text = "Gift Expert App";
    const h1 = wrapper.find("h1");

    expect(h1.text().trim()).toBe(text);
  });

  test("Debe de mostrar una lista de categorías", () => {
    const categories = ["Dragon Ball Super", "Saint Seiya"];

    const wrapper = shallow( <GifExpertApp defaultCategories={ categories } /> );

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find("GifGrid").length ).toBe( categories.length );
  });
});