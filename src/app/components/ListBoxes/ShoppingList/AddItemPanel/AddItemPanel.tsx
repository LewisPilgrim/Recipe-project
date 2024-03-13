import React from 'react'

const AddItemPanel = () => {
  return (
      <div>
        <h2>Add a new item</h2>
        <form>
            <label id="item-name">Item Name</label>
            <input value="Name" id="item-name"></input>
        </form>
    </div>
  )
}

export default AddItemPanel
