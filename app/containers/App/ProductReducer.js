export default function (state =
    {
        product: {
            title: '',
            description: '',
            img: '',
            price: '',
            salePrice: '',
        }
    }
, action) {
    //console.log('action', action)
    switch (action.type) {
        case "SAVE_PRODUCT":
                state.product.title = action.payload.title;
                state.product.description = action.payload.description;
                state.product.img = action.payload.img;
                state.product.price = action.payload.price;
                state.product.salePrice = action.payload.salePrice;
            //console.log('saved product: ', state);
            return state;
        default:
            //console.log('undefined action type');
            return null;
    }
    
    return state;
}