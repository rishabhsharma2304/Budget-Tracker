import React, { useState,useContext } from 'react';
import {GlobalContext} from '../Context/GlobalContext';

export const AddTransaction = () => {
const [text, setText] = useState('');
const [amount, setAmount] = useState('0');

const {addTransaction} = useContext(GlobalContext);
var i = 5;

const onSubmit = e => {
    e.preventDefault();
    

    const newTransaction = {
        id: i,
        text, amount: +amount
    }
    i=i+1;
    addTransaction(newTransaction);
}

    return (
        <>
            <h3>Add Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount<br />
                        (negative - expense , positive - income)
                    </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </>
    )
}
