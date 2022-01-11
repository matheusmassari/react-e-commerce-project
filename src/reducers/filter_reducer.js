import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((element) => element.price);
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: {
        ...state.filters,
        price: maxPrice,
        max_price: maxPrice,
      },
    };
  }
  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;
    let tempProducts = [...filtered_products];
    if (sort === "price-lowest") {
      tempProducts = tempProducts.sort(
        (current, next) => current.price - next.price
      );
    }
    if (sort === "price-highest") {
      tempProducts = tempProducts.sort(
        (current, next) => next.price - current.price
      );
    }
    if (sort === "name-a") {
      tempProducts = tempProducts.sort((current, next) => {
        return current.name.localeCompare(next.name);
      });
    }
    if (sort === "name-z") {
      tempProducts = tempProducts.sort((current, next) => {
        return next.name.localeCompare(current.name);
      });
    }
    return { ...state, filtered_products: tempProducts };
  }
  if (action.type === UPDATE_FILTERS) {
    const {name, value} = action.payload;
    return {...state, filters:{...state.filters, [name]:value }}
  }
  if (action.type === FILTER_PRODUCTS) {
    
    return {...state}
  }
  return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
