import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import Item from "./ExpenseItem";
const ExpensesList =({expenses,clearItems,deleteItem,handleEdit})=>{
    return(
        <>
<ul className="list">
{expenses.map((expense)=>{
    return <Item key={expense.id} expense={expense} deleteItem={deleteItem} handleEdit={handleEdit}/>
})}
</ul>
{expenses.length > 0 && <button className="btn" onClick={clearItems}>
    clear expenses<FaTrashAlt className="clear-button"/>
    </button>}
        </>
    )
}
export default ExpensesList;