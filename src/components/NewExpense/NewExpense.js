import React from 'react';
import './NewExpense.css';
import './FormExpense'
import FormExpense from './FormExpense';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {...encodeURIComponent,
        id: Math.random().toString(),
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
    };

    return <div className="new-expense">
        <FormExpense onSaveExpenseData={saveExpenseDataHandler}  />
        </div>
};
export default NewExpense;