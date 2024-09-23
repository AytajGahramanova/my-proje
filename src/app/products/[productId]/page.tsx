import React from "react";

const ProductDetails = ({ params }: { params: { productId: string } }) => {
  return <div>Product details {params.productId}</div>;
};

export default ProductDetails;
