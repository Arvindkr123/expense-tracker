import React from 'react'
import Expenses from './components/Expenses/Expenses'
import Card from './components/UI/Card'

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
            <Expenses item={expense} />
        </>
    )
}

export default App
