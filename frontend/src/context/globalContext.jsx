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
    const [error, setError] = useState(null);

    const addIncome = async (income) => {
        const response = await axios.post(`${BASE_URL}/add-income`, income)
            .catch(err => {
                setError(err.response.data.message);
            })
    }

    const getIncomes = async () => {
        const response = await axios.get(`${BASE_URL}/get-income`, {
            headers: {
                'Cache-Control': 'no-cache',
            }
        })
        setIncomes(response.data);
    }

    const deleteIncome = async (id) => {
        const res = await axios.delete(`${BASE_URL}/delete-income/${id}`);
    }

    const totalIncome = () => {
        let totalIncome = 0;
        incomes.map((income) => {
            totalIncome += income.amount;
        });

        return totalIncome;
    }

    return (
        <GlobalContext.Provider value={{
            addIncome, 
            getIncomes,
            deleteIncome,
            totalIncome,
            incomes,
        }}>
            {children}
        </GlobalContext.Provider>
    )
};

GlobalProvider.propTypes = {
    children: PropTypes.any,
};

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}

  