import React, {useState} from 'react';
import './FormExpense.css';


const FormExpense = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [eneterdAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''  
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput(
        //     {
        //         ...userInput,
        //         enteredTitle: event.target.value,
        //     }
        // );
        // setUserInput((prevState) => {
        //     return { ...prevState, enetredTitle: event.target.value }; 
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput(
        //     {
        //         ...userInput,
        //         enteredAmount: event.target.value,
        //     }
        // );
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setEnteredDate(event.target.value);
        // setUserInput(
        //     {
        //         ...userInput,
        //         enteredDate: event.target.value,
        //     }
        // );
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: eneterdAmount,
            date: new Date(enteredDate),
        };
        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
            <label>Title</label>
            <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" value={eneterdAmount} onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </div>
    </form>
};
export default FormExpense;