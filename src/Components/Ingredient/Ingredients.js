import React from 'react';
import './Ingredients.css';

class Ingredients extends React.Component {


    render() {
        return (
            <div className="Ingredients">
                <p
                    className="ingredient-item">{this.props.item.name} x{this.props.item.quantity}</p>
            </div>
        )
    }
}

export default Ingredients;