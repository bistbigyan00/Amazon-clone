// add all the total price of items
export const getBasketTotal = (basket) => basket?.reduce((amount, item)=> item.price+amount, 0);

// initialise basket for the demo purpose
export const initialState = {
    basket:[],
    user:null,
};

function reducer(state,action){

    switch(action.type){
        //listens the dispatch from product add to basket and add to the basket
        case "SET_USER":
            return {
                ...state,
                user:action.user
            }

        case 'ADD_TO_BASKET':
            //logic for adding item to basket
            return { 
                ...state,  
                basket:[...state.basket, action.item] 
            };
        
        case 'REMOVE_FROM_BASKET':
            //LOGIC FOR REMOVING ITEM FOR BASKET
            // setting new basket
            const newBasket = [...state.basket];

            // finding index of clicked one
            const index = state.basket.findIndex((basketItem) =>
            basketItem.id===action.id);

            if(index >=0){
                //item exists in basket, remove it
                newBasket.splice(index,1);

            }else{
                console.warn("Can't remove product");
            }

            return { 
                ...state, 
                basket: newBasket,
            };
        
        default:
            return state;
    }
}

export default reducer;