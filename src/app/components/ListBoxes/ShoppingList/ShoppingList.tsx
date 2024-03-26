import React, { useState } from "react"
import styles from "./shoppingList.module.css"
import AddItemPanel from "./AddItemPanel/AddItemPanel"
import { useAppSelector } from "@/lib/hooks"
import ActionButtons from "../../ActionButtons/ActionButtons"

const ShoppingList = () => {
  const currentShoppingList = useAppSelector(
    (state) => state.shoppingList.items
  )
  const [addItemPanelOpen, setAddItemPanelOpen] = useState(false)

  const handleClick = () => {
    setAddItemPanelOpen(!addItemPanelOpen)
  }

  return (
    <div className={styles.list}>
      <h2>Shopping List</h2>
      <span>
        <button onClick={handleClick}>
          {addItemPanelOpen ? "X" : "Add a New Item"}
        </button>
      </span>
      <div>{addItemPanelOpen ? <AddItemPanel /> : ""}</div>
      <div className={`container ${styles.list}`}>
        <ul>
          {currentShoppingList.map((item) => {
            return (
              <li key={item.name} className={styles["ingredient-listing"]}>
                <span>{item.name}</span>
                <span>
                  {item.weight}
                  {item.units}
                  <ActionButtons />
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default ShoppingList
