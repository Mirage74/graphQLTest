// Core
import { useLazyQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

// Queries
const queryAllAvailablePets = loader('./gql/queryAllAvailablePets.graphql');

export const useQueryAllAvailablePets = () => {
  const [getAllAvailablePets, { loading, error, data }] = useLazyQuery(queryAllAvailablePets);
  //const [ga, { loading, error, data }] = useLazyQuery(queryAllAvailablePets);
    

  return { getAllAvailablePets, loading, error, pets: data && data.allAvailablePets }
  //return { ga, loading, error, pets: data && data.allAvailablePets }

  
};
