export function SaveProduct (product) {
    return {
        type: "SAVE_PRODUCT",
        payload: product,
    }
}