import { Paginate } from "@/components/Paginate";
import { Portal } from "@/components/Portal";
import { ProductCard, ProductCardLoading } from "@/components/ProductCard";
import { PROFILE_TITLE_ID } from "@/config";
import { useQuery } from "@/hooks/useQuery";
import { productService } from "@/services/product";
import React from "react";

export const Wishlist = () => {

  const {loading, data} = useQuery({
    queryFn: () => productService.getWishlist(),

  })
  return (
    <>
      <Portal selector={PROFILE_TITLE_ID}>My Wishlist</Portal>
      <div>
        {/* Products */}
        <div className="row">
            {loading
                ? Array.from(Array(15)).map((_, i) => (
                    <ProductCardLoading key={i} />
                  ))
                : data.data.map((e) => <ProductCard key={e.id} {...e} />)}
          </div>
        {/* Pagination */}
        <Paginate totalPage={data?.paginate?.totalPage}></Paginate>
      </div>
    </>
  );
};
