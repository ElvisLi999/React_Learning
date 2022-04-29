import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const newYear = (newYear) => {
    return newYear.date.getFullYear().toString() === filteredYear;

  };

  const NewExpenses = props.items.filter(newYear);
  return (
      <Card className='expenses'>
            <ExpensesFilter 
                selected={filteredYear} 
                onChangeFilter={filterChangeHandler} 
            />
            {
              NewExpenses.map ((newExpense) => (
                  <ExpenseItem
                    key={newExpense.id}
                    title={newExpense.title}
                    amount={newExpense.amount}
                    date={newExpense.date}
                  />
              ))
            };

      </Card>
  );
};

export default Expenses;