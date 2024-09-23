/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import axios from "axios";
import { useState } from "react";
import PropTypes from "prop-types";
import { useContext } from "react";

const BASE_URL = "http://localhost:5000/api/v1";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState('');

  // all incomes functions
  const addIncome = async (income) => {
    await axios
      .post(`${BASE_URL}/add-income`, income)
      .catch((err) => {
        console.log("Error", err)
        setError(err.response.data.message);
      });
  };

  const getIncomes = async () => {
    const response = await axios.get(`${BASE_URL}/get-income`, {
      headers: {
        "Cache-Control": "no-cache",
      },
    }).catch((err) => {
      setError(err.response.data.message);
    });
    setIncomes(response.data);
  };

  const deleteIncome = async (id) => {
   await axios.delete(`${BASE_URL}/delete-income/${id}`).catch((err) => {
      setError(err.response.data.message);
    });
  };

  const totalIncome = () => {
    let totalIncome = 0;
    incomes.map((income) => {
      totalIncome += income.amount;
    });

    return totalIncome;
  };

  // all expenses functions
  const addExpense = async (expense) => {
    await axios
      .post(`${BASE_URL}/add-expense`, expense)
      .catch((err) => {
        setError(err.response.data.message);
      });
  };

  const getExpenses = async () => {
    const response = await axios.get(`${BASE_URL}/get-expense`, {
      headers: {
        "Cache-Control": "no-cache",
      },
    }).catch((err) => {
      setError(err.response.data.message);
    });
    setExpenses(response.data);
  };

  const deleteExpenses = async (id) => {
    await axios.delete(`${BASE_URL}/delete-expense/${id}`).catch((err) => {
      setError(err.response.data.message);
    });
  };

  const totalExpenses = () => {
    let totalExpense = 0;
    expenses.map((expense) => {
      totalExpense += expense.amount;
    });

    return totalExpense;
  };

  const totalBalance = () => {
    return totalIncome() - totalExpenses();
  };

  const transactionHistory = () => {
    const history = [...incomes, ...expenses];
    return history.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  return (
    <GlobalContext.Provider
      value={{
        addIncome,
        getIncomes,
        deleteIncome,
        totalIncome,
        incomes,
        getExpenses,
        addExpense,
        deleteExpenses,
        totalExpenses,
        expenses,
        totalBalance,
        transactionHistory,
        error,
        setError
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.any,
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
