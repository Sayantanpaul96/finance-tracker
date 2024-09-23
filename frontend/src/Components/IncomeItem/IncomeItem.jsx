import {
  calendar,
  comment,
  dollar,
  money,
  trash,
  freelance,
  stocks,
  users,
  card,
  piggy,
  book,
  food,
  medical,
  tv,
  takeaway,
  clothing,
  circle,
  error
} from "../../utils/icons";
import { Button } from "../Button/button";
import "./IncomeItem.css";
import { PropTypes } from "prop-types";
import { formatDate } from "../../utils/dateFormat";

export const IncomeItem = ({
  id,
  title,
  amount,
  type,
  date,
  category,
  description,
  deleteItem,
  indicatorColor,
}) => {
  const categoryIcons = () => {
    console.log("category", category);
    switch (category) {
      case "salary":
        return money();
      case "freelancing":
        return freelance();
      case "investments":
        return stocks();
      case "stocks":
        return users();
      case "bank":
        return card();
      case "other":
        return piggy();
      default:
        return error();
    }
  };

  const ExpenseIcons = () => {
    console.log("category", category);
    switch (category) {
      case "education":
        return book();
      case "groceries":
        return food();
      case "health":
        return medical();
      case "subscriptions":
        return tv();
      case "takeaways":
        return takeaway();
      case "clothing":
        return clothing();
      case "travelling":
        return freelance();
      case "other":
        return circle();
      default:
        return error();
    }
  };

  return (
    <div
      className="income-item"
      style={{ "--indicator-color": `${indicatorColor}` }}
    >
      <div className="icon">
        {type === 'expense' ? ExpenseIcons() : categoryIcons()}
      </div>
      <div className="content">
        <h5>{title}</h5>
        <div className="inner-content">
          <div className="text">
            <p>
              {dollar()} {amount}
            </p>
            <p>
              {calendar()} {formatDate(date)}
            </p>
            <p>
              {comment()} {description}
            </p>
          </div>
          {deleteItem && <div className="btn-con">
            <Button
              icon={trash()}
              bPad={"1rem"}
              bRad={"50%"}
              bg={"var(--primary-color)"}
              color={"#fff"}
              iColor={"#fff"}
              hColor={"var(--color-green)"}
              onClick={() => deleteItem(id)}
            />
          </div>}
        </div>
      </div>
    </div>
  );
};

IncomeItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  amount: PropTypes.string,
  type: PropTypes.string,
  date: PropTypes.date,
  category: PropTypes.string,
  description: PropTypes.string,
  deleteItem: PropTypes.func,
  indicatorColor: PropTypes.string,
};

export default IncomeItem;
