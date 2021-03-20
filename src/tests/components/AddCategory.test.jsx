import AddCategory from '../../components/AddCategory';
import { shallow } from 'enzyme';

describe("Pruebas en el componente <AddCategory />", () => {
  const setCategories = () => {};

  test("Debe mostrar el componente correctamente", () => {
    const wrapper = shallow(<AddCategory setCategories={setCategories} />);

    expect(wrapper).toMatchSnapshot();
  });
});
