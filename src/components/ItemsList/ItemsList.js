import React from 'react';
import './ItemsList.css'

const ItemsList = (props) => {
    return (
        <ul className={'items-list'}>
            {props.items.map( (item)=>{
                return <li key={item.id}>{item.text}</li>
            } )}
        </ul>
    );
};

export default ItemsList;
