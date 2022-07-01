import React from 'react';
import './ListMenu.css';

class ListMenu extends React.Component {
    render() {
        return (
            <div className="List-menu">
                <form>
                    <label htmlFor="sort">Sort list: </label>
                    <select id="sort" name="sort">
                        <option value="By recipe">By recipe</option>
                        <option value="Combined">Combined list</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default ListMenu;