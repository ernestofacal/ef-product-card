import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';
describe('ProductTitle', () => {
  test('1-ProductTitle debe de mostrar el componente con el nombre del producto 1', () => {
    const wrapper = renderer.create(
      <ProductTitle title="Custom Product" className="custom-class" />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  test('2-ProductTitle debe de mostrar el componente correctamente con el titulo personalizado 1', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
