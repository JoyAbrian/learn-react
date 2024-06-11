import { configureStore, createAction, createReducer } from "@reduxjs/toolkit"

const addToCart = createAction('ADD_TO_CART');

const cartReducer = createReducer([], (builder) => {
    builder.addCase(addToCart, (state, action) => {
        state.push(action.payload);
    });
});

const login = createAction('CREATE_SESSION');

const loginReducer = createReducer({status: false}, (builder) => {
    builder.addCase(login, (state, action) => {
        state.status = true;
    });
});

const store = configureStore({
    reducer: {
        login: loginReducer,
        cart: cartReducer,
    }
});
console.log('oncreate: ' + store.getState());

store.subscribe(() => {
    console.log('State updated:', store.getState());
});

store.dispatch(addToCart({ id: 1, qty: 1 }));
store.dispatch(addToCart({ id: 2, qty: 1 }));
store.dispatch(login());