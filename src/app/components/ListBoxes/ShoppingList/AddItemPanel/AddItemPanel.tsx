import React, { useEffect, useState } from "react"
import styles from "./AddItemPanel.module.css"
import { useAppDispatch } from "@/lib/hooks"
import { addItem } from "@/lib/features/shoppingList/shoppingListSlice"

type ingredient = {
  name: string
  amount: string
}

const AddItemPanel = () => {
  const [itemName, setItemName] = useState("Name")
  const [itemAmount, setItemAmount] = useState(0)
  const [itemAmountUnits, setItemAmountUnits] = useState("g")
  const [ingredientList, setIngredientList] = useState<ingredient[] | []>([])
  const dispatch = useAppDispatch()

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.id === "item-name") {
      setItemName(e.target.value)
    } else if (e.target.id === "item-amount") {
      setItemAmount(Number(e.target.value))
    }
  }

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setItemAmountUnits(e.target.value)
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(addItem({ name: itemName, weight: itemAmount, units: itemAmountUnits }))
  }

  useEffect(() => {
    const createdItem = {
      name: itemName,
      amount: itemAmount + itemAmountUnits,
    }
    console.log(createdItem)
  })

  return (
    <div>
      <h2>Add a new item</h2>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label id='item-name'>Item Name</label>
            <input
              value={itemName}
              id='item-name'
              onChange={handleInput}
            ></input>
          </li>
          <li>
            <label id='item-amount'>Amount</label>
            <input
              value={itemAmount}
              id='item-amount'
              onChange={handleInput}
            ></input>
          </li>
          <li>
            <select onChange={handleSelect}>
              <option value='g'>g</option>
              <option value='ml'>ml</option>
            </select>
          </li>
        </ul>
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default AddItemPanel
