import React from 'react';
import "@testing-library/jest-dom";

import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
  const setCategories = jest.fn();
  let wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
  });

  test("Debe coincidir con el snapshot", () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test("Debe de cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Dragon Ball";

    input.simulate("change", { target: { value } });

    expect( wrapper.find("p").text().trim() ).toBe( value );
  });

  test("No debe de postear la información onSubmit", () => {
    const form = wrapper.find("form");
    form.simulate("submit", { preventDefault(){} });

    expect( setCategories ).not.toHaveBeenCalled();
  });

  test("Debe de llamar el setCategories y limpiar la caja de texto", () => {
    const value = "Dragon Ball Super";

    // 1. simular el input change
    wrapper.find("input").simulate("change", { target: { value } });

    // 2. simular el submit
    wrapper.find("form").simulate("submit", { preventDefault(){} });

    // 3. setCategories se debe haber llamado
    // expect(setCategories).toHaveBeenCalled() ( Opcional );
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith( expect.any( Function ) );

    // 4. el valor del input debe estar ""
    expect( wrapper.find("input").prop("value") ).toBe("");
  });
});