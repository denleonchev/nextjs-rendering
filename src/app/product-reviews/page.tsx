import { Product } from "@/components/product";
import { Reviews } from "@/components/reviews";
import { Suspense } from "react";

export default function ProductReviews() {
  return (
    <>
      <h1>Product Reviews</h1>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Product />
        <Reviews />
      </Suspense>
    </>
  );
}
