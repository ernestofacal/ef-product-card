import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';
describe('ProductImage', () => {
  test('1-ProductImage debe de mostrar el componente con el nombre del producto 1', () => {
    const wrapper = renderer.create(<ProductImage img="https://ola.jpg" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  test('2-ProductImage debe de mostrar el componente correctamente con el titulo personalizado 1', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
