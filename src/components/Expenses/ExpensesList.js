import React  from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props) => {

    if (props.items.length === 0){
        return (
            <h2 className="expenses-list__fallback">No Expenses Found!</h2>
        );
    }
    return (
        <ul className="expense-list">
            {props.items.map((expenseobj) => (
            <ExpenseItem 
            key={expenseobj.id}
            title={expenseobj.title}
            amount={expenseobj.amount}
            date={expenseobj.date}
            />
          ))}
        </ul>
    );
};

export default ExpensesList;