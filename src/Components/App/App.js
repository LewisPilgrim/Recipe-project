import React from 'react';
import './App.css';

import List from '../List/List';
import Recipe from '../Recipe/Recipe';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: 
        [{
          name: "Pancakes",
          id: 1,
          ingredients: [{ name: "egg", quantity: 1, itemId: 1 },
                        { name: "milk", quantity: 2, itemId: 2 },
                        { name: "flour", quantity: 3, itemId: 3}],                        
        },
        {
          name: "Tuna Pasta",
          id: 2,
          ingredients: [{ name: "pasta", quantity: 4, itemId: 4 },
                        { name: "tuna", quantity: 1, itemId: 5 },
                        { name: "mayonnaise", quantity: 2, itemId: 6}]
        }],
      listItems: [{ name: "rice", id: 4 }, { name: "chocolate", id: 5 }, { name: "pasta", id: 6 }]
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Listy</h1>
        </header>
        <div className="main">
          <List listItems={this.state.listItems}  recipes={this.state.recipes} />
          <Recipe className="Recipe" recipes={this.state.recipes} />
          
        </div>
      </div>
    );
  }

}

export default App;
