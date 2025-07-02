import { useState } from "react"

export function NewTodoFrom({ onSubmit }) {
    const [newItem, setNewItem] = useState("")

     // this stops things from clearning when you refresh like clicking refresh
    function handleSubmit(e) {
        e.preventDefault()

        // if new item box is empty then dont do anything
        if (newItem === "") return
        // else add the data in newItem to the todo list
        onSubmit(newItem)

        
        //clears the txt box
        setNewItem("")
    }


    return (
        <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
            <label htmlFor="item">New Item</label>
            <input 
            value={newItem} 
            onChange={e => setNewItem(e.target.value)} 
            type="text" 
            id="item"/>
        </div>
        <button className="btn"> ADD</button>
        </form>
    )
}