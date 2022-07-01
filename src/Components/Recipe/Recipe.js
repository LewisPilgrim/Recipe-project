import React from 'react';
import RecipeInput from '../RecipeInput/RecipeInput';
import ListRecipes from '../ListRecipes/ListRecipes';
import './Recipe.css';

class Recipe extends React.Component {
    render() {
        return (
            <div className="Recipe">
                <h2>Recipes</h2>
                <ListRecipes recipes={this.props.recipes} />

                <div className="Recipe-form">
                    <RecipeInput />
                </div>
            </div>
        )
    }
}

export default Recipe;