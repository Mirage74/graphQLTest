import { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';
import { onError } from "@apollo/client/link/error"

// Mutations
const mutationLogin = loader('./gql/mutationLogin.graphql')

export const useLog = () => {
  const [loginUser, { data, loading, error }] = useMutation(mutationLogin)


  const [logData, setLogData] = useState({
    account: {
      username: '',
      password: ''
    }
  })


  // console.log("data : ", data)
  // console.log("error : ", error)

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



//   if (link && link.graphQLErrors) {
//     console.log(link.graphQLErrors)
// }


  // if (error) {
  //   console.log("error 44", error)
  //   return {
  //     error : error
  //   }
  // }
  


  // onError(({ response, operation }) => {
  //   if (operation.operationName === "IgnoreErrorsQuery") {
  //     response.errors = null;
  //   }
  // });


  //console.log("onError : ", onError)






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
    error,
    JWT: data && data.logIn.token,
    user: logData.account.username
  }
};
