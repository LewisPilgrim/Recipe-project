import React from 'react';

class RecipeInput extends React.Component {
    render() {
        return (
            <div className="Recipe-input">
                <h2>New Recipe</h2>
                <form>
                    <label htmlFor="Recipe-name">Recipe Name: </label><br></br>
                    <input type="text" name="Recipe-name" placehoder="New Recipe"></input><br></br>
                    <label htmlFor="Recipe-ingredients">Ingredients: </label><br></br>
                    <textarea rows="3" cols="30" name="Recipe-ingredients" placeholder="eg. Eggs, Milk, Flour"></textarea>
                </form>
            </div>
        )
    }
}

export default RecipeInput;