// Core
import { useMutation } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

// Hooks
import { useForm } from '../useForm';

// Mutations
const mutationCreateAccount = loader('./gql/mutationCreateAccount.graphql');

export const useCustomerCreator = () => {
  const [_save, { data, error }] = useMutation(mutationCreateAccount);
  const errorCreateUser = error
  const {form, handleChange} = useForm({
    name: '',
    username: '',
    password: ''
  });

  
  const save = () => {
    _save({
      variables: {
        account: form
      }
    })
  };

  return {
    handleChange,
    save,
    errorCreateUser,
    createdAccount: data && data.createAccount
  }
};
