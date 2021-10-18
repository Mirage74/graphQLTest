import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const useFormik = () => {
  const [form, setForm] = useState()

  const Basic = (
    <div>
      <h1>Any place in your app!</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          
            console.log(JSON.stringify(values, null, 2));
            
            setForm(values)
            setSubmitting(false);
          
        }
      }
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )

  
 

  return {
    Basic,  
    form
  }
};





 