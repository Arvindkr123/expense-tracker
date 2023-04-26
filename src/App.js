import React from 'react'
import ExpenseItem from './components/ExpenseItem'

const App = () => {
    let expense = [
        { id: 'e1', title: 'school fee', amount: 950, date: new Date(2023, 5, 12) },
        { id: 'e2', title: 'Books', amount: 250, date: new Date(2023, 5, 24) },
        { id: 'e3', title: 'House Rent', amount: 750, date: new Date(2023, 5, 26) },
        { id: 'e4', title: 'Food', amount: 650, date: new Date(2023, 5, 29) },
    ]
    return (
        <>
            <h2>Let's get started</h2>
            <ExpenseItem
                exepenseDate={expense[0].date}
                expenseTitle={expense[0].title}
                expenseAmount={expense[0].amount}
            />
            <ExpenseItem
                exepenseDate={expense[1].date}
                expenseTitle={expense[1].title}
                expenseAmount={expense[1].amount}
            />
            <ExpenseItem
                exepenseDate={expense[2].date}
                expenseTitle={expense[2].title}
                expenseAmount={expense[2].amount}
            />
            <ExpenseItem
                exepenseDate={expense[3].date}
                expenseTitle={expense[3].title}
                expenseAmount={expense[3].amount}
            />
        </>
    )
}

export default App
