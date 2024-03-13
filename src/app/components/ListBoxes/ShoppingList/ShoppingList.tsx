import React, { useState } from 'react'
import styles from "./shoppingList.module.css"
import AddItemPanel from './AddItemPanel/AddItemPanel';

const ShoppingList = () => {
  const currentShoppingList = "No list items added";
  const [addItemPanelOpen, setAddItemPanelOpen] = useState(false)

  const handleClick = () => {
    setAddItemPanelOpen(!addItemPanelOpen)
    
  }

  return (
    <div className={styles.list}>
      <h2>Shopping List</h2>
      <span>
        <button onClick={handleClick}>{addItemPanelOpen ? "X" : "Add a New Item"}</button>
      </span>
      <div>
        {addItemPanelOpen ? <AddItemPanel /> : ""}
      </div>
      <div className={`container ${styles.list}`}>
        {currentShoppingList}
      </div>
    </div>
  )
}

export default ShoppingList;