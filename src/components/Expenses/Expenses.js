import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem.js';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter.js';
import './Expenses.css';
const Expenses = (props) => {

const [selectedYear, setSelectedYear] = useState('2020');

const ExpenseFilterHandler = (newDateObject) => {
  setSelectedYear(newDateObject);
}

    return (
     <div>
      <Card className="expenses">
      <ExpensesFilter selectedValue={selectedYear} onSelectedDate={ExpenseFilterHandler}/>
          <ExpenseItem 
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
        />
        <ExpenseItem 
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
        />
        <ExpenseItem 
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
        <ExpenseItem 
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
        />
      </Card>
    </div>
    );

}
export default Expenses;