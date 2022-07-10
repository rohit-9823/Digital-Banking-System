import * as Yup from 'yup';

const MeroShareSchema = Yup.object().shape({
    request : Yup.string()
    .required("Request is required"),
    accountNum: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(6, 'Account number must be exactly 6 digits')
    .max(6, 'Account number must be exactly 6 digits')
      .required('Account number is required'),
    accountName: Yup.string()
  .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed ")
    .required("Account Holder's Name is required."),
    dpId : Yup.string()
  .matches(/^[0-9]+$/, "Must be only digits")
  .min(8, 'BOID must be exactly 8 digits')
  .max(8, 'BOID must be exactly 8 digits')
    .required('BOID is required'),
    clientId: Yup.string()
  .matches(/^[0-9]+$/, "Must be only digits")
  .min(8, 'Client ID must be exactly 8 digits')
  .max(8, 'Client ID must be exactly 8 digits')
    .required('Client ID is required'),
    address : Yup.string()
    .required("Address is required."),
    email : Yup.string()
    .email('Must be a valid email')
    .required("Email address is required."),
    mobileNum : Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
  .min(10, 'Mobile number must be exactly 10 digits')
  .max(10, 'Mobile number must be exactly 10 digits')
    .required('Mobile number is required'),
  });

export default MeroShareSchema;