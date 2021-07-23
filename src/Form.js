import React, { useState, useEffect } from "react";
import * as Yup from 'yup';
import axios from "axios";

const Form = () => {
    const [food, setFood] = useState({
        name: '', 
        size: '',
        cheese: false,
        feta_cheese: false,
        pepperoni: false,
        sausage: false,
        olives: false,
        bbq: false,
        specialText: '',

    })

    const {name, size, cheese, feta_cheese, pepperoni, sausage, olives, bbq, specialText} = food;
    const [orderConfirmed, setOrderConfirmed] = useState(false);

    const changeHandler = e => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFood({...food, [e.target.name]: value});
    }
  //  Data get from API //

    const submitHandler = event => {
    event.preventDefault();
    axios
    .post("https://reqres.in/api/orders", food)
    .then(res => {
    console.log(res.data,"here is your data: res.data")
    setPost([...post,res.data]); 
    })
    .catch(err => console.log(err.response))
    console.log(food);
    setOrderConfirmed(true);
    }
    
    // Requirement of form //
    const schema = Yup.object().shape({
    name: Yup.string().required("customer name required").min(2,"name must be at least 2 characters"),
    size: Yup.string().oneOf(['tiny', 'regular', 'wumbo']).required("you must select a size"),
    })

    const [disabled, setDisabled] = useState(true);

    useEffect(()=>{
    schema.isValid(food).then(valid => setDisabled(!valid))
    }, [food])


    const [post, setPost] = useState([]);

  // Form topping //
    return(
        <>
        <h3>Select your toppings:</h3>
        {disabled && <p style={{color: 'red'}}>name must be at least 2 characters</p>}
        {!orderConfirmed && <form id="pizza-form" onSubmit={submitHandler}> 
        <label htmlFor="name">
        <h2> Customer Name:</h2>
        <input type="text" name="name" id="name-input" value={name} onChange={changeHandler}/>
        </label>
        <hr/>
        {/* Select input */}
        {disabled && <p style={{color: 'red'}}>you must select a size</p>}
        <label htmlFor="size">
        <h2> How hungry are you?</h2>
        {/* select options */}
        <select name="size" id="size-dropdown" value={size} onChange={changeHandler}>
        <option value="size">Size</option>
        <option value="tiny">Tiny</option>
        <option value="regular">Regular</option>
        <option value="jumbo">Jumbo</option>
        </select>
        </label>

        {/* checkbox  */}

        <h2>Are you want some toppings?</h2>
        <label htmlFor="cheese">
        <input checked={cheese} type="checkbox" name="cheese" value={cheese} id="cheese" onChange={changeHandler}/>
        Cheese
        </label>
        <label htmlFor="feta_cheese">
        <input checked={feta_cheese} type="checkbox" name="feta_cheese" value={feta_cheese} id="feta_cheese" onChange={changeHandler}/>
        Feta Cheese
        </label>
        <label htmlFor="pepperoni">
        <input checked={pepperoni} type="checkbox" name="pepperoni" value={cheese} id="pepperoni" onChange={changeHandler}/>
        Pepperoni
        </label>
        <label htmlFor="sausage">
        <input checked={sausage} type="checkbox" name="sausage" value={sausage} id="sausage" onChange={changeHandler}/>
        Sausage
        </label>
        <label htmlFor="Olives">
        <input checked={olives} type="checkbox" name="olives" value={cheese} id="olives" onChange={changeHandler}/>
        Olives
        </label>
        <label htmlFor="Original Red">
        <input checked={bbq} type="checkbox" name="bbq" value={bbq} id="bbq" onChange={changeHandler}/>
        Special Topping 
        </label>
            
          <hr/>
            {/* text box */}
            <label htmlFor="specialText">
            <h2> Do you need Anything else? </h2> <br/><br/>
            <textarea rows={8} cols={60} name='specialText' value={specialText} placeholder='Tell us how we can help you?' id ='special-text'  onChange={changeHandler}/>
            </label>
            <hr/>
             
             {/* button which is disabled */}
            <button id="order-button" type="submit" disabled={disabled}>Place your Order </button>
            </form>
                }
        </>
    )
}

export default Form;