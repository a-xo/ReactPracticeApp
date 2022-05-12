import React from 'react';

const AddNewExpense = (props) => {

    return (
            <button onClick={props.onAddNewExpense}>Add New Expense</button>
    )
};

export default AddNewExpense;
