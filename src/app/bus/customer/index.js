import React from 'react'

import { useCustomer } from './hooks/useCustomer'
import { useLog } from "./hooks/useLogCustomer";
import { onError } from "@apollo/client/link/error"

export const Customer = () => {
  const { handleChange, save, createdAccount } = useCustomer()
  const { handleChangeLogin, getJWT, JWT, loading, user, error   } = useLog()


  onError(({ graphQLErrors, networkError, operation, forward }) => {
    console.log("onError")
    if (graphQLErrors) {
      console.log("onError 111")

    }
    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
      // if you would also like to retry automatically on
      // network errors, we recommend that you use
      // apollo-link-retry
    }
  }
)

const errorJSX = error && 
  (
    <p>
      {error.message}
    </p>
  )



  // if (JWT) {
  //   console.log('jwt ', JWT)
  // }

  const customerJSX = createdAccount && (
    <p>
      We already created customer with name: { createdAccount.name}
    </p>
  )

  const jwtJSX = JWT && (
    <p>
      Hello, {user}
      <br/>
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
    { customerJSX}
  </>


  const loginJSX = <>
    <h1>Login</h1>
    <input type="text" placeholder="username" name="username" onChange={handleChangeLogin} />
    <input type="password" placeholder="password" name="password" onChange={handleChangeLogin} />
    <button type="submit" onClick={getJWT}>Login</button>
    {errorJSX}
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
