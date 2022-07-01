import React from 'react';
import './List.css';
// import ListMenu from '../ListMenu/ListMenu';
import CompiledList from '../CompiledList/CompiledList';
import ListRecipes from '../ListRecipes/ListRecipes';
// import Recipe from '../Recipe/Recipe';

class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = { isByRecipe: true };

    }
 

    render() {
        const isByRecipe = this.state.isByRecipe;
        let listDisplay;
        if (isByRecipe) {
          listDisplay = <ListRecipes recipes={this.props.recipes} listState={this.state.isByRecipe} />;
        } else {
          listDisplay = <CompiledList listState={this.state.isByRecipe}  />;
        }
    
        return (
          <div>
            <h2>List</h2>
            {listDisplay}
          </div>
        );
    }
}
   
export default List;