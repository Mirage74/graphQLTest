import React from 'react';


// Hooks
import { useCustomerAuth } from './hooks/useCustomerAuth';

export const Login = () => {
  const { handleChange, logIn, authorizedCustomer, errorLog} = useCustomerAuth();


  const myRef = React.createRef()
  const myRef2 = React.createRef()

  

  const logAndResetForm = (e) => {
    logIn()
    myRef.current.value = ""
    myRef2.current.value = ""

  }
  const errorLogJSX = errorLog &&
  (
    <p>
      {errorLog.message}
    </p>
  )

  const authorizedCustomerJSX = authorizedCustomer && (
    <>
      <p>Authorized Customer: { authorizedCustomer.customer.name }</p>
    </>
  );



  return (
    <>
      <h1>Login</h1>
      <input ref={myRef} type="text" placeholder="username" name="username" onChange={handleChange} />
      <input ref={myRef2} type="password" placeholder="password" name="password" onChange={handleChange} />
      <button type="submit" onClick={logAndResetForm}>Login</button>
      {errorLogJSX}
      {authorizedCustomerJSX}
    </>
  )
};
