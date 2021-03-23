import React, { useState } from 'react';
import './NewItem.css'

const Item = (props) =>{
    const  [enteredText, setEnteredText ] = useState('');
    //event on click button
     const addItemHandler = (event) => {
        event.preventDefault();

        const newItem = {
            id: Math.random().toString(),
            text: enteredText
        }

        props.onAddItem(newItem); //exec onAddItem()
        setEnteredText('');
     };
     //event on change text
    const textChangeHandler = (event)=>{
        setEnteredText(event.target.value);
    };

    return  (
        <form className={'new-item'} onSubmit={addItemHandler}>
            <input type="text" value={enteredText} onChange={textChangeHandler}/>
            <button type="submit">Add Item</button>
        </form>
    );
};


export default Item;
