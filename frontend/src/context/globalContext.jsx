import { createContext } from "react";
import axios from "axios";
import { useState } from "react";
import PropTypes from "prop-types";
import { useContext } from "react";

const BASE_URL = "http://localhost:5000/api/v1";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

    const [incomes, setIncome] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [error, setError] = useState(null);

    const addIncome = async (income) => {
        console.log(income)
        const response = await axios.post(`${BASE_URL}/add-income`, income)
            .catch(err => {
                setError(err.response.data.message);
            })
    }
    return (
        <GlobalContext.Provider value={{
            addIncome,  
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
  