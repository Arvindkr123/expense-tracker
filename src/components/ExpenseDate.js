import React from 'react'
import './ExpenseDate.css';

const ExpenseDate = ({ exepenseDate }) => {
    const month = exepenseDate.toLocaleString('en-US', { month: 'long' });
    const year = exepenseDate.getFullYear();
    const day = exepenseDate.toLocaleString('en-US', { day: '2-digit' });
    return (
        <div className='expense-date'>
            <div className='expense-date-month'>{month}</div>
            <div className='expense-date-year'>{year}</div>
            <div className='expense-date-day'>{day}</div>
        </div>
    )
}

export default ExpenseDate
