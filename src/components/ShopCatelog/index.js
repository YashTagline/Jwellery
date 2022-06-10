import React from "react";
import CommanBanner from "../comman/CommanBanner";
import ShopCatelogBannerBg from "../../assets/images/elements.jpeg"
import ShopCatelogContent from "./ShopCatelogContent";
const ShopCatelog = () => {
  return (
    <div>
      <CommanBanner
        bgImage={ShopCatelogBannerBg}
        smallTtile="Animal World"
        mainTitle="PRODUCTS"
        mainSubTitle="LIST"
      ></CommanBanner>
      <ShopCatelogContent></ShopCatelogContent>
    </div>
  );
};

export default ShopCatelog;
