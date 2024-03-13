import React from 'react'
import styles from "./recipeList.module.css"

const RecipeList = () => {
  const currentRecipeList = "No recipes added";

  return (
    <div className={styles.list}>
      <h2>Recipe List</h2>
      <div className={`container ${styles.list}`}>
        {currentRecipeList}
      </div>
    </div>
  )
}

export default RecipeList
