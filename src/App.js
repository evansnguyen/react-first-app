import React, { useState } from 'react';
import './App.css';
import ItemsList from "./components/ItemsList/ItemsList";
import AddItem from "./components/NewItem/NewItem";

//style function
function App (){
    const [listItems, setListItems] = useState([
        {id: 'i1', text: 'item 1'},
        {id: 'i2', text: 'item 2'},
        {id: 'i3', text: 'item 3'}
    ]);
    function onAddItemHandler(newItem){ //receive from NewItem.js when the form submitted
        setListItems((prevList) =>{
            return  prevList.concat(newItem);
        }); //better approach
    }

    return (
        <div className={'list-container'}>
            <h2>List of Tasks</h2>
            <AddItem onAddItem={onAddItemHandler}/>
            <ItemsList items={listItems}/>
        </div>
    );
}
// //var style
// const App2 = () => {
//   return <h1> Hi this is a Constant!</h1>;
// }

// style class ? out dated?
// class App1 extends React.Component {
//     render() {
//
//     }
// }


export default App;
