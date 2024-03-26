import { configureStore } from "@reduxjs/toolkit"
import shoppingListReducer from "./features/shoppingList/shoppingListSlice"

export const makeStore = () => {
    return configureStore({
        reducer: {
            shoppingList: shoppingListReducer
        }
    })
}

export type AppStore = ReturnType< typeof makeStore>
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]