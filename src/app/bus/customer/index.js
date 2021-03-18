import React from 'react'

import { useCustomer } from './hooks/useCustomer'
import { useLog } from "./hooks/useLogCustomer";

export const Customer = () => {
  const { handleChange, save, createdAccount } = useCustomer()
  const { handleChangeLogin, getJWT, JWT } = useLog()
  console.log('jwt ', JWT)

  const customerJSX = createdAccount && (
    <p>
      We already created customer with name: { createdAccount.name}
    </p>
  )

  const jwtJSX = JWT && (
    <p>
      { JWT}
    </p>
  )

  const regJSX = <>
    <h1>Registration</h1>
    <input type="text" placeholder="name" name="name" onChange={handleChange} />
    <input type="text" placeholder="username" name="username" onChange={handleChange} />
    <input type="password" placeholder="password" name="password" onChange={handleChange} />
    <button type="submit" onClick={save}>Save</button>
    { customerJSX}
  </>


  const loginJSX = <>
    <h1>Login</h1>
    <input type="text" placeholder="username" name="username" onChange={handleChangeLogin} />
    <input type="password" placeholder="password" name="password" onChange={handleChangeLogin} />
    <button type="submit" onClick={getJWT}>Login</button>
    {jwtJSX}
  </>



  return (
    <>
      {regJSX}
      <br />
      {loginJSX}
    </>
  )
};
