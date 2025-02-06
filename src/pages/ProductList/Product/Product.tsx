import { Link } from "react-router-dom";
import { Product as ProductType } from "../../../types/product.type";
import {
    formatCurrency,
    formatNumberToSocialStyle,
} from "../../../utils/utils";

interface Props {
    product: ProductType;
}
export default function Product({ product }: Props) {
    return (
        <Link to="/">
            <div className="bg-white shadow rounded-sm hover:translate-y-[-0.04rem] hover:shadow-md duration-100 transition-transform overflow-hidden">
                <div className="w-full pt-[100%] relative">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="absolute top-0 left-0 bg-white w-full h-full object-cover"
                    />
                </div>
                <div className=" p-2 overflow-hidden">
                    <div className="min-h-[2rem] line-clamp-2 text-xs">
                        {product.name}
                    </div>
                    <div className="flex items-center mt-3 text-orange">
                        <div className="text-orange ">
                            <span className="text-xs">₫</span>
                            {/* <span>{product.price}</span> */}
                            <span>{formatCurrency(product.price)}</span>
                        </div>
                        <div className=" max-w-[50%] truncate bg-[#feeeea] text-[0.625rem] py-[0.5] px-1 ml-2 rounded-sm text-gray-500 line-through">
                            <span className="text-xs">
                                {/* {product.price_before_discount} */}₫
                                {formatCurrency(product.price_before_discount)}
                            </span>
                        </div>
                    </div>
                </div>
                <div className=" my-3 px-2 flex items-center justify-start">
                    <div className="flex items-center">
                        <img
                            src="https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-standard-v2/0.1.42/pc/d7099d3fd1dfdaf705ab.svg"
                            width="10"
                            height="10"
                            alt="rating-star-full"
                        />
                        <div className="ml-1 text-xs">4.6</div>
                    </div>
                    <div className="ml-1 h-3 border-l border-gray-200"></div>
                    <div className="truncate text-xs min-h-4 ml-1">
                        {/* Đã bán {product.sold} */}
                        Đã bán {formatNumberToSocialStyle(product.sold)}
                    </div>
                </div>
            </div>
        </Link>
    );
}
