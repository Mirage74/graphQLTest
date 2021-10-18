// Core
import { useMutation } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';
//import { useState } from 'react';

// Hooks
import { useForm } from '../useForm';

// Mutations
const mutationLogIn = loader('./gql/mutationLogIn.graphql');

export const useCustomerAuth = () => {
  
  const [_logIn, { data, error }] = useMutation(mutationLogIn);
  const errorLog = error
  const { form, handleChange } = useForm({
    username: '',
    password: ''
  });

  
  
  console.log("data : ", data)

  const authorizedCustomer = data && data.logIn;
  const token = authorizedCustomer && authorizedCustomer.token;

  if (token) {
    localStorage.setItem('token', token);
  }

  const logIn = () => {
    //console.log("form : ", form)
    _logIn({
      variables: form
    });
  };

  const logInFormik = (name, pass) => {
    // console.log("name : ", name)
    // console.log("pass : ", pass)
    const dataLog = {
      username : name,
      password : pass
    }
    _logIn({
      variables: dataLog
    });
  };

  return {
    logIn,
    logInFormik,
    errorLog,
    handleChange,
    authorizedCustomer
  }
};
