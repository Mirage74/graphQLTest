import { useState } from 'react';

export const useForm = (initialValues) => {
  const [form, setForm] = useState(initialValues);

  const handleChange = (event) => {
    //console.log("event : ", event)
    //event.persist();
    //console.log("event.target.value ", event.target.value)
    setForm((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value
    }))

    
  }

 
 

  return {
    handleChange,
    form
  }
};
