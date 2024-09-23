import './ExpenseForm.css'
import { useState } from "react";
import DatePicker from "react-datepicker";
import { useGlobalContext } from "../../context/globalContext";
import "react-datepicker/dist/react-datepicker.css"
import { Button } from './../Button/button';
import { plus } from '../../utils/icons';

export const ExpenseForm = ({ onFormSubmit }) => {
  const { addExpense, error, setError } = useGlobalContext();

  const defaultInputs = {
    title: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  }

  const [inputState, setInputState] = useState(defaultInputs);

  const inputHandler = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
    setError('')
  };

  const { title, amount, category, description, date } = inputState;

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(inputState).then(() => {
      // clear inputs.
      setInputState(defaultInputs);
      if (onFormSubmit) {
        onFormSubmit();
      }
    }).catch(() => console.error(`Error Adding Incomes`));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {error && <p className='error'>{error}</p>}
      <div className="input-control">
        <input
          type="text"
          value={title}
          name={"title"}
          id="title"
          placeholder="Expense Title"
          onChange={inputHandler("title")}
        />
      </div>
      <div className="input-control">
        <input
          type="number"
          value={amount}
          name={"amount"}
          id="amount"
          placeholder="Expense Amount"
          onChange={inputHandler("amount")}
        />
      </div>
      <div className="input-control">
        <DatePicker
          id="date"
          className='date-box'
          placeholderText="Enter A Date"
          selected={date}
          dateFormat="dd/MM/yyyy"
          onChange={(date) => {
            setInputState({ ...inputState, date: date });
          }}
        />
      </div>
      <div className="selects input-control">
        <select
          required
          value={category}
          name="category"
          id="category"
          onChange={inputHandler("category")}
        >
          <option value="" disabled>
            {" "}
            Select Option
          </option>
          <option value="education">Education</option>
          <option value="groceries">Groceries</option>
          <option value="health">Health</option>
          <option value="subscriptions">Subscriptions</option>
          <option value="takeaways">Takeaways</option>
          <option value="clothing">Clothing</option>
          <option value="travelling">Travelling</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="input-control">
        <textarea
          type="text"
          value={description}
          name={"description"}
          id="description"
          placeholder="Add a description"
          cols="30"
          rows="4"
          onChange={inputHandler("description")}
        />
      </div>
      <div className="submit-btn">
        <Button 
          name={'Add Expense'}
          icon={plus()}
          bPad={'.8rem 1.6rem'}
          bRad={'30px'}
          bg={'var(--color-accent)'}
          color={'#fff'}
        />
      </div>
    </form>
  );
};

export default ExpenseForm;
