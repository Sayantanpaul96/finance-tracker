import { useGlobalContext } from '../../context/globalContext';
import Form from '../Form/Form';
import './Income.css';

export const Income = () => {

    const { addIncome }  = useGlobalContext();

    return (
        <div className='Income'>
            <div className="inner-layout">
                <h1>Incomes</h1>
                <div className="income-content">
                    <div className="form-container">
                        <Form />
                    </div>
                    <div className="incomes">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Income;