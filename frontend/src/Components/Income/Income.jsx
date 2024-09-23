/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/globalContext";
import Form from "../Form/Form";
import "./Income.css";
import { dollar } from "../../utils/icons.jsx";
import IncomeItem from "../IncomeItem/IncomeItem.jsx";

export const Income = () => {
  const { getIncomes, incomes, deleteIncome, totalIncome } = useGlobalContext();
  const  [refetch, setRefetch] = useState(false);

  useEffect(() => {
    getIncomes();
  }, [refetch]);

  const handleRefetch = () => {
    setRefetch((prevRefetch) => !prevRefetch)
  };

  const handleDeleteIncome = (id) => {
    deleteIncome(id).then(() => {
      handleRefetch();
    }).catch(err => console.log("Error in Deleting values", err));
  };

  return (
    <div className="income">
      <div className="inner-layout">
        <h1>Incomes</h1>
        <h2 className="total-income">Total Income: <span>{dollar()} {totalIncome()}</span></h2>
        <div className="income-content">
          <div className="form-container">
            <Form onFormSubmit={handleRefetch}/>
          </div>
          <div className="incomes">
            {incomes.map((income) => {
              const {
                _id,
                title,
                amount,
                type,
                date,
                category,
                description,
              } = income;

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
                  indicatorColor={'var(--color-green)'}
                  deleteItem={handleDeleteIncome}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Income;
