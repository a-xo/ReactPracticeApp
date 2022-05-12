import React, {useState} from 'react';

import Card from '../../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

import '../style/Expenses.css';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2022');

    const yearFilterChangeHandler = (chosenYear) => {
        setFilteredYear(chosenYear);
    };

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    onFilterChange={yearFilterChangeHandler}
                    selected={filteredYear}
                />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>

    );

};

export default Expenses;
