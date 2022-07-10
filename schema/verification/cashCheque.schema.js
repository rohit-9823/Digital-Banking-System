import * as Yup from 'yup';

const CashChequeSchema = Yup.object().shape({
  accountNo: Yup.string()
  .matches(/^[0-9]+$/, "Must be only digits")
  .min(6, 'Account number must be exactly 6 digits')
  .max(6, 'Account number must be exactly 6 digits')
    .required('Account number is required'),
  accountName: Yup.string()
  .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed ")
    .required("Account Holder's Name is required."),
  branch: Yup.string().required('Branch is required.'),
  currency: Yup.string().required('Required'),
});

export default CashChequeSchema;
