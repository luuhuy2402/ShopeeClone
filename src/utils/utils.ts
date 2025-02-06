import axios, { AxiosError } from "axios";
import HttpStatusCode from "../constants/httpStatusCode.enum";

export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
    return axios.isAxiosError(error);
}

export function isAxiosUnprocessableEntityError<FormError>(
    error: unknown
): error is AxiosError<FormError> {
    return (
        isAxiosError(error) &&
        error.response?.status === HttpStatusCode.UnprocessableEntity
    );
}

export function formatCurrency(currency: number) {
    return new Intl.NumberFormat("de-DE").format(currency);
}

export function formatNumberToSocialStyle(value: number) {
    return new Intl.NumberFormat("en", {
        notation: "compact",
        maximumFractionDigits: 1,
    })
        .format(value)
        .replace(".", ",")
        .toLowerCase();
}

// export function calculateDiscountPercentage(originalPrice: number, discountedPrice: number): string {
//     console.log("Giá gốc:", originalPrice);
//     console.log("Giá sau giảm:", discountedPrice);

//     if (originalPrice <= 0 || discountedPrice < 0 || discountedPrice > originalPrice) {
//         throw new Error("Giá trị không hợp lệ");
//     }

//     const discountPercent = ((originalPrice - discountedPrice) / originalPrice) * 100;
//     return discountPercent.toFixed(2) + "%";
// }
// // Kiểm tra với giá trị cụ thể
// console.log(calculateDiscountPercentage(3990000, 3190000)); // Output: "20.05%"
