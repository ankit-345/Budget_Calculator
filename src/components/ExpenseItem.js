import React from 'react';
import {MdEdit, MdDelete} from 'react-icons/md';
    
export const ExpenseItem = ({text, amount}) => {
  // const [text, amount] = this.state;

 const handleclick = () =>{
  console.log(text, amount);
 }

  return (
    <div className='item' onClick={handleclick}>
        <div>{text}</div>
        <div>{amount}</div>
        <div>
          <MdEdit className='edit_style'/>
          <MdDelete className="delete_style"/>
        </div>
    </div>
  )
}

export default ExpenseItem;
