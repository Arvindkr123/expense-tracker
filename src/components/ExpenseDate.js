import React from 'react'

const ExpenseDate = ({ exepenseDate }) => {
    const month = exepenseDate.toLocaleString('en-US', { month: 'long' });
    const year = exepenseDate.getFullYear();
    const day = exepenseDate.toLocaleString('en-US', { day: '2-digit' });
    return (
        <div className='expense-date'>
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
        </div>
    )
}

export default ExpenseDate
