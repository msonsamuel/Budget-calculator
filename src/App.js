import './App.css';
import { useState,useEffect } from 'react';
import ExpensesForm from './Components/ExpensesForm';
import Alerts from './Components/Alerts';
import ExpensesList from './Components/ExpensesList';
let i=100;
const initialExpenses=localStorage.getItem("expenses")?
JSON.parse(localStorage.getItem("expenses")):[];
function App() {
 const [expenses, setExpenses]=useState(initialExpenses);
 const[amount, setAmount]=useState("");
 const [charge, setCharge]=useState("");
  const [alert, setAlert]=useState({show:false});
  const [edit, setEdit]=useState(false);
  const [id, setId]=useState(0);
  useEffect(()=>{
    localStorage.setItem("expenses", JSON.stringify(expenses))
  },[expenses])

 //handle amount
 const handleAmount=(e)=>{
 
  setAmount(e.target.value)
 };
 //handle charge
 const handleCharge=(e)=>{
  //console.log('charge: ${e.target.value}')
  setCharge(e.target.value);
 }
 //handle alert
 const handleAlert=({ type, text })=>{
  setAlert({show:true,type,text});
  setTimeout(() => {
    setAlert({show:false});
  }, 3000);
 };
 const deleteItem=(id)=>{
  const remainItem=expenses.filter((item)=>item.id!==id)
  setExpenses(remainItem)
 }
 const clearItems=()=>{
  return(
    
    setExpenses([])
    
  )
 };
 //handle edit
 const handleEdit=(id)=>{
  let expense=expenses.find((item)=>item.id===id)
  let{charge,amount}=expense;
  setCharge(charge);
  setAmount(amount);
  setEdit(true);
  setId(id);
 };
 //handle submit
 const handlesubmit=(e)=>{
 e.preventDefault();
 if(charge!=="" && amount>0){
  if(edit){
let temExpenses=expenses.map((item)=>{
  return item.id===id?{...item, charge, amount}:item
})
setExpenses(temExpenses);
setEdit(false);
handleAlert({type:`success`, Text:`Item Edited`})
  }else{
const singleItem ={id:i--+"rts"+"rys",charge,amount}
handleAlert({type:`success`, Text:`Item Added`})
setExpenses([...expenses,singleItem])
}
setAmount("")
setCharge("")
 }
 else{
  //handle alert
  handleAlert({type:`danger`, text:`charge can't be empty & amount has to be bigger than zero`})
 }
 };
  return (
   
    <div className='calcBody center mt-2 mb-6'> 
    {alert.show && <Alerts type={alert.type} text={alert.text}/>}
      <Alerts/>
      <h1 className='center'> Budget Calculator</h1>
      <main className='App'>
     <ExpensesForm amount={amount} 
     charge={charge} handlesubmit={handlesubmit}
      handleCharge={handleCharge} 
      handleAmount={handleAmount}
      handleEdit={handleEdit}
      edit={edit}
      />
      <ExpensesList 
      expenses={expenses}
      clearItems={clearItems}
      deleteItem={deleteItem}
      handleEdit={handleEdit}
      />
      </main>
     <h1>Total Spending : {" "} <span className='total'>
      ${expenses.reduce((acc,curr)=>{
        return (acc+=parseInt(curr.amount))
      },0)}
      </span></h1>
      </div>
  );
}

export default App;
