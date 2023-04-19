import {MdSend} from "react-icons/md";
const ExpensesForm =({amount,charge, handlesubmit,handleCharge,handleAmount,edit})=>{ 
    return(
        <form onSubmit={handlesubmit}>
            <div className="form-center">
            <div className="form-group ">
            <label htmlFor="charge">  Charge  </label>
            <input type="text" id="charge" placeholder="e.g Rent"
             className="form-control" name="charge" value={charge}
             onChange={handleCharge}/>
            </div>
            <div className="form-group">
            <label htmlFor="amount">  Amount  </label>
            <input type="number" id="amount" placeholder="e.g 750" 
            className="form-control" name="amount" value={amount}
            onChange={handleAmount}/>
            </div>
            </div>
            <button className="btn" type="submit">
                {edit?'edit':'submit'}
               <MdSend className="btn-icon"/>
            </button>
        </form>
    )
}
export default ExpensesForm;