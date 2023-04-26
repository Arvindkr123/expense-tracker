import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';

const ExpenseItem = ({ exepenseDate, expenseTitle, expenseAmount }) => {
    return (
        <div className='expense-item'>
            <ExpenseDate exepenseDate={exepenseDate} />
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>{expenseAmount} $</div>
            </div>
        </div>
    )
}

export default ExpenseItem;
