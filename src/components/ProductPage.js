import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const { productId } = useParams();
  // const product = products.find((p) => p.id === parseInt(productId));

  // ... display product details
};
export default ProductPage;