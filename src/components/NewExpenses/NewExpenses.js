import React from 'react'
import './NewExpenses.css'
import ExpenseForm from './ExpenseForm'

const NewExpenses = ({onAddExpense}) => {
    const saveExpenseDateHandler = (enteredExpensedata) => {
        const expenseData = {
            ...enteredExpensedata, id: Math.random().toString()
        }
        console.log(expenseData);
        onAddExpense(expenseData);
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDateHandler}></ExpenseForm>
        </div>
    )
}

export default NewExpenses;
