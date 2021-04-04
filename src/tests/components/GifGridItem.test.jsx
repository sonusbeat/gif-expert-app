import { shallow } from "enzyme";
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {
  const title = "Dragon Ball";
  const url   = "https://localhost.com/dragon-ball.jpg";
  const wrapper = shallow( <GifGridItem title={ title } url={ url } /> );
  const div = wrapper.find('div');
  const className = div.prop('className');

  test('Deberia coincidir con el Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("El párrafo debe coincidir con el valor de la constante title", () => {
    const paragraph = wrapper.find('p');

    expect(paragraph.text().trim()).toBe(title);
  });

  test("El atributo url de la imagen debe coincidir con la propiedad url", () => {
    const image = wrapper.find('img');

    expect(image.props().src).toBe(url);
  });

  test("El atributo alt de la imagen debe coincidir con la propiedad title", () => {
    const image = wrapper.find('img');

    expect(image.props().alt).toBe(title);
  });

  test('El div que envuelve la imagen debe contener la clase: "card"', () => {
    expect(className.includes('card')).toBe(true);
  });

  test('El div que envuelve la imagen debe contener las clases: "animate__animated" y "animate__fadeIn"', () => {
    expect(className.includes('animate__animated')).toBe(true);
    expect(className.includes('animate__fadeIn')).toBe(true);
  });
});