
import { FaPen,FaRegTrashAlt } from "react-icons/fa";
const ExpenseItem =({expense,deleteItem,handleEdit})=>{
    const{id,charge,amount}=expense;
    return(
        <li className="Item">
            <div className="info">
        <span className="expense">{charge}</span>
        <span className="expense">{amount}</span>
        </div>
        <div className="btn-control">
            <button className="edit-button" aria-label="edit button" onClick={()=>handleEdit(id)}>
            <FaPen/>
            </button>    
            <button className="clear-button" aria-label="delete button" onClick={()=>deleteItem(id)}>
            <FaRegTrashAlt/>
            </button>
        </div>
        </li>
    )
}
export default ExpenseItem;