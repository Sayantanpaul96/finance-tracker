import { useGlobalContext } from "../../context/globalContext";
import "./History.css";
export const History = () => {
  const { transactionHistory } = useGlobalContext();

  const [...history] = transactionHistory();
  return (
    <div className="history">
      <h2>Recently Added</h2>
      {history.slice(0, 6).map((item) => {
        const { _id, title, amount, type } = item;
        return (
          <div key={_id} className="history-item">
            <p
              style={{
                color:
                  type === "expense"
                    ? "var(--color-delete)"
                    : "var(--color-green)",
              }}
            >
              {title}
            </p>
            <p
              style={{
                color:
                  type === "expense"
                    ? "var(--color-delete)"
                    : "var(--color-green)",
              }}
            >
              {type === "expense" ? `-${amount}` : `+${amount}`}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default History;
