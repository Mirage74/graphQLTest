import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Hooks
import { useCustomerAuth } from './hooks/useCustomerAuth';


// return (
//   <>
//     <br />
//     <br />
//     <SignupForm />
//     <h1>Login</h1>
//     <input ref={myRef} type="text" placeholder="username" name="username" onChange={handleChange} />
//     <input ref={myRef2} type="password" placeholder="password" name="password" onChange={handleChange} />
//     <button type="submit" onClick={logAndResetForm}>Login</button>
//     {errorLogJSX}
//     {authorizedCustomerJSX}
//   </>
// )

export const Login = () => {
  const { handleChange, logIn, logInFormik, authorizedCustomer, errorLog } = useCustomerAuth();


  const myRef = React.createRef()
  const myRef2 = React.createRef()



  const logAndResetForm = (e) => {
    logIn()
    myRef.current.value = ""
    myRef2.current.value = ""
  }

  const errorLogJSX = errorLog &&
    (
      <p>
        {errorLog.message}
      </p>
    )

  const authorizedCustomerJSX = authorizedCustomer && (
    <>
      <p>Authorized Customer: {authorizedCustomer.customer.name}</p>
      <p>Token: {authorizedCustomer.token}</p>
    </>
  );


  //const SignupForm = () => {
    const formik = useFormik({
      initialValues: {
        userName: '',
        password: ''
      },
      validationSchema: Yup.object({
        userName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        password: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required')
      }),
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
    });
    //<form onSubmit={formik.handleSubmit}>

    return (
      <div>
        <br />
        <label htmlFor="userName">User Name</label>
        <input
          id="userName"
          name="userName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.userName}
        />
        {formik.touched.userName && formik.errors.userName ? (
          <div>{formik.errors.userName}</div>
        ) : null}

        <label htmlFor="password">password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.lastName}</div>
        ) : null}

        <button type="submit" onClick={logInFormik(formik.values.userName, formik.values.password)}>Login</button>
        {errorLogJSX}
        {authorizedCustomerJSX}
      </div>
    );
  //};




};
