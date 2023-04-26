import React, { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = ({ exepenseDate, expenseTitle, expenseAmount }) => {
    const [title, setTitle] = useState(expenseTitle);
    const clickHandler = () => {
        setTitle('New Title....')
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate exepenseDate={exepenseDate} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{expenseAmount} $</div>
            </div>
            <button onClick={clickHandler} style={{ marginLeft: '10px', borderRadius: '12px', padding: '10px' }}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem;
