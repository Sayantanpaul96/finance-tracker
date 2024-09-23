import { useEffect } from "react";
import "./Chart.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useGlobalContext } from "../../context/globalContext";
import { formatDate } from "./../../utils/dateFormat";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);
export const Chart = () => {
  const { incomes, expenses, getExpenses, getIncomes } = useGlobalContext();

  

  useEffect(() => {
    getExpenses();
    getIncomes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const data = {

    labels: [...incomes.map((income) => {
        const { date } = income;
        return formatDate(date);
      }), ...expenses.map((expense) => {
        const { date } = expense;
        return formatDate(date);
      })],

    datasets: [
      {
        label: "Incomes",
        data: [
          ...incomes.map((income) => {
            const { amount } = income;
            return amount;
          }),
        ],
        backgroundColor: 'green',
      },
      {
        label: "Expenses",
        data: [
          ...expenses.map((expense) => {
            const { amount } = expense;
            return amount;
          }),
        ],
        backgroundColor: 'red',
      },
    ],
  };

  return (
    <div className="chart">
      <Line data={data} />
    </div>
  );
};

export default Chart;
