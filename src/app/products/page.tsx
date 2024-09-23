import React from "react";
import Link from "next/link";

const Products = () => {
  return (
    <div>
      <h3>
        <Link href="/">Home</Link>
      </h3>
      <h3>
        <Link href="products/1">Product 1</Link>
      </h3>
      <h3>
        <Link href="products/2" replace>
          Product 2
        </Link>
      </h3>
      <h3>Product 3</h3>
      {/* burda replace yazilibe product 2 gedib sonra qayidanda birbasa home page qayidir. prefect yazanda ise birinci qayidir productsa ordan da home*/}
    </div>
  );
};

export default Products;
