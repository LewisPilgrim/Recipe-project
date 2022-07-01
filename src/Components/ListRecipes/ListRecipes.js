import React from 'react';
import Ingredients from '../Ingredient/Ingredients';
import './ListRecipes.css';

class ListRecipes extends React.Component {
    render() {
        return (
            <div className="List-recipes">
                <div className="Ingredient-list">
                    {
                        this.props.recipes.map(recipe => {
                            const recipeName = recipe.name;
                            return (
                                <div>
                                    <h3> - {recipeName}</h3>
                                    {
                                        recipe.ingredients.map(item => {
                                            return <Ingredients item={item}
                                                key={item.id}
                                            />
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ListRecipes;