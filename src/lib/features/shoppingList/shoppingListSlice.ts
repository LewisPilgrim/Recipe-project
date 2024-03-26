import { RootState } from "@/lib/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface item {
    name: string
    weight: number
    units: string
}

interface ShoppingListState {
    items: item[]
}

const initialState: ShoppingListState = {
    items: []
}

export const shoppingListSlice = createSlice({
    name: "shoppingList",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<item>) => {
            state.items.push(action.payload)
        }
    }
})

export const { addItem } = shoppingListSlice.actions

export const selectShoppingList = (state: RootState) => state.shoppingList.items

export default shoppingListSlice.reducer