import './Expenses.css'
import ExpenseItem from '../Expenses/ExpenseItem'

import React from 'react'
import Card from '../UI/Card'

const Expenses = ({ items }) => {
    return (
        <Card className='expenses'>
            {items.map(exp => {
                return <ExpenseItem
                    key={exp.id}
                    exepenseDate={exp.date}
                    expenseTitle={exp.title}
                    expenseAmount={exp.amount}
                />
            })}
        </Card>
    )
}

export default Expenses;
