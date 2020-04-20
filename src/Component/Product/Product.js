import React from "react";
import Button from "../Button/Button";
import Image from "../Image/Image";
import { currencyFormatter } from "../../data/index";
const Product = ({ products, handleClick, addToWishListText }) => {
  const productsContent = products.map((product) => {
    return (
      <div className="items bg-white p-1" key={product.id}>
        <Image imageSrc={product.image} imageAlt={product.name} />
        <h4>
          Product Name: {product.brand.length > 0 ? product.brand : ""}{" "}
          {product.name}
        </h4>
        <p>
          <strong>
            ₦{currencyFormatter(product.promo_price)}{" "}
            <del> ₦{currencyFormatter(product.price)} </del>
          </strong>
        </p>
        <p className="text-success">
          You save ₦{currencyFormatter(product.price - product.promo_price)}
        </p>
        <p>Seller: {product.seller.name}</p>
        <p>
          <a href={product.url}>View Product</a>
        </p>
        <div>
          <Button title="Add To Card" isDisable={true} />
          <Button
            value={product.id}
            title="Add To Wishlist"
            isDisable={false}
            handleClick={handleClick}
          />
        </div>
      </div>
    );
  });
  return (
    <div className="product-wrapper my-3">
      <div className="product-items">{productsContent}</div>
    </div>
  );
};

export default Product;
