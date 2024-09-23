import Chart from "../Chart/Chart";
import "./Dashboard.css";
import { dollar } from "../../utils/icons";
import { useGlobalContext } from "../../context/globalContext";
import History from "../History/History";

export const DashBoard = () => {
  const {
    totalIncome,
    totalExpenses,
    totalBalance,
    incomes,
    expenses,
  } = useGlobalContext();
  return (
    <div className="dashboard">
      <div className="inner-layout">
        <div className="stats-con">
          <div className="chart-con">
            <Chart />
            <div className="amount-container">
              <div className="income">
                <h2>Total Income</h2>
                <p>
                  {dollar()} {totalIncome()}
                </p>
              </div>
              <div className="expense">
                <h2>Total Expenses</h2>
                <p>
                  {dollar()} {totalExpenses()}
                </p>
              </div>
              <div className="balance">
                <h2>Balance</h2>
                <p>
                  {dollar()} {totalBalance()}
                </p>
              </div>
            </div>
          </div>
          <div className="history-con">
            <History />
            <h2 className="salary-title">
              MIN <span>Salary</span> MAX
            </h2>
            <div className="salary-item">
              <p>
                {Math.min(...incomes.map((item) => item.amount)) <= 0
                  ? "0"
                  : Math.min(...incomes.map((item) => item.amount))}
              </p>
              <p>
                {Math.max(...incomes.map((item) => item.amount)) <= 0
                  ? "0"
                  : Math.max(...incomes.map((item) => item.amount))}
              </p>
            </div>
            <h2 className="salary-title">
              Min <span>Expenses</span> Max
            </h2>
            <div className="salary-item">
              <p>
                {Math.min(...expenses.map((item) => item.amount)) <= 0
                  ? "0"
                  : Math.min(...expenses.map((item) => item.amount))}
              </p>
              <p>
                {Math.max(...expenses.map((item) => item.amount)) <= 0
                  ? "0"
                  : Math.max(...expenses.map((item) => item.amount))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
