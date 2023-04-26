import './Expenses.css'
import ExpenseItem from '../Expenses/ExpenseItem'

import React from 'react'
import Card from '../UI/Card'

const Expenses = ({ item }) => {
    return (
        <Card className='expenses'>
            <ExpenseItem
                exepenseDate={item[0].date}
                expenseTitle={item[0].title}
                expenseAmount={item[0].amount}
            />
            <ExpenseItem
                exepenseDate={item[1].date}
                expenseTitle={item[1].title}
                expenseAmount={item[1].amount}
            />
            <ExpenseItem
                exepenseDate={item[2].date}
                expenseTitle={item[2].title}
                expenseAmount={item[2].amount}
            />
            <ExpenseItem
                exepenseDate={item[3].date}
                expenseTitle={item[3].title}
                expenseAmount={item[3].amount}
            />
        </Card>
    )
}

export default Expenses;
