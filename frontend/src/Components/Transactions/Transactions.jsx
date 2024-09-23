import { useGlobalContext } from "../../context/globalContext";
import "./Transactions.css";
import { IncomeItem } from "./../IncomeItem/IncomeItem";
import { dollar } from "../../utils/icons";

export const Transactions = () => {
  const { transactionHistory, totalBalance } = useGlobalContext();

  const [...transactionData] = transactionHistory();

  return (
    <div className="transaction">
      <div className="inner-layout">
        <h1>Transactions</h1>
        <h2 className="total-balance">
          Balance:{" "}
          <span style={{ color: totalBalance() < 0 ? 'var(--color-delete)' : 'var(--color-green)' }}>
            {dollar()} {totalBalance()}
          </span>
        </h2>
        <div className="all-transactions">
          {transactionData.map((transactions) => {
            const {
              _id,
              title,
              amount,
              type,
              date,
              category,
              description,
            } = transactions;

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
                indicatorColor={
                  type === "expense"
                    ? "var(--color-delete)"
                    : "var(--color-green)"
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
