import React, { useState } from 'react';
import './NewExpense.css';
import './FormExpense'
import FormExpense from './FormExpense';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {...enteredExpenseData,
        id: Math.random().toString(),
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
    };

    const newFlag = (val) => {
        setFlag(val);
    };

    const [flag, setFlag] = useState(false);
    const newExpenseAddHandler = () => {
        setFlag(true);
    }
    if (flag) {
        return (
            <div className="new-expense">
                <FormExpense flag={flag} onSaveExpenseData={saveExpenseDataHandler} onFlag={newFlag}/>
            </div>
        );
    }

    let buttonHandle = <button onClick={newExpenseAddHandler}>Add Expense</button>

    return <div className="new-expense">
        {buttonHandle}
        </div>
};
export default NewExpense;