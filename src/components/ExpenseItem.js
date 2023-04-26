import React from 'react'
import './ExpenseItem.css'

const ExpenseItem = ({ exepenseDate, expenseTitle, expenseAmount }) => {
    const month = exepenseDate.toLocaleString('en-US', { month: 'long' });
    const year = exepenseDate.getFullYear();
    const day = exepenseDate.toLocaleString('en-US', { day: '2-digit' });
    return (
        <div className='expense-item'>
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>{expenseAmount} $</div>
            </div>
        </div>
    )
}

export default ExpenseItem;
