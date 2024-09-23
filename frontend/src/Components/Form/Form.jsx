import './Form.css'
import { useState } from "react";
import DatePicker from "react-datepicker";
import { useGlobalContext } from "../../context/globalContext";
import "react-datepicker/dist/react-datepicker.css"
import { Button } from './../Button/button';
import { plus } from '../../utils/icons';

export const Form = ({ onFormSubmit }) => {
  const { addIncome, getIncomes } = useGlobalContext();

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
  };

  const { title, amount, category, description, date } = inputState;

  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome(inputState).then(() => {
      // clear inputs.
      setInputState(defaultInputs);
      if (onFormSubmit) {
        onFormSubmit();
      }
    }).catch(() => console.error(`Error Adding Incomes`));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input-control">
        <input
          type="text"
          value={title}
          name={"title"}
          id="title"
          placeholder="Salary Title"
          onChange={inputHandler("title")}
        />
      </div>
      <div className="input-control">
        <input
          type="text"
          value={amount}
          name={"amount"}
          id="amount"
          placeholder="Salary Amount"
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
          <option value="salary">Salary</option>
          <option value="freelancing">Freelancing</option>
          <option value="investments">Investments</option>
          <option value="stocks">Stocks</option>
          <option value="bank">Bank Options</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="submit-btn">
        <Button 
          name={'Add Income'}
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

export default Form;