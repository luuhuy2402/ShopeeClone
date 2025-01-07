import { Link } from "react-router-dom";

export default function Product() {
    return (
        <Link to="/">
            <div className="bg-white shadow rounded-sm hover:translate-y-[-0.04rem] hover:shadow-md duration-100 transition-transform overflow-hidden">
                <div className="w-full pt-[100%] relative">
                    <img
                        src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lob6z4s8xrwrf5_tn.webp"
                        alt=""
                        className="absolute top-0 left-0 bg-white w-full h-full object-cover"
                    />
                </div>
                <div className=" p-2 overflow-hidden">
                    <div className="min-h-[2rem] line-clamp-2 text-xs">
                        Quần joger gân tăm unisex quần bom ống rộng chất liệu nỉ
                        tăm dày dặn chun gấu mặc tôn dáng
                    </div>
                    <div className="flex items-center mt-3 text-orange">
                        <div className="text-orange truncate ">
                            <span className="text-xs">₫</span>
                            <span>39.000</span>
                        </div>
                        <div className=" max-w-[50%] truncate bg-[#feeeea] text-[0.625rem] py-[0.5] px-1 ml-2 rounded-sm">
                            <span className="text-xs">-61%</span>
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
                        Đã bán 1,9k
                    </div>
                </div>
            </div>
        </Link>
    );
}
