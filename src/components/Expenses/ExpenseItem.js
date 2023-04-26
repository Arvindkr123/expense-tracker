import React, { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = ({ exepenseDate, expenseTitle, expenseAmount }) => {
    const [newTitle, setNewTitle] = useState('');
    const [title, setTitle] = useState(expenseTitle);

    const clickHandler = () => {
        if (newTitle) {
            setTitle(newTitle)
            setNewTitle('')
        } else {
            alert('enter the fields')
        }
    }
    const changeHandler = (e) => {
        setNewTitle(e.target.value)
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate exepenseDate={exepenseDate} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{expenseAmount} $</div>
            </div>
            <input required onChange={changeHandler} value={newTitle} type="text" style={{ marginLeft: '10px', borderRadius: '12px', padding: '10px' }} />
            <button onClick={clickHandler} style={{ marginLeft: '10px', borderRadius: '12px', padding: '10px' }}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem;