import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const newYear = (newYear) => {
    return newYear.date.getFullYear().toString() === filteredYear;

  };

  const filteredExpenses = props.items.filter(newYear);
  return (
      <Card className='expenses'>
            <ExpensesFilter 
                selected={filteredYear} 
                onChangeFilter={filterChangeHandler} 
            />
            <ExpensesList items = {filteredExpenses}/>


      </Card>
  );
};

export default Expenses;