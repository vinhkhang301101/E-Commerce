import { Paginate } from "@/components/Paginate";
import { Portal } from "@/components/Portal";
import { ProductCard, ProductCardLoading } from "@/components/ProductCard";
import { PROFILE_TITLE_ID } from "@/config";
import { useQuery } from "@/hooks/useQuery";
import { productService } from "@/services/product";
import queryString from "query-string";
import React from "react";

export const Wishlist = () => {
  // const [search] = useSearch({
  //   page: 1
  // })

  // const qs = queryString.stringify({
  //   page: search.page
  // })

  const {loading, data, refetch: fetchWishlist, clearPreviousData} = useQuery({
    // queryKey: [qs],
    queryFn: () => productService.getWishlist(
      // `?${qs}`
      ),
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
                : data.data.map((e) => <ProductCard 
                onRemoveWishlistSuccess={() => {
                  clearPreviousData()
                  fetchWishlist()
                }}
                 showRemove key={e.id} {...e} />)}
          </div>
        {/* Pagination */}
        <Paginate totalPage={data?.paginate?.totalPage}></Paginate>
      </div>
    </>
  );
};
