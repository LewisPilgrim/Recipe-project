import React from 'react'
import styles from "./shoppingList.module.css"

const ShoppingList = () => {
  return (
    <div className={styles.list}>
      <h2>Shopping List</h2>
      <div className={`container ${styles.list}`}>
        list goes here
      </div>
    </div>
  )
}

export default ShoppingList;