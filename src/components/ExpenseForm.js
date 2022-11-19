import React, { useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import ExpenseList from './ExpenseList';


const ExpenseForm = ({ handleCount, setCount, setItem, text, amount, setText, setAmount, handleFormInputs, item, toggle, delete_Item, editItem }) => {


    return (
        <>
            <form action="">
                <div id='form-container'>
                    <div className="form-group">
                        <label htmlFor="" className='form-control'>Charge</label>
                        <input type="text" placeholder='eg: rent' value={text} onChange={(e) => setText(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className='form-control'>Amount</label>
                        <input type="number" placeholder='eg: 100' value={amount} onChange={(f) => setAmount(f.target.value)} />
                    </div>
                </div>
                <div className='submit-container'>
                    <div className='btn-container' onClick={handleFormInputs}>
                        <input type="submit" value={toggle === false ? "SUBMIT " : "EDIT "} className="btn" />
                        <AiOutlineArrowRight />
                    </div>
                </div>
                {item.length === 0 ? "" : <ExpenseList item={item} setCount={setCount} setItem={setItem} handleCount={handleCount} delete_Item={delete_Item} editItem={editItem} />
                }
            </form>
        </>
    )
}

export default ExpenseForm