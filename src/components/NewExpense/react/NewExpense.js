import React, {useState} from 'react';
import nextId from 'react-id-generator';

import AddNewExpense from './AddNewExpense';
import ExpenseForm from './ExpenseForm';

import '../style/NewExpense.css';


const NewExpense = (props) => {
    const [renderForm, setRenderForm] = useState(false);

    const saveExpenseDataHandler = (enteredData) => {
        const expenseData = {
            ...enteredData,
            id: nextId('itemski-')
        };
        props.onAddExpense(expenseData);
        setRenderForm(false);
    };
    const renderFormHandler = () => {
        setRenderForm(true);
    };
    const stopRenderFormHandler = () => {
        setRenderForm(false);
    };

    return (
        <div className="new-expense">
            {!renderForm ?
                <AddNewExpense onAddNewExpense={renderFormHandler}/> :
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}
                             onCancel={stopRenderFormHandler}/>}
        </div>
    );
};

export default NewExpense;
