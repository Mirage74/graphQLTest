import { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

// Mutations
const mutationCreateAccount = loader('./gql/mutationCreateAccount.graphql');

export const useCustomer = () => {
  const [addUser, { data }] = useMutation(mutationCreateAccount)

  const [values, setValues] = useState({
    account: {
      name: '',
      username: '',
      password: ''
    }
  })

//...prevValues.account,
  const handleChange = (event) => {
    setValues((prevValues) => (
      {
        account: {
        ...prevValues.account,
        [event.target.name]: event.target.value
      }
    }))
  }


  const save = () => {
    const { account } = values
    console.log("account save ", account)    
    
    addUser({
      variables: {
        account
      }
    })
  }


  return {
    handleChange,
    save,
    createdAccount: data && data.createAccount,
  }
};