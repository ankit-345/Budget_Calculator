import React,{useState, useEffect} from 'react'
import {MdEdit, MdDelete} from 'react-icons/md';
     
const ExpenseList = ({item, handleCount, setItem, editItem, delete_Item, setCount}) => {
  
  const do_the_total = () =>{
    let count =  item.reduce((amt, curr)=>{
      let curr_rent = parseInt(curr.rent, 10)
      return (amt += curr_rent);
    },0)
    let total_count = parseInt(count, 10)
    handleCount(total_count);
  }

  useEffect(() => {
    do_the_total()
  }, [item])
  
  const handleClearExpense = () =>{
    setItem([]);
    setCount(0);
  }

  return (
    <>
      {item.map((currele, index) =>{
        return(
        <div className='item' key={index}>
          <div>{currele.charge}</div>
          <div>{currele.rent}</div>
          <div>
            <MdEdit className='edit_style' onClick={() => editItem(currele.id)}/>
            <MdDelete className="delete_style" onClick={() => delete_Item(currele.id)}/>
          </div>
      </div>
      
        )
      })
    }
    <div className='submit-container' id="delete-btn">
      <div className='btn-container' id='clear-btn' onClick={handleClearExpense}>
          <button className='btn'><span style={{ padding: "0px 5px 0px 0px" }}>CLEAR EXPENSES</span><MdDelete /></button>
      </div>
     </div>
    </>
   
  )
}

export default ExpenseList;