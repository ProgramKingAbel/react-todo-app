import React, { useState } from 'react';

const Form = () => {
  const [fname, setFname] = useState("");

  const handler = (e) => {
    setFname(e.target.value);
  }

  return (
    <>
      <h1>Controlled Forms</h1>
      <form>
        <label>
          First Name: {" "}
          
          <input type="text" value={fname} onChange={handler}/>
        </label>
      </form>
      <h5>First name: { fname }</h5>
    </>
  )
}

export default Form