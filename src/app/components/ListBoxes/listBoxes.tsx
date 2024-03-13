'use client'
import styles from "./listBoxes.module.css"
import RecipeList from "./RecipeList/RecipeList"
import ShoppingList from "./ShoppingList/ShoppingList"

function ListBoxes() {
  return (
    <div className={styles.lists}>
      <ShoppingList />
      <RecipeList />
    </div>
  )
}

export default ListBoxes
