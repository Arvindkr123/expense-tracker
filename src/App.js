import React, { useState } from 'react'
import Expenses from './components/Expenses/Expenses'
import Card from './components/UI/Card'
import NewExpenses from './components/NewExpenses/NewExpenses'
let DUMMY_EXPENSE = [
    { id: 'e1', title: 'school fee', amount: 950, date: new Date(2023, 5, 12) },
    { id: 'e2', title: 'Books', amount: 250, date: new Date(2023, 5, 24) },
    { id: 'e3', title: 'House Rent', amount: 750, date: new Date(2023, 5, 26) },
    { id: 'e4', title: 'Food', amount: 650, date: new Date(2023, 5, 29) },
]

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
    const addExpenseHandler = (expense) => {
        const updatedExpense = [expense, ...expenses];
        setExpenses(updatedExpense);
    }

    return (
        <>
            <h2>Expense Tracker</h2>
            <NewExpenses onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </>
    )
}

export default App
