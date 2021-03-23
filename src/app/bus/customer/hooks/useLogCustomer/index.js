import { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

// Mutations
const mutationLogin = loader('./gql/mutationLogin.graphql')

export const useLog = () => {
  const [loginUser, { data, loading, error }] = useMutation(mutationLogin)
  const errorLog = error

  const [logData, setLogData] = useState({
    account: {
      username: '',
      password: ''
    }
  })




  const handleChangeLogin = (event) => {
    setLogData((prevValues) => (
      {
        account: {
          ...prevValues.account,
          [event.target.name]: event.target.value
        }
      }))
  }


  const getJWT = () => {
    const { username, password } = logData.account
    //console.log("account log ", account)    
    loginUser({
      variables: {
        username,
        password
      }
    })
  }


  return {
    handleChangeLogin,
    getJWT,
    loading,
    errorLog,
    JWT: data && data.logIn.token,
    user: logData.account.username
  }
};
