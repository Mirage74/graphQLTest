// Core
import React from 'react';

// Hooks
import { useCustomerCreator } from './hooks/useCustomerCreator';

export const Customer = () => {
  const { handleChange, save, createdAccount, errorCreateUser } = useCustomerCreator();

  const myRef = React.createRef()
  const myRef2 = React.createRef()
  const myRef3 = React.createRef()

  const customerJSX = createdAccount && (
    <p>
      Сustomer { createdAccount.name } was successfully created !
    </p>
  );

  

  const saveAndClear = ()  => {
    save()
    myRef.current.value = ""
    myRef2.current.value = ""
    myRef3.current.value = ""
  }


  const errorCreateJSX = errorCreateUser &&
  (
    <p>
      {errorCreateUser.message}
    </p>
  )

  return (
    <>
      <h1>Registration</h1>
      <input ref={myRef} type="text" placeholder="name" name="name" onChange={handleChange} />
      <input ref={myRef2} type="text" placeholder="username" name="username" onChange={handleChange} />
      <input ref={myRef3} type="password" placeholder="password" name="password" onChange={handleChange} />
      <button type="submit" onClick={saveAndClear}>Save</button>
      {errorCreateJSX}
      { customerJSX }
    </>
  )
};
