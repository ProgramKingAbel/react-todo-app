import React, { useState } from 'react';

const Form = () => {
  const carBrands = ["Mercedes", "BMW", "Maserati", "Infinity", "Audi"];
  const carBrandOptions = carBrands.map((carBrand, key) => (
    <option value={carBrand} key={key}>{ carBrand }</option>
  ))

  const [state, setState] = useState({
    fname: "",
    lname: "",
    message: "",
    carBrand: "",
    isChecked: false,
  });

  const handler = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setState((state) => ({
      ...state,
      [e.target.name]: value
    }))
  }

  return (
    <>
      <h1>Controlled Forms</h1>
      <form>
        <label>
          First Name: {" "}
          
          <input type="text" name='fname' value={state.fname} onChange={handler}/>
        </label>
        <label>
          Last Name: {" "}
          
          <input type="text" name='lname' value={state.lname} onChange={handler}/>
        </label>
        <label>
          Your Message:
          
          <textarea name='message' value={state.message} onChange={handler}/>
        </label>
        <label>
          Car brand:
          <select name='carBrand'
            value={state.carBrand}
            onChange={handler}
          >
            <option
              value={""} disabled
            >
              --Pick a car Brand--
            </option>
            {carBrandOptions}
          </select>
        </label>
        <label>
          <input
            type='checkbox'
            name='isChecked'
            checked={state.isChecked}
            onChange={handler}
          />
            Is Checked?
          
        </label>
      </form>
      <h5>First name: {state.fname}</h5>
      <h5>Last name: {state.lname}</h5>
      
      <h5>
        Name: {state.fname} {state.lname}
      </h5>
      <p>Message: {state.message}</p>
      <h5>Favourite Car brand: { state.carBrand }</h5>
      <h5>Is it checked: { state.isChecked ? "Yes" : "No" }</h5>
    </>
  )
}

export default Form