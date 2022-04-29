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

  const filteredExpenses = props.items.filter(newYear);
  return (
      <Card className='expenses'>
            <ExpensesFilter 
                selected={filteredYear} 
                onChangeFilter={filterChangeHandler} 
            />
            {filteredExpenses.length === 0 ?
              (<p>No expenses found.</p>) : 
              filteredExpenses.map ((filteredExpense) => (
                <ExpenseItem
                  key={filteredExpense.id}
                  title={filteredExpense.title}
                  amount={filteredExpense.amount}
                  date={filteredExpense.date}
                />
              ))
            };

      </Card>
  );
};

export default Expenses;