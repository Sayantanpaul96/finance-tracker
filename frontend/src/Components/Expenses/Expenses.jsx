import { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/globalContext";
import { ExpenseForm } from "../ExpenseForm/ExpenseForm.jsx"
import "./Expenses.css";
import { dollar } from "../../utils/icons.jsx";
import IncomeItem from "../IncomeItem/IncomeItem.jsx";

export const Expenses = () => {
  const { addIncome, getExpenses, expenses, deleteExpenses, totalExpenses } = useGlobalContext();
  const  [refetchExpense, setRefetchExpense] = useState(false);

  useEffect(() => {
    getExpenses();
  }, [refetchExpense]);

  const handleRefetch = () => {
    setRefetchExpense((prevRefetch) => !prevRefetch)
  };

  const handleDeleteExpense = (id) => {
    deleteExpenses(id).then(() => {
      handleRefetch();
    }).catch(err => console.log("Error in Deleting values", err));
  };

  return (
    <div className="expense">
      <div className="inner-layout">
        <h1>Expenses</h1>
        <h2 className="total-expense">Total Expense: <span>{dollar()} {totalExpenses()}</span></h2>
        <div className="expense-content">
          <div className="form-container">
            <ExpenseForm onFormSubmit={handleRefetch}/>
          </div>
          <div className="expenses">
            {expenses.map((expense) => {
              const {
                _id,
                title,
                amount,
                type,
                date,
                category,
                description,
              } = expense;

              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  amount={amount}
                  type={type}
                  description={description}
                  date={date}
                  category={category}
                  indicatorColor={'var(--color-delete)'}
                  deleteItem={handleDeleteExpense}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
