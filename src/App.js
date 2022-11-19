import {useEffect, useState} from 'react';
import './App.css';
import  Alert  from './components/Alert';
import ExpenseForm from './components/ExpenseForm';
      
function App() {
  const [count, setCount] = useState(0);
  const [alert, setAlert] = useState("");
  const [check, setCheck] = useState(true);

  // ---------------------------------------------------------------------------------------------
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [item, setItem] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [id_edit_item, setid_edit_item] = useState("");

  const handleFormInputs = (e) => {
      if (text && amount && toggle) {
          setItem(item.map((currele) => {
              if (currele.id === id_edit_item) {
                  return { ...currele, charge: text, rent: amount }
              }
              return currele;
          }))
          setText("");
          setAmount("");
          setToggle(false);
      }
      else {
          e.preventDefault();
          const forminputs = {
              id: new Date().getTime().toString(),
              charge: text,
              rent: amount
          }
          setItem([...item, forminputs]);
          setAlert('Items Added');
          setText("");
          setAmount("");
      }
  }

  const editItem = (index) => {
      const iseditItem = item.find((currele) => {
          return currele.id === index
      })
      setText(iseditItem.charge);
      setAmount(iseditItem.rent);
      setToggle(true);
      setid_edit_item(index);
  }

  const delete_Item = (index) => {
    if(item.length === 1){
      setCount(0);
    }
      const updatedItem = item.filter((currele) => {
          return currele.id !== index
      })
      setItem(updatedItem);
  }
  // ---------------------------------------------------------------------------------------------

  const handleCount = (event) =>{
    setCount(event);
  }
   
  useEffect(() => {
    setTimeout(() => {
      setCheck(false);
      console.log(check);
    }, 3000);
  },[item]);  
  
  // console.log(check);   
  return (
   <>
   {/* { check === true? <Alert alert={alert}/>: ""} */}
   {/* {console.log(check)} */}
   {/* <Alert alert={alert}/> */}
   <main className='container'>
    <h1 className="main-heading">BUDGET CALCULATOR</h1>
      <ExpenseForm 
      handleCount= {handleCount}
      setCount={setCount}
      setAlert={setAlert}
      text={text}
      amount={amount}
      setText={setText}
      setAmount={setAmount}
      handleFormInputs={handleFormInputs}
      item={item}
      setItem={setItem}
      toggle={toggle}
      setToggle={setToggle}
      delete_Item={delete_Item}
      editItem={editItem}/>
    <h2 className='main-heading'>TOTAL SPENDING : {count}$</h2>
   </main>
   </>
  );
}

export default App;
