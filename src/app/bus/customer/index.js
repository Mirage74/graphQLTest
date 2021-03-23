import React from 'react'

import { useCustomer } from './hooks/useCustomer'
import { useLog } from "./hooks/useLogCustomer";


export const Customer = () => {
  const { handleChange, save, createdAccount, error } = useCustomer()
  const { handleChangeLogin, getJWT, JWT, loading, user, errorLog } = useLog()

  const errorJSX = error &&
    (
      <p>
        {error.message}
      </p>
    )


  const errorLogJSX = errorLog &&
    (
      <p>
        {errorLog.message}
      </p>
    )

  const customerJSX = createdAccount && (
    <p>
      We already created customer with name: { createdAccount.name}
    </p>
  )

  const jwtJSX = JWT && (
    <p>
      Hello, {user}
      <br />
      { JWT}
    </p>
  )



  const jwtLoading = loading && (
    <p>
      Идет проверка пользователя...
    </p>
  )

  const regJSX = <>
    <h1>Registration</h1>
    <input type="text" placeholder="name" name="name" onChange={handleChange} />
    <input type="text" placeholder="username" name="username" onChange={handleChange} />
    <input type="password" placeholder="password" name="password" onChange={handleChange} />
    <button type="submit" onClick={save}>Save</button>
    { errorJSX}
    { customerJSX}
  </>


  const loginJSX = <>
    <h1>Login</h1>
    <input type="text" placeholder="username" name="username" onChange={handleChangeLogin} />
    <input type="password" placeholder="password" name="password" onChange={handleChangeLogin} />
    <button type="submit" onClick={getJWT}>Login</button>
    {errorLogJSX}
    {jwtLoading}
    {jwtJSX}
  </>




  return (
    <>
      {regJSX}
      <br />
      {loginJSX}
    </>
  )
}
