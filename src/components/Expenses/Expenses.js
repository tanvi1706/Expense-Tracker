import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter.js';
import './Expenses.css';
import ExpensesList from './ExpensesList.js';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

const [selectedYear, setSelectedYear] = useState('2020');


const ExpenseFilterHandler = (newDateObject) => {
  setSelectedYear(newDateObject);
}

const filteredExpenses = props.expenses.filter(expenses => {
  return expenses.date.getFullYear().toString() === selectedYear;
});
    return (
     <div>
      <Card className="expenses">
      <ExpensesFilter selectedValue={selectedYear} onSelectedDate={ExpenseFilterHandler}/>
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
    );

}
export default Expenses;