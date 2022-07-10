import * as Yup from 'yup';

const DollarCardschema = Yup.object().shape({
  accountNo: Yup.string()
  .matches(/^[0-9]+$/, "Must be only digits")
  .min(6, 'Account number must be exactly 6 digits')
  .max(6, 'Account number must be exactly 6 digits')
    .required('Account number is required'),
    panNo: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(6, 'Pan number must be exactly 6 digits')
    .max(6, 'Pan number must be exactly 6 digits')
      .required('Pan number is required'),
      email: Yup.string()
      .email('Must be a valid email')
      .required('Email is required.'),
    mobileno: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
  .min(10, 'Mobile number must be exactly 10 digits')
  .max(10, 'Mobile number must be exactly 10 digits')
    .required('Mobile number is required'),
      
});

export default DollarCardschema;
