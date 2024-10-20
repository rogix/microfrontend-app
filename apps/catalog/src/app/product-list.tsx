import { Card } from 'semantic-ui-react';
import { PRODUCT_LIST_MOCKS } from '@ebuy/mocks';
import ProductCard from './product-card';

export function ProductList() {
  return (
    <Card.Group>
      {PRODUCT_LIST_MOCKS.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Card.Group>
  );
}
export default ProductList;
