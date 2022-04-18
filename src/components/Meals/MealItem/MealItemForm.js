import { useRef, useState } from "react";

import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
const MealItemForm = (props) => {
    const amountInputRef=useRef();
    const [isAmountValid, setAmountIsValid] = useState(true)
    const submitHandler = event =>{
        event.preventDefault();

        const enteredAmount= amountInputRef.current.value;
        const enteredAmountNumber=+enteredAmount;
        if(enteredAmount.trim().length === 0  || enteredAmountNumber < 1 ||enteredAmountNumber >5){
            setAmountIsValid(false);
            return;
        }


        props.onAddToCart(enteredAmountNumber);
    };
    return <form className={classes.form} onSubmit={submitHandler}>
        <Input 
        ref={amountInputRef}
        label="Amount" input={{
            id: 'amount' + props.id,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1',
        }}></Input>
        <button> Add</button>
        {!isAmountValid && <p>Please entere correct input!</p>}
    </form>
};
export default MealItemForm;
