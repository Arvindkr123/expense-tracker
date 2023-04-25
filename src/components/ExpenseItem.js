import React from 'react'
import './ExpenseItem.css'

const ExpenseItem = () => {
    return (
        <div className='expense-item'>
            <div>April 25 2023</div>
            <div className='expense-item__description'>
                <h2>Car Insurance</h2>
                <div className='expense-item__price'>$200</div>
            </div>
        </div>
    )
}

export default ExpenseItem;