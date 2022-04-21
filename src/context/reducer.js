// whenever we are doing something we can do it by using actionType we can update the state  value by using the action type, so SET_USER is the actionType and the value is SET_USER, we r creating data layer, the top of our entire component, so that will add a layer which will be accessible for our child component so that we can access it whenever we want
export const actionType = {
  SET_USER : 'SET_USER',
  SET_FOOD_ITEMS : ' SET_FOOD_ITEMS ',
  SET_CART_SHOW : 'SET_CART_SHOW',
  SET_CARTITEMS : 'SET_CARTITEMS',
}

 // state parameter, action function
const reducer = (state, action) => {
  // console.log(action);
  
   // through the type i am going to change the case
  switch (action.type) {
    // if the type is equal to setuser then use this case
   case actionType.SET_USER:
    //  and if that is the case then we r going to return the state
      return {
        // so whatever the state keep all the state as it is
        ...state,
        // so we are spread using spread operator we r keeping state value n everything as it is nd we r updating only our user information through action to our state
        user: action.user,
      };

      case actionType.SET_FOOD_ITEMS:
        //  and if that is the case then we r going to return the state
          return {
            // so whatever the state keep all the state as it is
            ...state,
            // so we are spread using spread operator we r keeping state value n everything as it is nd we r updating only our user information through action to our state
            foodItems: action.foodItems,
          };


          case actionType.SET_CART_SHOW:
            //  and if that is the case then we r going to return the state
              return {
                // so whatever the state keep all the state as it is
                ...state,
                // so we are spread using spread operator we r keeping state value n everything as it is nd we r updating only our user information through action to our state
               cartShow: action.cartShow,
              };

              case actionType.SET_CARTITEMS:
                //  and if that is the case then we r going to return the state
                  return {
                    // so whatever the state keep all the state as it is
                    ...state,
                    // so we are spread using spread operator we r keeping state value n everything as it is nd we r updating only our user information through action to our state
                   cartItems: action.cartItems,
                  };
    
      default: 
      return state;
  }
};

export default reducer;