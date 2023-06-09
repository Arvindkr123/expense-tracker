import React, { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = ({ exepenseDate, expenseTitle, expenseAmount }) => {
    return (
        <Card className='expense-item'>
            <ExpenseDate exepenseDate={exepenseDate} />
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>{expenseAmount} $</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;